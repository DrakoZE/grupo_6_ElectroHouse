const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const multer = require("multer");
const path = require("path");
const { body } = require('express-validator');
const { error } = require("console");

const registerValidation = [
    body("firstName").notEmpty().withMessage("El nombre es obligatorio"),
    body("lastName").notEmpty().withMessage("El apellido es obligatorio"),
    body("userName").notEmpty().withMessage("El nombre de usuario es obligatorio"),
    body("email").isEmail().withMessage("El correo electrónico es obligatorio"),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    body("avatar").custom((value, { req })=>{

        let file = req.file;
        let validFormat = [".jpg", ".png", ".gif"];

        if (!file){
            throw new Error("Debes subir una imagen");
        } else {
            let fileFormat = path.extname(file.originalname);
             
            if (!validFormat.includes(fileFormat)){
                throw new Error("Formato de archivo no compatible ")
            }

            return true
        }
    })
];

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

// Formulario de LogIn
router.get("/users/login", controller.log);

// Listado de usuarios
router.get("/users", controller.index);

// Formulario de registro
router.get("/users/register", controller.add);

// Accion de registro
router.post("/users/create", upload.single("avatar"), registerValidation, controller.create);

// Detalles de un Usuario 
router.get("/users/:id", controller.show);


// Accion de LogIn
//router.post("/users", controller.logIn);

module.exports = router;

