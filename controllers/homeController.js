const fs = require('fs');
const products = JSON.parse(fs.readFileSync('./data/products/products.json', 'utf-8'));
const homeController = {
  getHomePage: (req, res) => {
    res.render("products/home", { products: products });
  },
};

module.exports = homeController;