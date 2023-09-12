const homeController = {
  getHomePage: (req, res) => {
    let productos = [
      {
        id: 1,
        titulo: "Parlante CAT",
        precio: "$6.770",
        descuento: "40% off",
        imagen: "images/cat-parlante.png"
      },
      {
        id: 2,
        titulo: "Iphone 14 Promax",
        precio: "$230.000",
        descuento: "20% off",
        imagen: "images/iphone-14-promax.png"
      },
      {
        id: 3,
        titulo: "Control de XBOX",
        precio: "$23.200",
        descuento: "5% off",
        imagen: "images/xbox-control.png"
      },




    ]
    res.render("products/home", { productos: productos });
  },
};

module.exports = homeController;