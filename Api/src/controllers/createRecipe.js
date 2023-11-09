const {Recipe} = require("../db.js");
const allDiets = require("../controllers/getAllDiets.js")

const createRecipe = async(name, image, summary, healthScore, steps, diets)=>{
    if(!name || !summary || !healthScore){
        throw {
            status: false,
            message: "Falta informacion requerida"
        }
    }
    const recipeExist = await Recipe.findOne({
        where: {name}
    })
    if(recipeExist){
        throw {
            status: false,
            message: "La receta ya existe! Selecciona otro nombre"
        }
    }
    const newRecipe = await Recipe.create({
        name, image, summary, healthScore, steps
    })
    const allDietsRes = await allDiets();
    const filterDiets = diets.map(diet => (
        allDietsRes.find(d => d.name === diet)
    ))
    newRecipe.addDiets(filterDiets)
    console.log(newRecipe);
    return{
        status: "Done",
        message: "Receta creada con Exito",
        recipe: newRecipe
    }
}

module.exports = createRecipe;