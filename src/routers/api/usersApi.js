const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/apiUserController");

// Listado de usuarios.
router.get("/users", controller.list);

router.get("/users/:id", controller.show);

module.exports = router