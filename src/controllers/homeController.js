const db = require("../../database/models")

const homeController = {

    // Obtenemos los datos del JSON.
  // allProducts: (JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products/products.json"), "utf-8"))),

  // Renderizamos home.
  home: async (req, res) => {
    let products = await db.Product.findAll({include: ["gammas", "categories"]});
    let liked = await db.Product.findAll({order: ["popularity"]});
    let recent = await db.Product.findAll({order: ["created_at"]});

    res.render("products/home", { products, liked, recent })
  }
}
module.exports = homeController;