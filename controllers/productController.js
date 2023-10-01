const fs = require("fs");

const productController = {

  allProducts: (JSON.parse(fs.readFileSync("./data/products/products.json", "utf-8"))),

  getJSON: () => {

    const allProducts = (JSON.parse(fs.readFileSync("../data/products/products.json", "utf-8")));

    return allProducts;
  },

  findProduct: (id) => {

    const productToFind = JSON.parse(fs.readFileSync("./data/products/products.json", "utf-8"));

    return productToFind.find(product => product.id === id) || null;

  },

  createProduct: (req, res) => {

    //Funcion Constructora para nuevos productos
    function Producto(id, title, description, image, category, price, off, color, color1) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.category = category;
        this.price = price;
        this.off = off;
        this.color = color;
        this.color1 = color1;
      }

    //obtenemos los datos del formulario de creacion
    const productInfo = req.body;

    //obtenemos un ID (el metodo cambiara a futuro)
    const productID = (JSON.parse(fs.readFileSync("./data/products/products.json", "utf-8"))).length + 1;

    //concatenamos la ruta de la carpeta images con el nombre de la imagen para obtener la ruta
    const dir = "images/";
    const newFileName = req.file.filename;
    productInfo.image = dir + newFileName;
    
    //Creamos el nuevo producto con los datos del formulario
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

    //verificamos si el producto ya existe, en tal caso negaremos la solicitud
    const existingProduct = productController.findProduct(product.id)
    if(existingProduct){
      return res.status(409).send("nao nao manito")
    }

    //redirijimos a Home
    res.redirect("/")
    
    //agregamos el nuevo producto al JSON
    const newProduct = JSON.parse(fs.readFileSync("./data/products/products.json", "utf-8"));
    newProduct.push(product);
    return fs.writeFileSync("./data/products/products.json", JSON.stringify(newProduct), "utf-8");
  },

  editProduct: (req, res) => {

    const itemId = req.params.id;

    const itemInfo = req.body;

    const products = productController.getJSON;

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

  deleteProduct: (req, res) => {

    const id = req.params.id;

    const products = JSON.parse(fs.readFileSync("./data/products/products.json", "utf-8"));

    const productToDelete = products.find((product) => product.id === id);

    products.splice(products.indexOf(productToDelete), 1);

    fs.writeFileSync("./data/products/products.json", JSON.stringify(products), "utf-8");

    res.send("Producto eliminado");
  },

  getHomePage: (req, res) => {

    const products = JSON.parse(fs.readFileSync("./data/products/products.json", "utf-8"));

    res.render("products/home", { products: products });

  },

  getProductsPage: (req, res) => {

    const products = JSON.parse(fs.readFileSync("./data/products/products.json", "utf-8"));

    res.render("products/products", { products: products});
    
  },

  getDetailpage: (req, res) => {
    
    const products = productController.allProducts.find((detail) => detail.id == req.params.id);

    res.render("products/detailProduct", { products: products });
  },

  getCreatePage: (req, res) => {

    res.render("products/create");
    
  },

  getEditPage: (req, res) => {

    res.render("products/update");

  },

  getDeletePage: (req, res) => {

    res.render("products/delete");

  },

  getCartPage: (req, res) => {

    res.render("products/cart");

  }

};
module.exports = productController;