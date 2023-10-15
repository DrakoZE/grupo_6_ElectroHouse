const express = require("express");
const router = express.Router();
const controller = require("../controllers/homeController");

//Pagina principal
router.get("/", controller.home);

module.exports = router