const {Recipe} = require("../db.js")

const deleteRecipe = async(id) => {
    const deleteRecipes = await Recipe.destroy({
        where: {
            id
        }
    })
    return {
        message: "Receta eliminada",
        data: deleteRecipes
    }
}

module.exports = deleteRecipe;