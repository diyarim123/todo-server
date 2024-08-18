/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').truncate()
  await knex('todos').insert([
    {
      id: 1,
      message: "Create a Todo App"
    },
    {
      id: 2,
      message: "Wash the dishes"
    },
    {
      id: 3,
      message: "Come back yesterday"
    },
  ]);
};
