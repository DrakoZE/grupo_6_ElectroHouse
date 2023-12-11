const fs = require("fs");
const path = require("path");
const db = require("../../database/models")
let { validationResult } = require("express-validator")

const productController = {

  // Obtenemos los datos del JSON.
  allProducts: (JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products/products.json"), "utf-8"))),

  // Renderizamos la vista con los productos.
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products/products.json"), "utf-8"));
    res.render("products/products", { products });
  },

  // Renderizamos la vista con detalles de un producto.
  show: (req, res) => {

    db.Color.findAll()
      .then(function(color){

        db.Category.findAll()
          .then(function(category){

            db.Product.findByPk(req.params.id)
              .then(function(product){

                res.render("products/detailProduct", { color, category, product });

              })

          })

      })
    
  },

  // Renderizamos el carro de compras.
  cart: (req, res) => {
    res.render("products/cart");
  },

  // Renderizamos el formulario de creacion de productos.
  add: (req, res) => {

    db.Color.findAll()
      .then(function(color){

        db.Category.findAll()
          .then(function(category){

            return res.render("products/create", { color, category });

          })

      })

  },

  // Crea un nuevo elemento en la lista de productos.
  create: (req, res) => {

    let errors= validationResult(req);

    console.log(req.body.title, req.body.description, req.body.price, req.body.off, req.body.stock, req.body.tradeMark)
    // Validamos que los datos se hayan cargado correctamente.
    if (errors.isEmpty()) {

      db.Product.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        off: req.body.off,
        stock: req.body.stock,
        tradeMark: req.body.tradeMark,
        verificated: false,
        popularity: 0,
        categoryId: req.body.category,
        sellerId: req.body.seller,
      })

      db.Image.create({

        image: req.file,
        name: req.file.filename
      })
      
      res.redirect("/products")

    }else{

      db.Color.findAll()
      .then(function(color){

        db.Category.findAll()
          .then(function(category){

            console.log(errors)
            return res.render("products/create", { color, category, errors: errors.mapped(), old: req.body });

          })

      })

    }
  },

  // Renderizamos el formulario de edicion de productos.
  edit: (req, res) => {
    
    db.Color.findAll()
      .then(function(color){

        db.Category.findAll()
          .then(function(category){

            db.Product.findByPk(req.params.id)
              .then(function(product){

                res.render("products/update", { color, category, product });

              })

          })

      })
    
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
  delete: (req, res) => {

    // Filtra los productos para obtener todos los productos excepto el que se desea eliminar.
    let products = productController.allProducts;
    let productDelete = req.params.id;
    let product = products.filter(waos => waos.id != productDelete);

    // Redirecciona a la página de productos.
    res.redirect("/products")

    // Guarda la lista actualizada de productos en el archivo JSON.
    fs.writeFileSync(path.join(__dirname, "../Data/products/products.json"), JSON.stringify(product, null, 2), "utf-8");
  },
};
module.exports = productController;