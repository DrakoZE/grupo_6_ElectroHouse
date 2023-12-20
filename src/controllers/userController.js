const bcrypt = require("bcryptjs");
const db = require("../../database/models")
let { validationResult } = require("express-validator");

const userController = {
    //lista de usuarios.
    index: async (req, res) => {
        let user = await db.User.findAll();
        return res.render("users/users", {user})
    },

    // Informacion de un usuario.
    show: async(req, res) => {
        let user = await db.User.findByPk(req.params.id);
        return res.render("users/profile", { user })
    },

    // Formulario de registro.
    add: (req, res) => {
        res.render("users/register");
    },

    // Crea un nuevo elemento en la lista de usuarios.
    create: async function (req, res) {

        let errors = validationResult(req);

        if (req.file || req.body.oldImg && errors.isEmpty()) {
            let newUser =  await db.User.create({
                firstName: req.body.firstName,
                surname: req.body.surname,
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10, 12),
                avatar: req.file.originalname,
                seller: req.body.seller
            })
            res.redirect("/users")
            } else {
                let user = await db.User.findByPk(req.params.id)
                res.render("users/register", { user, errors: errors.mapped(), old: req.body });
            }
        },

    update: async (req,res) => {
        let user = await db.User.findByPk(req.params.id)
        res.render("users/updateUser", { user })
    },

    edit: async (req,res) => {

        let errors= validationResult(req);

        if (req.file || req.body.oldImg && errors.isEmpty()) {

        let usuarioEditado = await db.User.update({
            firstName: req.body.firstName,
            surname: req.body.surname,
            username: req.body.username,
            avatar: req.file ? req.file.originalname : req.body.oldImg,
            seller: req.body.seller
        },{
            where: {id: req.params.id}
        })
        res.redirect("/users")
        } else {
            let user = await db.User.findByPk(req.params.id)
            console.log(errors)
            res.render("users/updateUser", { user, errors: errors.mapped(), old: req.body });
        }
    },

    //formulario de LogIn.
    log: (req, res) => {
        res.render("users/login")
    },

    // Método de login de usuarios
    loginUser: async (req, res) => {
        
        // Valida los datos del formulario de login
        const errors = validationResult(req);

        // Si no hay errores, procede con el login
        if (errors.isEmpty()) {

            // Lee el archivo user.json, que contiene la lista de usuarios
            const users = await db.User.findAll()

            // Encuentra al usuario con el correo electrónico y la contraseña coincidente
            const userToLog = users.find((user) => user.email === req.body.email && bcrypt.compareSync(req.body.password, user.password));
            // console.log(userToLog.id);

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