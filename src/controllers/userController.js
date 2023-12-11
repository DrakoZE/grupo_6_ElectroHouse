const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require("../../database/models")
let { validationResult } = require("express-validator");

const userController = {
    //lista de usuarios.
    index: (req, res) => {
        let usuarios = db.User.findAll();
        let fotoPerfil = db.Avatar.findAll();
        Promise.all([usuarios,fotoPerfil])
            .then(([usuario, foto]) => {
                res.render("users/users", {user: usuario, avatar: foto})
            })
    },

    // Informacion de un usuario.
    show: (req, res) => {
        let usuarios = db.User.findByPk(req.params.id);
        let fotoPerfil = db.Avatar.findByPk(req.params.id);
        Promise.all([usuarios,fotoPerfil])
            .then(([usuario, foto]) => {
                res.render("users/profile", {user: usuario, avatar: foto})
            })
            .catch(err => {
                console.log(err);
            })
    },

    // Formulario de registro.
    add: (req, res) => {
        res.render("users/register");
    },
    // Crea un nuevo elemento en la lista de usuarios.
    create: async function (req, res) {

        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let nuevaFoto = await db.Avatar.create({
                name: req.file.originalname
            })
            console.log(nuevaFoto.id);
            let nuevoUsuario =  await db.User.create({
                firstName: req.body.firstName,
                surname: req.body.lastName,
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10, 12),
                avatarId: nuevaFoto.id,
                permissionId: req.body.categoria
            })
            console.log(nuevaFoto);
            console.log(nuevoUsuario);
            
            Promise.all([nuevaFoto, nuevoUsuario])
                .then(([foto, usuario]) => {
                    res.redirect("/users")
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            res.render("users/register", { errors: errors.mapped(), old: req.body });
        }
    },

    edit: (req,res) => {
        res.render("users/users/edit/:id")
    },

    update: async function (req,res) {
        let fotoEditada = await db.Avatar.update({
            name: req.file.originalname
        },{
            where: {id: req.params.id}
        });
        let usuarioEditado = await db.User.update({
            firstName: req.body.firstName,
            surname: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10, 12),
            avatarId: fotoEditada.id,
            permissionId: req.body.categoria
        },{
            where: {id: req.params.id}
        })
        Promise.all([fotoEditada,usuarioEditado])
            .then(([foto, usuario]) => {
                res.redirect("/users/" + req.params.id)
            })
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
                return res.render("users/login", { errors: { email: { msg: "Datos incorrectos" }}});
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