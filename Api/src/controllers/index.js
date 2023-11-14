const createRecipe = require("./createRecipe.js");
const getAllDiets = require("./getAllDiets.js");
const getAllRecipe = require("./getAllRecipe.js");
const getRecipeDetail = require("./getRecipeDetail.js");
const getRecipeName = require("./getRecipeName.js");
const updateRecipe = require("./updateRecipe.js");
const deleteRecipe = require("./deleteRecipe.js");

module.exports = controllers = {
    createRecipe,
    getAllDiets,
    getAllRecipe,
    getRecipeDetail,
    getRecipeName,
    updateRecipe,
    deleteRecipe
}