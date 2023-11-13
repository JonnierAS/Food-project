const {Recipe} = require("../db.js")

const updateRecipe = async(id,name, image, summary, healthScore, steps)=>{
    
    const recipe = await Recipe.update(
        {name, image, summary, healthScore, steps},
       { where: {
       id
    }}
    )
    if(!recipe){
        throw {message: "No se pudo actualizar"}
    }
    return {recipe: recipe,
        message: "Receta actualizada con exito"
    }
}

module.exports = updateRecipe;