require('dotenv').config();
const axios = require('axios');
const {Recipe, Diets} = require("../db.js")
const {API_KEY,URL_API} = process.env;

const URL = `${URL_API}=${API_KEY}&addRecipeInformation=true`;

const getRecipeDetail = async(id)=>{
    const numericId = !isNaN(+id)
    if(numericId){

        const res = await axios.get(URL, {
            headers: {
                "Accept-Encoding": "null",
            },
        })
        const {results} = res.data;
        
        const modifiedApiRecipe = results.map(recipe => ({
            id: recipe.id,
            name: recipe.title,
            image: recipe.image,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            steps: recipe.analyzedInstructions
        })).filter(api => {if(api.id == id) return api.id})
        return modifiedApiRecipe
       
    }
    
    const dbRecipe = await Recipe.findOne({
        where: {id },
        include: Diets
    });
    if(!dbRecipe) throw {message: "Detail not Found!"};
    return [dbRecipe]
}

module.exports = getRecipeDetail;