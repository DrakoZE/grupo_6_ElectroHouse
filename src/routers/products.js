const express = require("express");
const router = express.Router();

const controller = require("../controllers/productController");

const upload = require("../../middleware/multerMiddleware");
const createValidation = require("../../middleware/productMiddleware/createMiddleware");
const editValidation = require("../../middleware/productMiddleware/editMiddleware");
const user = require("../../middleware/userMiddleware/authmiddleware");

//Listado de productos
router.get("/", controller.index);

//Vista del Carrito de Compras
router.get("/cart", controller.cart);

//Formulario de creación de productos
router.get("/create", controller.add);

//Detalle de un producto particular
router.get("/:id", controller.show);

//Acción de creación (a donde se envía el formulario)
router.post("/", upload("product-img").single("image"), createValidation, controller.create);

//Formulario de edición de productos
router.get("/:id/edit", controller.edit);

router.post("/:id/popularity", controller.popularity)

//Acción de edición (a donde se envía el formulario):
router.post("/:id/edit", upload("product-img").single("image"), editValidation, controller.update);

//Acción de borrado
router.post("/:id", controller.delete);

//Acción de like
router.post("/:id/like", controller.like)

//Acción de busqueda
router.get("/results/search", controller.search);

//Acción de filtro de busqueda
router.get("/results/filter_order", controller.filter_order)

module.exports = router