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

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Recipes.getShoppingList(id)
        .then(response => {
            //console.log(response);
            res.status(200).json(response);
        })
        .catch(err => {
            //console.log(err);
            res.status(500).json({error: err, message: `Failed to retrieve shopping list for recipe with id ${id}`})
        });
});

module.exports = router;