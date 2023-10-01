const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

//Pagina principal
router.get("/", controller.getHomePage)

//Listado de productos
router.get("/products", controller.getProductsPage);

//Formulario de creación de productos
router.get("/products/create", controller.getCreatePage);

//Detalle de un producto particular
router.get("/products/:id", controller.getDetailpage);

//Acción de creación (a donde se envía el formulario)
router.post("/products", controller.createProduct);

//Formulario de edición de productos
router.get("/products/:id/edit", controller.getEditPage);

//Acción de edición (a donde se envía el formulario):
router.put("/products/:id", controller.editProduct);

//Acción de borrado
router.delete("/products/:id", controller.deleteProduct);

//Vista del Carrito de Compras
router.get("/cart", controller.getCartPage);

module.exports = router