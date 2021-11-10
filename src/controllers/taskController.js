class TaskController {
  show = (req, res) => {
    res.send(
      "Rota ativada com GET e recurso Tarefas: valores de tarefas devem ser retornados."
    );
  };
}

module.exports = TaskController;
