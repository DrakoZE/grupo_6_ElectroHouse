const db = require("../../database/models")

const homeController = {

    // Obtenemos los datos del JSON.
  // allProducts: (JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products/products.json"), "utf-8"))),

  // Renderizamos home.
  home: async (req, res) => {
    let productos = await db.Product.findAll({
      include: ["gammas"]
    });
    // let colorBorde = productos[0].gammas[0].code;
    res.render("products/products", {products: productos})
  }
}
module.exports = homeController;