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
    return db('recipe_requirements as rr')
        .join('ingredients', 'ingredients.id', 'rr.ingredient_id')
        .where({'rr.recipe_id': recipe_id})
        .select('ingredients.name', 'rr.quantity', 'rr.unit');
}

function getInstructions(recipe_id) {
    return db('steps')
        .where({'steps.recipe_id': recipe_id})
        .orderBy('steps.step_number')
        .select('steps.step_number as step', 'steps.instructions');
}