const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())

app.listen(3000, (req,res) => {
    console.log("servidor corriendo");
})