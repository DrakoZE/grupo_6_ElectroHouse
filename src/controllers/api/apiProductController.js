const fs = require("fs");
const path = require("path");
const db = require("../../../database/models");

module.exports = {
    list: async (req,res) => {
let products = await db.Product.findAll({
            include: ["categories", "gammas", "user"]
        })
        console.log(products);
        return res.status(200).json({
            meta: {
            total: products.length,
            url: req.url
            },
            products: products.map(product => ({
                id: product.id,
                producto: product.title,
                descripcion: product.description,
                categoria: product.categories.category,
                vendedor: product.user.username,
                detalles: "http://localhost:3001/api/product/" + product.id
            }))
        })
    },
    show: async (req,res) => {
        let product = await db.Product.findByPk(req.params.id, {
            include: ["categories", "gammas", "user"]
        })
        let productArray = [product]
        console.log(product);
        return res.status(200).json({
            meta: {
            url: req.url
            },
            product: productArray.map(product => ({
                id: product.id,
                producto: product.title,
                descripcion: product.description,
                precio: product.price,
                descuento: product.off,
                marca: product.tradeMark,
                colores: product.gammas.map(color => ({
                    color: color.color,
                    codigo: color.code
                })),
                categoria: product.categories.category,
                vendedor: product.user.username,
                foto: "http://localhost:3001/images/product-img/" + product.image
            }))
        })
    },
}