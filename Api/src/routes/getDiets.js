const { Router } = require('express');

const routerDiet = Router();

routerDiet.get("/", (req, res) =>{
    res.status(200).send("Traigo las recetas")
})