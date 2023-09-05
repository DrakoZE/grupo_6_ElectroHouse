const fs = require("fs")

class Producto {
  builder(id, nombre, descripcion, imagen, categoria, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.categoria = categoria;
    this.precio = precio;
  }
}

const productoController = {
  filePath: "./database/products.json",

  getAllProducts: (req, res) => {
    return JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
  },
  findProducts(){
    return this.getAllproducts()
  },
  getProduct(id){
    let products = this.findProducts;
    let searchedProduct = products.find((productoA) => productoA.id === id);
    return searchedProduct;
  },

  createProduct(req, res){
    const datosProducto = req.body;

    const producto = new Producto(
      datosProducto.Id,
      datosProducto.nombre,
      datosProducto.descripcion,
      datosProducto.imagenes,
      datosProducto.categoria,
      datosProducto.precio,
    );
    const products = this.getAllProducts();
    products.push(producto);
    fs.writeFileSync(this.filePath, JSON.stringify(products), "utf-8");
    return producto;
  },
  editProducto: (req, res) => {
    const idProduct = req.params.id;
    const productData = req.body;

    const products = this.getAllProducts();
    const producto = products.find((producto) => producto.id === idProduct);

    if (producto) {
      producto.id = datosProducto.id;
      producto.nombre = datosProducto.nombre;
      producto.descripcion = datosProducto.descripcion;
      producto.imagenes = datosProducto.imagenes;
      producto.categoria = datosProducto.categoria;
      producto.precio = datosProducto.precio;

      fs.writeFileSync(this.filePath, JSON.stringify(products), "utf-8");
    }
  },

    getProductsPage: (req, res) => {
      const productId = req.params.id;
        res.render(`products/producto/${productId}`);
      },
    };
module.exports = productoController;