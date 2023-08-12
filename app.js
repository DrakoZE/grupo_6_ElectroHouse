const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, "/public")));

const homeController = require("./controllers/homeController");
const productoController = require("./controllers/productoController");
const registerController = require("./controllers/registerController");
const loginController = require("./controllers/loginController");

app.get("/", homeController.getHomePage);
app.get("/producto", productoController.getProductoPage);
app.get("/register", registerController.getRegisterPage);
app.get("/login", loginController.getLoginPage);

app.post("/register", registerController.registerUser);
app.post("/login", loginController.loginUser);

app.listen(PORT, () => console.log("El servidor esta corriendo en el puerto: " + PORT));
app.set("view engine", "ejs");