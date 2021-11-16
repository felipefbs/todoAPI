class UserController {
  show = (req, res) => {
    res.send(
      "Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados."
    );
  };

  save = (req, res) => {
    const body = req.body;
    res.send(
      `Rota POST de Usuário ativada: usuário ${body.nome} de email ${body.email} adicionado ao banco de dados`
    );
  };
}

module.exports = new UserController();
