const express = require('express');
const Recipes = require('./recipes-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: err, message: 'Failed to retrieve recipes'});
        });
});

module.exports = router;