const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/apiProductController");

router.get("/categories", controller.categories)

router.get("/products", controller.list);

router.get("/product/:id", controller.show);

router.get("/products/results", controller.search)

module.exports = router