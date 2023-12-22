const fs = require("fs");
const path = require("path");
const db = require("../../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    list: async (req,res) => {
let products = await db.Product.findAll({
            include: ["categories", "gammas", "user"]
        })
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
                foto: "http://localhost:3001/images/product-img/" + product.image,
                detalles: "http://localhost:3001/api/product/" + product.id
            }))
        })
    },
    show: async (req,res) => {
        let product = await db.Product.findByPk(req.params.id, {
            include: ["categories", "gammas", "user"]
        })
        let productArray = [product]
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
    search: async (req,res) => {
        let titulo = req.query.title
        let product = await db.Product.findAll({
            where: {
                title: {[Op.like]: "%" + titulo + "%"}
            }
        })
        return res.status(200).json({
            busqueda: "Busco el producto con el titulo: " + titulo,
            productoBuscado: product
        })
    }
}