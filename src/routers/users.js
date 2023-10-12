const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/user-avatar"))
    },
    filename: (req, file, cb) => {
        const newFileName = file.originalname;
        cb(null, newFileName)
    }
});

const upload = multer({ storage });

// Listado de usuarios
router.get("/users", controller.index);

// Formulario de registro
router.get("/users/register", controller.add);

// Accion de registro
router.post("/users/create", upload.single("avatar"), controller.create);

// Detalles de un Usuario 
router.get("/users/:id", controller.show);

// Formulario de LogIn
router.get("/users/login", controller.log);

// Accion de LogIn
//router.post("/users", controller.logIn);

module.exports = router;

