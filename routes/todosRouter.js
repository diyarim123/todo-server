const express = require('express');
const fs = require('fs');
const app = express();


//import controllers
const {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
} = require(`${__dirname}/../controllers/todosController`);


const router = express.Router();

router.route("/")
    .get(getTodos)
    .post(createTodo)

router.route("/:id")
    .delete(deleteTodo)
    .patch(updateTodo)


module.exports = router;