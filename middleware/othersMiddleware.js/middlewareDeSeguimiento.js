const path = require("path");

function middlewareSeguimiento (req, res, next) {
    console.log("Accediste a la vista: " + req.url);
    next();
}

module.exports = middlewareSeguimiento