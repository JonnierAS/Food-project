require('dotenv').config();
const axios = require('axios');
const {Op} = require("sequelize")
const {Recipe, Diets} = require("../db.js")
const {API_KEY,URL_API} = process.env;

const URL = `${URL_API}=${API_KEY}&addRecipeInformation=true`;

const getRecipeName = async(name)=>{
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
    }))
    const filterApiName = modifiedApiRecipe.filter(api => {
        if(api.name.includes(name)){
            return api.name
        }
    })
    console.log(filterApiName)
    const dbRecipe = await Recipe.findAll({
        where: {
            name: {
                [Op.iLike]: `${name}`
            }
        },
        include: Diets
    })
    if(!filterApiName.length && !dbRecipe.length){
        throw {
            status: false,
            message: "Recipe Not Found!"
        }
    }
    return [...dbRecipe, ...filterApiName]
}

module.exports = getRecipeName;