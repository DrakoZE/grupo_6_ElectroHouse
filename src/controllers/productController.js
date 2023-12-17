const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const Op = db.Sequelize.Op;
let { validationResult } = require("express-validator");

const productController = {
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
    console.log(usuario);

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
    res.render("products/update", { color: colors, category: categories, product});
  },

  // Actualiza un producto en la lista de productos.
  update: async (req, res) => {

    let errors= validationResult(req);

    // Validamos que los datos se hayan cargado correctamente.
    if (req.file && errors.isEmpty()) {
      let idProduct = req.params.id
      let colors = req.body.color;
      let colorDefault = colors.shift();
      let idColors = colors.map(string => parseInt(string))
      console.log(idColors);

    let productoEditado = await db.Product.update({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      off: req.body.off,
      stock: req.body.stock,
      tradeMark: req.body.tradeMark,
      categoryId: req.body.category,
      image: req.file.originalname,
    },{
      where: {id: idProduct}
    })
    console.log(productoEditado);
    let coloresSeleccionados = await db.Color.findAll({
      where: {id: idColors}
    })
    console.log(coloresSeleccionados);
    await Promise.all(coloresSeleccionados.map(color => {
      return db.Gamma.create({
        product_id: productoEditado.id,
        color_id: color.id
      });
    }));
    res.redirect("/products");
  }else{

    let products = await db.Product.findByPk(req.params.id);

    res.render("products/update", { products, errors: errors.mapped(), old: req.body });
  }
},

  // Elimina un producto de la lista de productos.
  delete: async (req, res) => {

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
      } else {
        console.log('Imagen eliminada con éxito');
      }
    } )

    res.redirect("/products")
  },
  // Buscar un producto segun su titulo
  search: async (req,res) => {
    let titulo = req.query.title

    if (titulo) {

    let product = await db.Product.findAll({
        where: {
            title: {[Op.like]: "%" + titulo + "%"}
        }
    })

    res.render("products/results", {products: product, titulo})
    } else {
      res.status(500).send("FALLO EN EL SERVIDOR")
    }
  },
};
module.exports = productController;