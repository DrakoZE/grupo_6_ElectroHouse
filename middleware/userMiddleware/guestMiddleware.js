function guestMiddleware(req, res, next) {
    // Comprueba si el usuario está registrado.
    if (req.session.logUser) {
      // Redirige al usuario a su perfil de usuario.
      res.redirect("/users/profile");
    } else {
      // Llama al siguiente middleware en la cadena.
      next();
    }
  }
  
  module.exports = guestMiddleware;