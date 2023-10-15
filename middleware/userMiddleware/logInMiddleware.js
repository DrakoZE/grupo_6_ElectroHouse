const { body } = require('express-validator');
const path = require("path");

module.exports = [

  // Verifica que el correo electrónico sea válido
  body('email')
    .isEmail()
    .withMessage('Ingresa un email invalido'),

  // Valida que la contraseña no esté vacía
  body('password')
    .notEmpty()
    .withMessage('Campo obligatorio'),
];