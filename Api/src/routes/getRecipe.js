const { Router } = require('express');
const controllers = require("../controllers/index.js")
const routerRecipe = Router();

routerRecipe.get("/", async(req, res) =>{
    const {name} = req.query;
    if(name){
        try{
            const data = await controllers.getRecipeName(name);
            res.status(200).send(data);
        }catch(error){
            res.status(400).send(error.message)
        }
    }else{
        try{
            res.status(200).send( await controllers.getAllRecipe())
        }catch(error){
            res.status(400).send(error)
        }
    }
    
})

routerRecipe.get("/:id", (req, res) =>{
    res.status(200).send("Soy el detalle del Recipe")
})

routerRecipe.post("/recipe", async(req, res) =>{
    const { name, image, summary, healthScore, steps, diets} = req.body;
    try{
        const response = await controllers.createRecipe(name, image, summary, healthScore, steps, diets);
        res.status(200).json(response)
    }catch(error){
        res.status(400).send(error.message)
    }
})

module.exports = routerRecipe;