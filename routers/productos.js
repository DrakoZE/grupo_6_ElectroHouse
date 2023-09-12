const express = require("express");
const router = express.Router();
const controller = require("../controllers/productoController");

router.get("/producto", controller.getProductsPage);



module.exports = router

