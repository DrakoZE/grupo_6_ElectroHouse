const express = require("express");
const router = express.Router();
const controller = require("../controllers/homeController");

router.get("/", controller.getHomePage);

module.exports = router