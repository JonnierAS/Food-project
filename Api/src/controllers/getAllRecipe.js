require('dotenv').config();
const axios = require('axios');
const {Recipe, Diets} = require("../db.js")
const {API_KEY, URL_API} = process.env;
const URL = `${URL_API}=${API_KEY}&addRecipeInformation=true`;


const getAllRecipe = async()=>{
    const dbRecipe = await Recipe.findAll({
        include: Diets
    });
    
    const res = await axios.get(URL, {
        headers: {
            "Accept-Encoding": "null",
        }
    })
    let apiRecipe = [];
    const {results} = res.data;
    const modifiedApiRecipe = results.map(recipe => ({
        id: recipe.id,
        name: recipe.title,
        image: recipe.image,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        diets: recipe.diets,
        steps: recipe.analyzedInstructions[0].steps
    }))
    apiRecipe.push(modifiedApiRecipe)
    
    return dbRecipe.concat(apiRecipe)
}

module.exports = getAllRecipe;