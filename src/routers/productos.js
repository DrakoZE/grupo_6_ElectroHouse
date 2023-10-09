const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images"))
    },
    filename: (req, file, cb) => {
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
router.post("/products", upload.single("image"), controller.createProduct);

//Formulario de edición de productos
router.get("/products/:id/edit", controller.getEditPage);

//Acción de edición (a donde se envía el formulario):
router.put("/products/:id", upload.single("image"), controller.editProduct);

//Acción de borrado
router.get("/products/:id/delete", controller.deleteProduct);

//Vista del Carrito de Compras
router.get("/cart", controller.getCartPage);

module.exports = router