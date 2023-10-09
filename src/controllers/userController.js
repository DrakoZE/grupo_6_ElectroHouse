const userController = {

    getLoginPage: (req, res) => {
        res.render("users/login");
    },

    loginUser: (req, res) => {
        res.redirect("/")
    },

    getRegisterPage: (req, res) => {
        res.render("users/register");
    },

    registerUser: (req, res) => {
        res.redirect("/")
    }
}

module.exports = userController