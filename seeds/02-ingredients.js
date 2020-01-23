
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Strawberries'},
        {name: 'Blueberries'},
        {name: 'Bananas'},
        {name: 'Granola'},
        {name: 'Milk'},
        {name: 'Yogurt'},
        {name: 'Ice'}
      ]);
    });
};
