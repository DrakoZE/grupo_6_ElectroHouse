const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
let { validationResult } = require("express-validator");

const productController = {

  // Obtenemos los datos del JSON.
  // allProducts: (JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products/products.json"), "utf-8"))),

  // Renderizamos la vista con los productos.
  index: async(req, res) => {
    let productos = await db.Product.findAll({
      include: ["gammas","user"]
    });
    // console.log(productos);
    // let colorBorde = productos[0].gammas[0].code
    res.render("products/products", {products: productos})
  },

  // Renderizamos la vista con detalles de un producto.
  show: async (req, res) => {

    let colors = await db.Color.findAll();
    let categories = await db.Category.findAll();
    let product = await db.Product.findByPk(req.params.id, {
      include: ["gammas"]
    })

    res.render("products/detailProduct", { color: colors, category: categories, product });
  },

  // Renderizamos el carro de compras.
  cart: (req, res) => {
    res.render("products/cart");
  },

  // Renderizamos el formulario de creacion de productos.
  add: (req, res) => {
    let usuario =  req.session.logUser;
    let userCategory = usuario.seller

    if (userCategory == "Vendedor") {
    db.Color.findAll()
      .then(function(color){

        db.Category.findAll()
          .then(function(category){
            return res.render("products/create", { color, category });

          })

      })
    } else {
      res.send("NO ES UN VENDEDOR")
    }
  },

  // Crea un nuevo elemento en la lista de productos.
  create: async (req, res) => {
    let errors= validationResult(req);

    // Validamos que los datos se hayan cargado correctamente.
    if (errors.isEmpty()) {

      let usuario =  req.session.logUser;
      let idUser = usuario.id
      let colors = req.body.color;
      let colorDefault = colors.shift();
      let idColors = colors.map(string => parseInt(string))
      console.log(idColors);
      let productoNuevo = await db.Product.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        off: req.body.off,
        stock: req.body.stock,
        tradeMark: req.body.tradeMark,
        categoryId: req.body.category,
        image: req.file.originalname,
        userId: idUser
      },{
        include: ["gammas","user"]
      })
      let coloresSeleccionados = await db.Color.findAll({
        where: {id: idColors}
      })
      // console.log(coloresSeleccionados[0].id);
      await Promise.all(coloresSeleccionados.map(color => {
        return db.Gamma.create({
          product_id: productoNuevo.id,
          color_id: color.id
        });
      }));
      res.redirect("/products");

    }else{

      db.Color.findAll()
      .then(function(color){

        db.Category.findAll()
          .then(function(category){

            // console.log(errors)
            return res.render("products/create", { color, category, errors: errors.mapped(), old: req.body });

          })

      })

    }
  },

  // Renderizamos el formulario de edicion de productos.
  edit: async (req, res) => {
    let idProduct = req.params.id;
    let colors = await db.Color.findAll();
    let categories = await db.Category.findAll();
    let product = await db.Product.findByPk(idProduct, {
      include: ["gammas", "categories"]
    })
    // let idColor = product.gammas[0].id;
    // let code = product.gammas[0].code
    // console.log(idColor,code);
    res.render("products/update", { color: colors, category: categories, product});
  },

  // Actualiza un producto en la lista de productos.
  update: (req, res) => {

    let errors= validationResult(req);

    // Validamos que los datos se hayan cargado correctamente.
    if (req.file && errors.isEmpty()) {

    // Obtenemos todos los productos existentes.
    let products = productController.allProducts;

    // Asigna el ID y la imagen del producto a actualizar.
    req.body.id = req.params.id;
    req.body.image = req.file ? req.file.filename : req.body.oldImg;

    // Busca el producto a actualizar y reemplaza sus datos con los nuevos.
    let productUpdate = products.map(product => {
      if (product.id == req.body.id){
        res.redirect("/products")
        return product = req.body;
      }
      return product;
    })

    //guarda la lista actualizada de productos en el archivo JSON.
    fs.writeFileSync(path.join(__dirname, "../data/products/products.json"), JSON.stringify(productUpdate, null, 2), "utf-8");
    
  }else{

    const products = productController.allProducts.find((detail) => detail.id == req.params.id);

    res.render("products/update", { products, errors: errors.mapped(), old: req.body });
  }
},

  // Elimina un producto de la lista de productos.
  delete: async (req, res) => {

    // Filtra los productos para obtener todos los productos excepto el que se desea eliminar.
    let idProduct = req.params.id;
    let product = await db.Product.findByPk(idProduct);
    let imagen = product.image
    let ruta = path.join(__dirname, "../../public/images/product-img", imagen)
    await db.Product.destroy({
      where: {id: idProduct}
    })
    fs.unlink(ruta, (err) => {
      if (err) {
        console.error("Error al eliminar la imagen: " + err);
        // Manejar el error según tus necesidades
      } else {
        console.log('Imagen eliminada con éxito');
      }
    } )
    // let product = products.filter(waos => waos.id != productDelete);

    // Redirecciona a la página de productos.
    res.redirect("/products")

    // Guarda la lista actualizada de productos en el archivo JSON.
    // fs.writeFileSync(path.join(__dirname, "../Data/products/products.json"), JSON.stringify(product, null, 2), "utf-8");
  },
};
module.exports = productController;