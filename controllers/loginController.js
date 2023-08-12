const loginController ={
    getLoginPage: (req, res) =>{
        res.render("login");
      },
    postLoginPage: (req,res) =>{
        res.redirect("/")
    }
    };
module.exports = loginController;