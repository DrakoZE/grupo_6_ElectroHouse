const homeController ={
    getHomePage: (req, res) => {
        res.render("products/home");
      },
    };
module.exports = homeController;