const registerController ={
    getRegisterPage: (req, res) => {
        res.render("Register");
      },
      registerUser: (req,res) =>{
        res.redirect("/")
    }
    };
module.exports = registerController;