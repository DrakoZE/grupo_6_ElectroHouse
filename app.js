// Configuración de la aplicación
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

// Requerir method overside para hacer formulario de edición de producto
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Configurar Express para que use bodyParser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configurar Express para que use sesiones
const session = require("express-session");
app.use(session({ secret: "token" }));

// Configurar Express para que use EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Configurar Express para que use archivos estáticos del directorio public
app.use(express.static(path.join(__dirname, "/public")));

// Rutas
const productoRouter = require("./src/routers/productos");
const userRouter = require("./src/routers/users");

app.use("/", productoRouter);
app.use("/", userRouter);

// Iniciar el servidor
app.listen(PORT, () => console.log("El servidor está corriendo en: http://localhost:3001"));