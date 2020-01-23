
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, instructions: 'Wash fruit.', recipe_id: 1},
        {step_number: 2, instructions: 'Cut up strawberries.', recipe_id: 1},
        {step_number: 3, instructions: 'Peel and slice bananas.', recipe_id: 1},
        {step_number: 4, instructions: 'Combine fruit in a bowl.', recipe_id: 1},

        {step_number: 1, instructions: 'Wash fruit.', recipe_id: 2},
        {step_number: 2, instructions: 'Slice strawberries.', recipe_id: 2},
        {step_number: 3, instructions: 'Pour granola in a bowl.', recipe_id: 2},
        {step_number: 4, instructions: 'Pour milk on top of granola.', recipe_id: 2},
        {step_number: 5, instructions: 'Top with blueberries and strawberries.', recipe_id: 2},

        {step_number: 1, instructions: 'Peel and cut bananas into chunks.', recipe_id: 3},
        {step_number: 2, instructions: 'If preparing ahead of time, freeze banana chunks.', recipe_id: 3},
        {step_number: 3, instructions: 'Wash strawberries and blueberries.', recipe_id: 3},
        {step_number: 4, instructions: 'Pour milk into blender.', recipe_id: 3},
        {step_number: 5, instructions: 'Add ice to blender.', recipe_id: 3},
        {step_number: 6, instructions: 'Add yogurt to blender.', recipe_id: 3},
        {step_number: 7, instructions: 'Add banana chunks, strawberries, and blueberries to blender.', recipe_id: 3},
        {step_number: 8, instructions: 'Blend until smooth.', recipe_id: 3},

        {step_number: 1, instructions: 'Place a layer of yogurt into a glass.', recipe_id: 4},
        {step_number: 2, instructions: 'Wash fruit.', recipe_id: 4},
        {step_number: 3, instructions: 'Place a layer of blueberries and sliced strawberries on top of the yogurt layer.', recipe_id: 4},
        {step_number: 4, instructions: 'Repeat alternate layers until all yogurt and fruit is in the glass.', recipe_id: 4},
        {step_number: 5, instructions: 'Top with granola.', recipe_id: 4},
      ]);
    });
};
