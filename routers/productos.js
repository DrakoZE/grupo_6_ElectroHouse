const express = require("express");
const router = express.Router();
const controller = require("../controllers/productoController");

router.get("/producto", controller.getProductoPage);

module.exports = router

