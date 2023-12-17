const express = require("express");
const router = express.Router();

const controller = require("../controllers/productController");

const upload = require("../../middleware/multerMiddleware")
const productValidation = require("../../middleware/productMiddleware.js/create&EditMiddleware")

//Listado de productos
router.get("/", controller.index);

//Vista del Carrito de Compras
router.get("/cart", controller.cart);

//Formulario de creación de productos
router.get("/create", controller.add);

//Detalle de un producto particular
router.get("/:id", controller.show);

//Acción de creación (a donde se envía el formulario)
router.post("/", upload("product-img").single("image"), productValidation, controller.create);

//Formulario de edición de productos
router.get("/:id/edit", controller.edit);

//Acción de edición (a donde se envía el formulario):
router.post("/:id/edit", upload("product-img").single("image"), productValidation, controller.update);

//Acción de borrado
router.post("/:id", controller.delete);

router.get("/results/search", controller.search)

module.exports = router