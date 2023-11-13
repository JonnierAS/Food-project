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
    
});

routerRecipe.get("/:id", async(req, res) =>{
    const {id} = req.params;
    try {
        const response = await controllers.getRecipeDetail(id)
        
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send(error.message)
    }

});

routerRecipe.post("/recipe", async(req, res) =>{
    const { name, image, summary, healthScore, steps, diets} = req.body;
    try{
        const response = await controllers.createRecipe(name, image, summary, healthScore, steps, diets);
        res.status(200).json(response)
    }catch(error){
        res.status(400).send(error.message)
    }
});

routerRecipe.put("/update", async(req, res)=>{
    const {id, name, image, summary, healthScore, steps, diets} = req.body;
    // const {id} = req.params;
    try {
        const response = await controllers.updateRecipe(id,name, image, summary, healthScore, steps, diets);
        res.status(200).send(response)
    } catch (error) {
        res.status(404).send(error.message)
    }
    
})

module.exports = routerRecipe;