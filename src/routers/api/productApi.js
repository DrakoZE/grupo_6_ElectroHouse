const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/apiProductController");

// Listado de usuarios.
router.get("/products", controller.list);

router.get("/product/:id", controller.show);

module.exports = router