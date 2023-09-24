const fs = require("fs")

let productos = [
  {
    id: 1,
    titulo: "Parlante CAT",
    precio: "$6.770",
    descuento: "40% off",
    imagen: "images/cat-parlante.png",
    categoria: "Audio",
    color: "#1a7063",
    color1: "#1fe9cb"
  },
  {
    id: 2,
    titulo: "Iphone 14",
    precio: "$230.000",
    descuento: "20% off",
    imagen: "images/iphone-14-promax.png",
    categoria: "Smartphone",
    color: "#512224",
    color1: "#ff2e37"
  },
  {
    id: 3,
    titulo: "Control XBOX",
    precio: "$23.200",
    descuento: "5% off",
    imagen: "images/xbox-control.png",
    categoria: "Entretenimiento",
    color: "#4f3f1f",
    color1: "#ffec08"
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
      datosProducto.id,
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
    const products = productos;
    res.render(`products/products`, {productos: productos});
  },

  getDetailpage: (req, res) => {
    const products = productos;
    const product = products.find(productA => productA.id == req.params.id);

    res.render("products/detailProduct", {productos: productos})
  },

  getCarritoPage: (req, res) => {
    res.render("products/carritoDeCompras");
  },

  getFormPage: (req, res) => {
    res.render("products/crudPage")
  }

};

module.exports = productoController;