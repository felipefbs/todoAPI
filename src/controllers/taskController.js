const TaskModel = require("../models/taskModel");

class TaskController {
  show = (req, res) => {
    res.send(
      "Rota ativada com GET e recurso Tarefas: valores de tarefas devem ser retornados."
    );
  };

  save = (req, res) => {
    const { title, description, status } = req.body;

    const task = new TaskModel(title, description, status);
    console.log(task);

    res.send(
      "Rota POST de Tarefas ativada: tarefas adicionado ao banco de dados"
    );
  };
}

module.exports = new TaskController();
