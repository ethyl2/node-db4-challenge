
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Fruit Salad', author: 'Heather'},
        {name: 'Granola With Milk', author: 'Marilyn'},
        {name: 'Fruit Smoothie', author: 'Heather'},
        {name: 'Yogurt Parfait', author: 'Rose'} 
      ]);
    });
};
