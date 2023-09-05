const registerController ={
    getRegisterPage: (req, res) => {
        res.render("users/register");
      },
      registerUser: (req,res) =>{
        console.log(req.body)
        res.redirect("/")
    }
    };
module.exports = registerController;