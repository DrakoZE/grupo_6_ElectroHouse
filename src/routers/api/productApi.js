const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/apiProductController");

// Listado de usuarios.
router.get("/products", controller.list);

router.get("/product/:id", controller.show);

router.get("/products/results", controller.search)

module.exports = router