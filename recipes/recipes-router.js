const express = require('express');
//const Recipes = require('./recipes-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Here are the recipes');
});

module.exports = router;