const express = require("express");
const router = express.Router();
const controller = require("../controllers/registerController");

router.get("/register", controller.getRegisterPage);

router.post("/register", controller.registerUser);

module.exports = router