const { body } = require('express-validator');
const path = require("path");

module.exports = [

  // Valida que el nombre no esté vacío
  body('firstName')
    .notEmpty()
    .withMessage('Nombre faltante'),

  // Valida que el apellido no esté vacío
  body('surname')
    .notEmpty()
    .withMessage('Apellido faltante'),

  // Valida que el nombre de usuario no esté vacío
  body('username')
    .notEmpty()
    .withMessage('Usuario faltante'),

  // Verifica que la imagen sea un archivo válido con una de las siguientes extensiones: .jpg, .jpeg, .png, .gif
  body('avatar')
    .custom((value, { req }) => {

      const file = req.file;
      const validFormats = ['.jpg', '.jpeg', '.png', '.gif'];

      if (file) {
        const fileFormat = path.extname(file.originalname);
        if (!validFormats.includes(fileFormat)) {
          throw new Error('Formato no compatible');
        }
        return true;
      }
      return true;
    }),
];