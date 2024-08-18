const express = require('express');
const fs = require('fs');
const app = express();

// api/services/todosService.js
const db = require(`${__dirname}/../api/dbConfig`);

//middlewares
app.use(express.json());



const createTodo = async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ message: 'You must include a message in your request.' })
    }
    try {
        await db('todos').insert({ message });
        res.status(201).json({ message: 'Todo successfully stored!' });
    } catch(err) {
        res.status(400).json({error: err})
    }
};


const getTodos = async (req, res) => {
    try {
      const todos = await db('todos');
      res.status(200).json(todos);
  } catch(err) {
      res.status(400).json({error: err})
  } 
};


const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  if(!message) {
    return res.status(400).json({message: "You must provide a message"});
  }
  try {
    await db('todos').where({ id }).update({ message });
    res.status(200).json({message: "Todo successfully updated"})
  } catch(err) {
    res.status(400).json({error: err});
  }
};


const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await db('todos').where({id}).del();
    res.status(200).json({message : "Todo deleted successfuly !"});
  } catch (err) {
    console.log(err)
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
};

