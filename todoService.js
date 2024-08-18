// api/services/todosService.js
const knex = require('../dbConfig');

// Create (Insert)
const createTodo = async (todo) => {
  return knex('todos').insert(todo);
};

// Read (Select)
const getTodos = async () => {
  return knex('todos').select('*');
};

// Update
const updateTodo = async (id, updatedTodo) => {
  return knex('todos')
    .where({ id })
    .update(updatedTodo);
};

// Delete
const deleteTodo = async (id) => {
  return knex('todos')
    .where({ id })
    .del();
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
};
