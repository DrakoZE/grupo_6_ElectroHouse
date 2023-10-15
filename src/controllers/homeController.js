const fs = require("fs");
const path = require("path");

const homeController = {

    // Obtenemos los datos del JSON.
  allProducts: (JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products/products.json"), "utf-8"))),

  // Renderizamos home.
  home: (req, res) => {
    const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products/products.json"), "utf-8"));
    res.render("products/home", { products });
  }
}
module.exports = homeController;