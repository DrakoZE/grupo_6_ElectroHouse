const homeController = {
  getHomePage: (req, res) => {
    let productos = [
      {
        id: 1,
        titulo: "Parlante CAT",
        precio: "$6.770",
        descuento: "40% off",
        imagen: "images/cat-parlante.png",
        categoria: "Audio",
        color: "#1a7063",
        color1: "#1fe9cb"
      },
      {
        id: 2,
        titulo: "Iphone 14",
        precio: "$230.000",
        descuento: "20% off",
        imagen: "images/iphone-14-promax.png",
        categoria: "Smartphone",
        color: "#512224",
        color1: "#ff2e37"
      },
      {
        id: 3,
        titulo: "Control XBOX",
        precio: "$23.200",
        descuento: "5% off",
        imagen: "images/xbox-control.png",
        categoria: "Entretenimiento",
        color: "#4f3f1f",
        color1: "#ffec08"
      },




    ]
    res.render("products/home", { productos: productos });
  },
};

module.exports = homeController;