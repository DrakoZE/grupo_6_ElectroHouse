const fs = require("fs");
const path = require("path");
const db = require("../../../database/models");

module.exports = {
    list: async (req,res) => {
        let users = await db.User.findAll()
        return res.status(200).json({
            total: users.length,
            data: users,
            status: "ok"
        })
    },
    show: async (req,res) => {
        let user = await db.User.findByPk(req.params.id)
        // console.log(req);
        return res.status(200).json({
            data: user,
            image: "http://localhost:3001/images/user-avatar/" + user.avatar,
            status: "ok"
        })
    }
}