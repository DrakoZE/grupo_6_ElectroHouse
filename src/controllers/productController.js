const fs = require("fs");
const path = require("path");

let { validationResult } = require("express-validator")

const productController = {

  // Obtenemos los datos del JSON.
  allProducts: (JSON.parse(fs.readFileSync(path.join(__dirname, "../Data/products/products.json"), "utf-8"))),

  // Renderizamos home.
  getHomePage: (req, res) => {
    const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../Data/products/products.json"), "utf-8"));
    res.render("products/home", { products });
  },

  // Renderizamos la vista con los productos.
  getProductsPage: (req, res) => {
    const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../Data/products/products.json"), "utf-8"));
    res.render("products/products", { products });
  },

  // Renderizamos la vista con detalles de un producto.
  getDetailpage: (req, res) => {
    const products = productController.allProducts.find((detail) => detail.id == req.params.id);
    res.render("products/detailProduct", { products });
  },

  // Renderizamos el carro de compras.
  getCartPage: (req, res) => {
    res.render("products/cart");
  },

  // Renderizamos el formulario de creacion de productos.
  getCreatePage: (req, res) => {
    res.render("products/create");
  },

  // Crea un nuevo elemento en la lista de productos.
  createProduct: (req, res) => {

    let errors= validationResult(req);

    // Validamos que los datos se hayan cargado correctamente.
    if (req.file && errors.isEmpty()) {

      // Obtenemos todos los productos existentes.
      let product = productController.allProducts;

      // Obtenemos el ultimo producto de la lista.
      let lastProduct = product.pop();

      // Volvemos a agregar el ultimo producto a la lista.
      product.push(lastProduct);

      // Creamos un nuevo producto con los datos obtenidos del formulario.
      let newProduct = {
        id: lastProduct.id + 1,
        title: req.body.title,
        description: req.body.description,
        image: req.file.filename,
        category: req.body.category,
        price: req.body.price,
        off: req.body.off,
        color: req.body.color,
        color1: req.body.color1,
      }

      // Agregamos el nuevo producto a la lista de productos.
      product.push(newProduct)

      // Redirijimos a Home.
      res.redirect("/")
      
      // Guardamos la lista de productos en el archivo JSON.
      return fs.writeFileSync(path.join(__dirname, "../Data/products/products.json"), JSON.stringify(product, null, 2), "utf-8");

    }else{

      console.log(errors)
      res.render("products/create", { errors: errors.mapped(), old: req.body });
    }
  },

  // Renderizamos el formulario de edicion de productos.
  getEditPage: (req, res) => {
    const products = productController.allProducts.find((detail) => detail.id == req.params.id);
    res.render("products/update", { products });
  },

  // Actualiza un producto en la lista de productos.
  editProduct: (req, res) => {

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
    fs.writeFileSync(path.join(__dirname, "../Data/products/products.json"), JSON.stringify(productUpdate, null, 2), "utf-8");
    
  }else{

    const products = productController.allProducts.find((detail) => detail.id == req.params.id);

    console.log(errors.message)

    res.render("products/update", { products, errors: errors.mapped(), old: req.body });
  }
},

  // Elimina un producto de la lista de productos.
  deleteProduct: (req, res) => {

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