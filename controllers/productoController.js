const fs = require("fs")

let productos = [
  {
    id: 1,
    titulo : "Parlante CAT",
    precio: "$6.770",
    descuento: "40% off",
    imagen: "images/cat-parlante.png"
  },
  {
    id: 2,
    titulo : "Iphone 14 Promax",
    precio: "$230.000",
    descuento: "20% off",
    imagen: "images/iphone-14-promax.png"
  },
  {
    id: 3,
    titulo : "Control de XBOX",
    precio: "$23.200",
    descuento: "5% off",
    imagen: "images/xbox-control.png"
  },
]

class Producto {
  builder(id, nombre, description, image, category, price) {
    this.id = id;
    this.nombre = nombre;
    this.description = description;
    this.image = image;
    this.category = category;
    this.price = price;
  }
}

const productoController = {
  filePath: "../data/products/products.json",

  getAllProducts: (req, res) => {
    return JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
  },
  findProducts() {
    return this.getAllproducts()
  },
  getProduct(id) {
    let products = this.findProducts;
    let searchedProduct = products.find((productoA) => productoA.id === id);
    return searchedProduct;
  },

  createProduct(req, res) {
    const datosProducto = req.body;

    const producto = new Producto(
      datosProducto.Id,
      datosProducto.nombre,
      datosProducto.description,
      datosProducto.image,
      datosProducto.category,
      datosProducto.price,
    );
    const products = this.getAllProducts();
    products.push(producto);
    fs.writeFileSync(this.filePath, JSON.stringify(products), "utf-8");
    return producto;
  },
  editProducto: (req, res) => {
    const idProduct = req.params.id;
    const productData = req.body;

    const products = this.getAllProducts;
    const producto = products.find((producto) => producto.id === idProduct);

    if (producto) {
      producto.id = productData.id;
      producto.nombre = productData.nombre;
      producto.descripcion = productData.description;
      producto.imagenes = productData.image;
      producto.categoria = productData.category;
      producto.precio = productData.price;

      fs.writeFileSync(this.filePath, JSON.stringify(products), "utf-8");
    }
  },

  getProductsPage: (req, res) => {
    const productId = req.params.id;
    res.render(`products/producto/${productId}`);
  },

  getDetailpage: (req,res) => {
    const products = productos;
    const product = products.find(productA => productA.id == req.params.id);


    res.render("products/detailProduct", {product})
  }

};

module.exports = productoController;