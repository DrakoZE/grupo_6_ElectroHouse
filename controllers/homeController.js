const homeController ={
    getHomePage: (req, res) => {
      let productos = [
        {
          id: 1,
          titulo : "titulo 1"
        },
        {
          id: 2,
          titulo : "titulo 2"
        },
        {
          id: 4,
          titulo : "titulo 4"
        },




      ]
        res.render("products/home", {productos:productos});
      },
    };
module.exports = homeController;