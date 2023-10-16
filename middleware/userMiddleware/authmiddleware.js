function authMiddleware(req, res, next) {
    // Comprueba si el usuario está registrado.
    if (!req.session.logUser) {
      // Redirige al usuario a la página de inicio de sesión.
      res.redirect("/users/login");
    } else {
      // Llama al siguiente middleware en la cadena.
      next();
    }
  }
  
  module.exports = authMiddleware;