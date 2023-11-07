const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/a", (req, res) => {
    console.log("Hola");
    res.send("Hola")
})

module.exports = router;