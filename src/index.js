const express = require("express");

const usersHandler = require("./controllers/UsersControllers/UsersControllers");
const tasksHandler = require("./controllers/TasksControllers/TaskControllers");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});

app.get("/users", usersHandler);
app.get("/tasks", tasksHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
