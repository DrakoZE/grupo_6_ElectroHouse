const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

//requerir method overside para hacer formulaario de edicion de producto
const methodOverride=require('method-override');
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//confijuracion de ejs
app.set("view engine", "ejs");
app.set("views", "./src/views");


app.use(express.static(path.join(__dirname, "/public")));


const productoRouter = require("./src/routers/productos");
const userRouter = require("./src/routers/users")


app.use("/", productoRouter);

app.use("/", userRouter);

app.listen(PORT, () => console.log("El servidor esta corriendo en: http://localhost:3001 "));