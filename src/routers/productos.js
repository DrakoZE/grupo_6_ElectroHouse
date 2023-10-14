const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const multer = require("multer");
const path = require("path");
const { body } = require('express-validator');

const ProductValidation = [
    body("title").notEmpty().withMessage("Titulo faltante"),
    body("description").notEmpty().withMessage("Detalles Pendientes"),
    body("price").notEmpty().withMessage("Precio Necesario"),
    body("price").isInt({min: 1 }).withMessage("Gratis? Imposible!"),
    body("price").isInt({ allow_leading_zeroes: false }).withMessage("Sin ceros a la izquierda!"),
    body("off").notEmpty().withMessage("Descuento obligatorio"),
    body("off").isInt({min: 1 }).withMessage("Descuento obligatorio"),
    body("off").isInt({ allow_leading_zeroes: false }).withMessage("Sin ceros a la izquierda!"),
    body("image").custom((value, { req })=>{

        let file = req.file;
        let validFormat = [".jpg", ".png", ".gif"];

        if (!file){
            throw new Error("Debes subir una imagen");
        } else {
            let fileFormat = path.extname(file.originalname);
            if (!validFormat.includes(fileFormat)){
                throw new Error("Formato de archivo no compatible ")
            }
        }
    })
];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/product-img"))
    },
    filename: (req, file, cb) => {
        console.log(file)
        const newFileName = file.originalname;
        cb(null, newFileName)
    }
});

const upload = multer({ storage });

//Pagina principal
router.get("/", controller.getHomePage);

//Listado de productos
router.get("/products", controller.getProductsPage);

//Formulario de creación de productos
router.get("/products/create", controller.getCreatePage);

//Detalle de un producto particular
router.get("/products/:id", controller.getDetailpage);

//Acción de creación (a donde se envía el formulario)
router.post("/products", upload.single("image"), ProductValidation, controller.createProduct);

//Formulario de edición de productos
router.get("/products/:id/edit", controller.getEditPage);

//Acción de edición (a donde se envía el formulario):
router.put("/products/:id", upload.single("image"), ProductValidation, controller.editProduct);

//Acción de borrado
router.get("/products/:id/delete", controller.deleteProduct);

//Vista del Carrito de Compras
router.get("/cart", controller.getCartPage);

module.exports = router