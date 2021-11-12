const express = require("express");

const UserController = require("./controllers/userController");
const TaskController = require("./controllers/taskController");

const app = express();
const { APP_PORT, APP_NAME } = require("./utils/appConfig");

const user = new UserController();
const task = new TaskController();

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});

app.get("/users", user.show);
app.post("/users", user.save);

app.get("/tasks", task.show);

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} listening at http://localhost:${APP_PORT}`);
});
