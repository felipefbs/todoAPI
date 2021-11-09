const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});

app.get("/users", (req, res) => {
  res.send(
    "Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados."
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
