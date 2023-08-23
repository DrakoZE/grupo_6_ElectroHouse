const registerController ={
    getRegisterPage: (req, res) => {
        res.render("users/register");
      },
      registerUser: (req,res) =>{
        res.redirect("/")
    }
    };
module.exports = registerController;