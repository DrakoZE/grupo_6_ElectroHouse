const express = require("express");
const router = express.Router();
const controller = require("../controllers/productoController");


router.get("/producto", controller.getProductsPage);


router.get("/", controller.getProductsPage);

router.get("/detail/:id", controller.getDetailpage);

router.get("/carrito", controller.getCarritoPage)

// router.delete("/:id", controller.deleteProduct)

module.exports = router

