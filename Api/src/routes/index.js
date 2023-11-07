const { Router } = require('express');
const routerRecipe = require("./getRecipe.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", routerRecipe)

module.exports = router;