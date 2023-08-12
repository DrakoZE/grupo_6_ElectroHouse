const loginController ={
    getLoginPage: (req, res) =>{
        res.render("login");
      },
    loginUser: (req,res) =>{
        res.redirect("/")
    }
    };
module.exports = loginController;