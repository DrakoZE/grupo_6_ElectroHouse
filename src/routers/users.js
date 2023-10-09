const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/register", controller.getRegisterPage);

router.post("/register", controller.registerUser);

router.get("/login", controller.getLoginPage);

router.post("/login", controller.loginUser)

module.exports = router

