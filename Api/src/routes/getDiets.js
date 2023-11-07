const { Router } = require('express');
const constrollers = require("../controllers/index.js")
const routerDiet = Router();

routerDiet.get("/", async(req, res) =>{
    try {
        res.send(await constrollers.getAllDiets())
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

module.exports = routerDiet;