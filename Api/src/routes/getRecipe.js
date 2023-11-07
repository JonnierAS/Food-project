const { Router } = require('express');

const routerRecipe = Router();

routerRecipe.get("/", (req, res) =>{
    res.status(200).send("Traigo las recetas")
})

routerRecipe.get("/:id", (req, res) =>{
    res.status(200).send("Soy el detalle del Recipe")
})

routerRecipe.post("/recipe", (req, res) =>{
    res.status(200).send("Creo la receta")
})

module.exports = routerRecipe;