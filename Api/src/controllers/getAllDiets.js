require('dotenv').config();
const axios = require('axios').default;
const {Diets} = require("../db.js");
const {API_KEY, URL_API} = process.env;
const cleanDiets = require("../utils/cleanDiets.js")
const URL = `${URL_API}=${API_KEY}&addRecipeInformation=true`;


const allDiets = async ()=>{
    const dbDiets = await Diets.findAll()
    if(dbDiets.length){
        return dbDiets
    }
    const res = await axios.get(URL, {
        headers: {
            "Accept-Encoding": "null",
        },
    })
    const {results} = res.data;
    return await Diets.bulkCreate(cleanDiets(results))
}

module.exports = allDiets;
