const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
//requerir method overside para hacer formulaario de edicion de producto

const methodOverride=require('method-override');
app.use(methodOverride("_method"));

//confijuracion de ejs

app.set("view engine", "ejs");

//ar imagen =document.createElement('img');
//img.src= "images/cat-parlante.png";
//document.getElementById("idDelElemento".appendChild(imagen))


app.use(express.static(path.join(__dirname, "/public")));



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

