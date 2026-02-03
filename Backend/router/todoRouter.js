const express = require("express");
const { getTodo, createTodo, updateTodo, deleteTodo } =
  require("../controller/todoController");

const todoRoute = express.Router();

todoRoute.get("/", getTodo);          // GET all
todoRoute.post("/", createTodo);      // CREATE
todoRoute.put("/:id", updateTodo);    // UPDATE
todoRoute.delete("/:id", deleteTodo); // DELETE

module.exports = todoRoute;
