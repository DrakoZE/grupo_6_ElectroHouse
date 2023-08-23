const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
//requerir method overside para hacer formulaario de edicion de producto
const methoOverride=require('method-override');
//confijuracion de ejs

app.set("view engine", "ejs");

//ar imagen =document.createElement('img');
//img.src= "images/cat-parlante.png";
//document.getElementById("idDelElemento".appendChild(imagen))






app.use(express.static(path.join(__dirname, "/public")))


app.get("/carrito", (req,res) => res.sendFile(path.join(__dirname, "views/carritoDeCompras.html")))

app.get("/producto", (req,res) => res.sendFile(path.join(__dirname, "views/iphone-14.html")))

app.get("/register", (req,res) => res.sendFile(path.join(__dirname, "views", "register.html")))

app.get("/login", (req,res) => res.sendFile(path.join(__dirname, "views", "login.html")))

app.listen(PORT, ()=> console.log("El servidor esta corriendo en el puerto: " + PORT))

app.post("/register", (req,res) =>{
    res.redirect("/")
})

app.post("/login", (req,res) =>{
    res.redirect("/")
})
//Indico que voy a usa, el metodo sirve para poder usar el metodo POST para el formulario de edicion de producto
app.use(methoOverride('_method'))