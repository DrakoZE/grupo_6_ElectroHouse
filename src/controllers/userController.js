const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

let { validationResult } = require("express-validator")

const userController = {

    // Obtenemos los datos del JSON.
    allUsers: (JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users/users.json"), "utf-8"))),

    //lista de usuarios.
    index: (req, res) => {
        let user = (JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users/users.json"), "utf-8")));
        res.render("users/users", { user });
    },

    // Informacion de un usuario.
    show: (req, res) => {
        const user = userController.allUsers.find((user) => user.id == req.params.id);
        res.render("users/detailUser", { user });
    },

    // Formulario de registro.
    add: (req, res) => {
        res.render("users/register");
    },
    // Crea un nuevo elemento en la lista de usuarios.
    create: (req, res) => {

        let errors = validationResult(req);

        // Validamos que los datos se hayan cargado correctamente.
        if (errors.isEmpty()) {

            // Obtenemos todos los usuarios existentes.
            let user = userController.allUsers;

            // Obtenemos el ultimo usuario de la lista.
            let lastUser = user.pop();

            // Volvemos a agregar el ultimo usuario a la lista.
            user.push(lastUser);

            // Creamos un nuevo usuario con los datos obtenidos del formulario.
            let newUser = {
                id: lastUser.id + 1,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10, 12),
                avatar: req.file.filename
            }

            // Agregamos el nuevo usuario a la lista de usuarios.
            user.push(newUser)

            // Redirijimos a Home.
            res.redirect("/")
            
            // Guardamos la lista de usuarios en el archivo JSON.
            return fs.writeFileSync(path.join(__dirname, "../data/users/users.json"), JSON.stringify(user, null, 2), "utf-8");

        }else{  
            res.render("users/register", { errors: errors.mapped(), old: req.body });
        }
    },

    //formulario de LogIn.
    log: (req, res) => {
        res.render("users/login")
    },

    // Método de login de usuarios
    loginUser: (req, res) => {

        // Valida los datos del formulario de login
        const errors = validationResult(req);

        // Si no hay errores, procede con el login
        if (errors.isEmpty()) {

            // Lee el archivo user.json, que contiene la lista de usuarios
            const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users/users.json"), "utf-8"));

            // Encuentra al usuario con el correo electrónico y la contraseña coincidente
            const userToLog = users.find((user) => user.email === req.body.email && bcrypt.compareSync(req.body.password, user.password));

            // Si no se encuentra un usuario, devuelve un error
            if (!userToLog) {
                return res.render("users/login", { errors: [{ msg: "Datos incorrectos"}], old: req.body});
            }

            // Elimina la contraseña del usuario antes de guardarlo en la sesión
            delete userToLog.password;

            // Guarda al usuario en la sesión
            req.session.logUser = userToLog;

            // Si el usuario marcó la casilla "recordarme", establece una cookie remember
            if (req.body.remind) {
                res.cookie("remember", req.body.email, { maxAge: (60000) * 60 });
            }

            // Redirige al usuario a su perfil
            return res.redirect("/users/profile");

        } else {

            // Si hay errores en el formulario, vuelve a renderizar la página de login con los errores
            res.render("users/login", { errors: errors.mapped(), old: req.body });
        }
    },

    // Método para mostrar el perfil del usuario
    profile: (req, res) => {

        // Obtiene el usuario de la sesión
        const user = req.session.logUser;

        // Renderiza la página de perfil con los datos del usuario
        res.render("users/profile", { user });
    },

    // Método para cerrar la sesión del usuario
    logout: (req, res) => {

        // Borra la cookie remember
        res.clearCookie("remember");

        // Destruye la sesión del usuario
        req.session.destroy();

        // Redirige al usuario a la página principal
        return res.redirect("/");
    }
}

module.exports = userController;