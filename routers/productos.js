const express = require("express");
const router = express.Router();
const controller = require("../controllers/productoController");

router.get("/producto", controller.getProductsPage);

router.get("/producto/detail/:id", controller.getDetailpage)

module.exports = router

