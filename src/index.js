const express = require("express");

const UserController = require("./controllers/userController");
const TaskController = require("./controllers/taskController");

const app = express();
const port = 3000;

const user = new UserController();
const task = new TaskController();

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});

app.get("/users", user.show);
app.get("/tasks", task.show);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
