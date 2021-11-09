const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});

function usersHandler(req, res) {
  res.send(
    "Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados."
  );
}

function tasksHandler(req, res) {
  res.send(
    "Rota ativada com GET e recurso Tarefas: valores de tarefas devem ser retornados."
  );
}

app.get("/users", usersHandler);
app.get("/users", tasksHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
