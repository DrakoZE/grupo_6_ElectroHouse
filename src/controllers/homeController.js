const fs = require("fs");
const path = require("path");
const db = require("../../database/models")

const homeController = {

    // Obtenemos los datos del JSON.
  // allProducts: (JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products/products.json"), "utf-8"))),

  // Renderizamos home.
  home: async (req, res) => {
    // const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products/products.json"), "utf-8"));
    // res.render("products/home", { products });
    let productos = await db.Product.findAll();
    console.log(productos);
    res.render("products/products", {products: productos})
  }
}
module.exports = homeController;