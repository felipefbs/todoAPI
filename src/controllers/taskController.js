class TaskController {
  show = (req, res) => {
    res.send(
      "Rota ativada com GET e recurso Tarefas: valores de tarefas devem ser retornados."
    );
  };

  save = (req, res) => {
    res.send(
      "Rota POST de Tarefas ativada: tarefas adicionado ao banco de dados"
    );
  };
}

module.exports = TaskController;
