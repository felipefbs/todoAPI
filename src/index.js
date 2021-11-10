const express = require("express");

const UsersController = require("./controllers/userController");
const TasksController = require("./controllers/taskController");

const user = new UsersController();
const task = new TasksController();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});

app.get("/users", user.show);
app.get("/tasks", task.show);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
