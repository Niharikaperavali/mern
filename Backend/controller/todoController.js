let todos = [
  { id: 1, task: "Reading", completed: false },
  { id: 2, task: "Reading", completed: false },
  { id: 3, task: "Reading", completed: false }
];

// GET ALL TODOS
const getTodo = (req, res) => {
  res.status(200).json(todos);
};

// CREATE TODO
const createTodo = (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }

  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    task,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// UPDATE TODO
const updateTodo = (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (req.body.task !== undefined) {
    todo.task = req.body.task;
  }

  if (req.body.completed !== undefined) {
    todo.completed = req.body.completed;
  }

  res.status(200).json(todo);
};

// DELETE TODO
const deleteTodo = (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  todos.splice(index, 1);
  res.status(200).json({ message: "Task Deleted Successfully" });
};

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};
