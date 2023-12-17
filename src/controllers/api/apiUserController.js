const fs = require("fs");
const path = require("path");
const db = require("../../../database/models");

module.exports = {
    list: async (req,res) => {
        let users = await db.User.findAll()
        return res.status(200).json({
            meta: {
            total: users.length,
            url: req.url
            },
            users: users.map(user => ({
                id: user.id,
                usuario: user.username,
                nombre_completo: user.firstName + " " + user.surname,
                email: user.email,
                detalles: "http://localhost:3001/api/users/" + user.id
            }))
        })
    },
    show: async (req,res) => {
        let user = await db.User.findByPk(req.params.id)
        let userArray = [user]
        return res.status(200).json({
            user: userArray.map(user => ({
                id: user.id,
                nombre: user.firstName,
                apellido: user.surname,
                usuario: user.username,
                emai: user.email,
                foto: "http://localhost:3001/images/user-avatar/" + user.avatar
            })),

        })
    }
}