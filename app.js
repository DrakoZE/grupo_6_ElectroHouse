const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

const homeRouter = require("./routers/home");
const productoRouter = require("./routers/productos");
const registerRouter = require("./routers/login");
const loginRouter = require("./routers/register");
const carritoRouter = require("./routers/carrito");

app.use("/", homeRouter);
app.use("/", productoRouter);
app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", carritoRouter);

app.listen(PORT, () => console.log("El servidor esta corriendo en el puerto: " + PORT));