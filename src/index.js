const express = require("express");

const UserController = require("./controllers/userController");
const TaskController = require("./controllers/taskController");

const app = express();
const { APP_PORT, APP_NAME } = require("./utils/appConfig");

app.use((req, res, next) => {
  console.log(req.headers.host, new Date().toLocaleTimeString());
  next();
});

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});

app.get("/users", user.show);
app.post("/users", user.save);

app.get("/tasks", task.show);
app.post("/tasks", task.save);

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} listening at http://localhost:${APP_PORT}`);
});
