const { randomUUID } = require('crypto');
module.exports = cleanDiets = (results)=>{
    const diet = [];
    results.map(die => {
        die.diets.map(n => {
            diet.push(n, die.vegetarian === true? "vegetarian": "null" && die.vegan === true? "vegan": "null" && die.glutenFree === true? "glutenFree": "null")
        })
    })
    const filterDiet = []
    diet.filter((e)=>{
        if(filterDiet.indexOf(e)=== -1){
            filterDiet.push(e)
        }
    })
    const dietclean = filterDiet.map(diet => ({
        id: randomUUID(),
        name: diet
    }))
    return dietclean
}