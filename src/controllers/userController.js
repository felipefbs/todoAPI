class UserController {
  show = (req, res) => {
    res.send(
      "Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados."
    );
  };

  save = (req, res) => {
    res.send(
      "Rota POST de Usuário ativada: usuário adicionado ao banco de dados"
    );
  };
}

module.exports = UserController;
