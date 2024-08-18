const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const app = express();

//import routes
const todosRouter = require(`${__dirname}/routes/todosRouter`)

const db = require('./api/dbConfig');

db.raw("SELECT VERSION()").then(() => {
  console.log("Connection Successful");
}).catch(err => {
  console.error("Connection failed: ", err);
});


// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/todos", todosRouter)

module.exports = app;