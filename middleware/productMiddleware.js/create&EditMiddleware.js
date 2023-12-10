const { body } = require('express-validator');
const path = require("path");

module.exports = [

  // Valida que el título no esté vacío.
  body('title')
    .notEmpty()
    .withMessage('Título faltante'),

  // Valida que la descripción no esté vacía.
  body('description')
    .notEmpty()
    .withMessage('Detalles Pendientes'),

  // Valida que el precio no esté vacío.
  body('price')
    .notEmpty()
    .withMessage('Precio Necesario'),

  // Valida que el precio sea un número entero mayor o igual a 1.
  body('price')
    .isInt({ min: 1 })
    .withMessage('Gratis? Imposible!'),

  // Valida que el precio no tenga ceros a la izquierda.
  body('price')
    .isInt({ allow_leading_zeroes: false })
    .withMessage('Sin ceros a la izquierda!'),

  // Valida que el descuento no esté vacío.
  body('off')
    .notEmpty()
    .withMessage('Descuento obligatorio'),

  // Valida que el descuento sea un número entero mayor o igual a 1.
  body('off')
    .isInt({ min: 1 })
    .withMessage('Descuento obligatorio'),

  // Valida que el descuento no tenga ceros a la izquierda.
  body('off')
    .isInt({ allow_leading_zeroes: false })
    .withMessage('Sin ceros a la izquierda!'),

  // Valida que el stock no esté vacío.
  body('stock')
    .notEmpty()
    .withMessage('Stock obligatorio'),

  // Valida que el stock sea un número entero mayor o igual a 1.
  body('stock')
    .isInt({ min: 1 })
    .withMessage('Stock obligatorio'),

  // Valida que el stock no tenga ceros a la izquierda.
  body('stock')
    .isInt({ allow_leading_zeroes: false })
    .withMessage('Sin ceros a la izquierda!'),

  // Valida que la marca no esté vacía.
  body('tradeMark')
    .notEmpty()
    .withMessage('Marca faltante'),

  // Verifica que la imagen sea un archivo válido con una de las siguientes extensiones: .jpg, .jpeg, .png, .gif .
  body('image')
    .custom((value, { req }) => {

      const file = req.file;
      const validFormats = ['.jpg', 'jpeg', '.png', '.gif'];

      if (!file) {

        throw new Error('Debes subir una imagen');
      } else {

        const fileFormat = path.extname(file.originalname);

        if (!validFormats.includes(fileFormat)) {

          throw new Error('Formato de archivo no compatible');
        }

        return true;
      }
    }),
];