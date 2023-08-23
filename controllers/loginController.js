const loginController ={
    getLoginPage: (req, res) =>{
        res.render("users/login");
      },
    loginUser: (req,res) =>{
        res.redirect("/")
    }
    };
module.exports = loginController;