
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_requirements').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_requirements').insert([
        {ingredient_id: 1, quantity: 6, unit: 'ounces', recipe_id: 1},
        {ingredient_id: 1, quantity: 0.5, unit: 'cup', recipe_id: 2},
        {ingredient_id: 1, quantity: 2, unit: 'cups', recipe_id: 3},
        {ingredient_id: 1, quantity: 8, unit: 'ounces', recipe_id: 4},

        {ingredient_id: 2, quantity: 6, unit: 'ounces', recipe_id: 1},
        {ingredient_id: 2, quantity: 0.5, unit: 'cup', recipe_id: 2},
        {ingredient_id: 2, quantity: 2, unit: 'cups', recipe_id: 3},
        {ingredient_id: 2, quantity: 6, unit: 'ounces', recipe_id: 4},

        {ingredient_id: 3, quantity: 1, unit: 'whole piece of fruit', recipe_id: 1},
        {ingredient_id: 3, quantity: 2, unit: 'whole pieces of fruit', recipe_id: 3},
        
        {ingredient_id: 4, quantity: 1.5, unit: 'cups', recipe_id: 2},
        {ingredient_id: 4, quantity: 0.25, unit: 'cup', recipe_id: 4},

        {ingredient_id: 5, quantity: 0.5, unit: 'cup', recipe_id: 2},
        {ingredient_id: 5, quantity: 1.5, unit: 'cups', recipe_id: 3},

        {ingredient_id: 6, quantity: 6, unit: 'ounces', recipe_id: 3},
        {ingredient_id: 6, quantity: 8, unit: 'ounces', recipe_id: 4},

        {ingredient_id: 7, quantity: 1, unit: 'cup', recipe_id: 3}
      ]);
    });
};
