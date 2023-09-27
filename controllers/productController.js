const fs = require("fs");

class Producto {

  builder(id, title, description, image, category, price, color, color1) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.category = category;
    this.price = price;
    this.color = color;
    this.color1 = color1;
  }

}

const productController = {

  allProducts: (JSON.parse(fs.readFileSync("./data/products/products.json", "utf-8"))),

  getJSON: () => {

    const allProducts = (JSON.parse(fs.readFileSync("../data/products/products.json", "utf-8")));

    return allProducts;
  },

  findProduct: (id) => {

    const productToFind = productController.getJSON();

    return productToFind.find((productA) => productA.id === id) || null;

  },

  getLastId: () => {

    const lastId = productController.getJSON().length;

    return lastId + 1;

  },

  createProduct: (req, res) => {

    const productInfo = req.body;

    const productID = productController.getLastId

    const product = new Producto(

      productID,
      productInfo.title,
      productInfo.description,
      productInfo.image,
      productInfo.category,
      productInfo.price,
      productInfo.off,
      productInfo.color,
      productInfo.color1

    );

    const existingProduct = productController.findProduct(product.id)

    if(existingProduct){

      return res.status(409).send("nao nao manito")

    }

    const newProduct = productController.getJSON();

    newProduct.push(product);

    fs.writeFileSync("./data/products/products.json", JSON.stringify(newProduct), "utf-8");

    return product;

  },

  editProducto: (req, res) => {

    const itemId = req.params.id;

    const itemInfo = req.body;

    const products = productController.getJSON();

    const index = products.find((itemA) => itemA.id === itemId);

    if(index == -1){

      return res.status(404).send("producto no encontrado");

    }

    const item = products[index];

      item.id = itemInfo.id;
      item.title = itemInfo.title;
      item.description = itemInfo.description;
      item.image = itemInfo.image;
      item.category = itemInfo.category;
      item.price = itemInfo.price;
      item.off = itemInfo.off;
      item.color = itemInfo.color;
      item.color1 = itemInfo.color1;

      fs.writeFileSync("./data/products/products.json", JSON.stringify(products), "utf-8");

    return res.send("oki doki")
  },

  getProductsPage: (req, res) => {

    const products = JSON.parse(fs.readFileSync("./data/products/products.json", "utf-8"));

    res.render(`products/products`, { products: products});
  },

  getDetailpage: (req, res) => {
    
    const products = productController.allProducts.find((productA) => productA.id == req.params.id);

    res.render("products/detailProduct", { products: products });
  },

  getCarritoPage: (req, res) => {

    res.render("products/carritoDeCompras");

  },

  getFormPage: (req, res) => {

    res.render("products/crudPage");
    
  }

};
module.exports = productController;