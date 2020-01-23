module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes')
        .select('recipes.name', 'recipes.author');
}

function getShoppingList(recipe_id) {

}

function getInstructions(recipe_id) {

}