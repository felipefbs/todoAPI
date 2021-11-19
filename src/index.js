const express = require("express");

const UserController = require("./controllers/userController");
const TaskController = require("./controllers/taskController");

const app = express();
const { APP_PORT, APP_NAME } = require("./utils/appConfig");

app.use((req, res, next) => {
  console.log(req.headers.host, new Date().toLocaleTimeString());
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});

app.get("/users/:title", UserController.show);
app.get("/users/", UserController.index);
app.post("/users", UserController.save);
app.put("/tasks/:title", TaskController.update);
app.delete("/tasks/:title", TaskController.remove);

app.get("/tasks/:title", TaskController.show);
app.get("/tasks/", TaskController.index);
app.post("/tasks", TaskController.save);
app.put("/tasks/:title", TaskController.update);
app.delete("/tasks/:title", TaskController.remove);

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} listening at http://localhost:${APP_PORT}`);
});
