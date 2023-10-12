const fs = require("fs");
const path = require("path")
const userController = {

    // Obtenemos los datos del JSON.
    allUsers: (JSON.parse(fs.readFileSync(path.join(__dirname, "../Data/Users/user.json"), "utf-8"))),

    //lista de usuarios.
    index: (req, res) => {
        let user = (JSON.parse(fs.readFileSync(path.join(__dirname, "../Data/Users/user.json"), "utf-8")));
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

        // Validamos que el archivo de imagen se haya cargado.
        if (req.file) {

            // Obtenemos todos los usuarios existentes.
            let user = userController.allUsers;

            // Obtenemos el ultimo usuario de la lista.
            let lastUser = user.pop();

            // Volvemos a agregar el ultimo usuario a la lista.
            user.push(lastUser);

            // Creamos un nuevo usuario con los datos obtenidos del formulario.
            let newUser = {
                id: lastUser.id + 1,
                name: req.body.name,
                avatar: "images/" + req.file.filename,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password
            }

            // Agregamos el nuevo usuario a la lista de usuarios.
            user.push(newUser)

            // Redirijimos a Home.
            res.redirect("/")
            
            // Guardamos la lista de usuarios en el archivo JSON.
            return fs.writeFileSync(path.join(__dirname, "../Data/Users/user.json"), JSON.stringify(user, null, 2), "utf-8");

        }else{
            res.render("users/register");
        }
    },

    //formulario de LogIn.
    log: (req, res) => {
        res.render("users/login")
    },

    //loginUser: (req, res) => {
        //...
        //res.redirect("/")
    //},
}

module.exports = userController;