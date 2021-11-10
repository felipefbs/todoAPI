const express = require("express");

const UsersController = require("./controllers/userController");
const TasksController = require("./controllers/taskController");

const user = new UsersController();
const task = new TasksController();

const app = express();
const { APP_PORT } = require("./utils/appConfig");

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});

app.get("/users", user.show);
app.get("/tasks", task.show);

app.listen(APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${APP_PORT}`);
});
