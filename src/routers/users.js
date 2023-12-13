const express = require("express");
const router = express.Router();


const controller = require("../controllers/userController");

const upload = require("../../middleware/multerMiddleware")
const logValidation = require("../../middleware/userMiddleware/logInMiddleware")
const registerValidation = require("../../middleware/userMiddleware/registerMiddleware")
const guestMiddleware = require("../../middleware/userMiddleware/guestMiddleware")
const authMiddleware = require("../../middleware/userMiddleware/authmiddleware")


// Formulario de LogIn.
router.get("/login", guestMiddleware, controller.log);

// Accion de LogIn.
router.post("/login", logValidation, controller.loginUser);

// Accion de LogOut.
router.get("/logout", controller.logout);

// Listado de usuarios.
router.get("/", controller.index);

// Formulario de registro.
router.get("/register", guestMiddleware, controller.add);

// Accion de registro.
router.post("/create", upload("user-avatar").single("avatar"), registerValidation, controller.create);

// Perfil de usuario.
router.get("/profile", authMiddleware, controller.profile);

// Formulario de edición de Perfil.
router.get("/edit/:id", controller.update)

router.post("/edit/:id", upload("user-avatar").single("avatar"), registerValidation, controller.edit)
// Detalles de un Usuario.
router.get("/:id", controller.show);

module.exports = router;