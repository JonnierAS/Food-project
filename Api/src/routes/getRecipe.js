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

routerRecipe.post("/recipe", (req, res) =>{
    res.status(200).send("Creo la receta")
})

module.exports = routerRecipe;