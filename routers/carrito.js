const express = require("express");
const router = express.Router();
const controller = require("../controllers/carritoController");

router.get("/carrito", controller.getCarritoPage);

module.exports = router