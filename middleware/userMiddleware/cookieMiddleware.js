const fs = require("fs");
const path = require("path");

function cookieMiddleware(req, res, next) {

    // Verifica si la cookie remember existe y la propiedad logUser de la sesión no está establecida
    if (req.cookies.remember && !req.session.logUser) {
  
      // Lee el archivo products.json
      const users = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../../src/data/users/users.json"), "utf-8")
      );
  
      // Encuentra al usuario con la dirección de correo electrónico coincidente
      const logUser = users.find((user) => user.email === req.cookies.remember);
  
      // Si se encuentra un usuario, establece la propiedad logUser de la sesión
      if (logUser) {
        req.session.logUser = logUser;
      }
    }
  
    // Establece la variable local isLog a true si la propiedad logUser de la sesión está establecida
    res.locals.isLog = req.session.logUser !== undefined;
  
    // Establece la variable local logUser a la propiedad logUser de la sesión
    res.locals.logUser = req.session.logUser;

    // Siguiente middleware en la cadena
    next();
  }
  
  module.exports = cookieMiddleware;