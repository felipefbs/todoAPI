const UserModel = require("../models/userModel");
const { userDB } = require("../infra/bd");

class UserController {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  show = (req, res) => {
    const name = req.params.name;

    this.dbConn.forEach((user) => {
      if (user.name === name) {
        res.send(user);
      }
    });
  };

  save = (req, res) => {
    const { name, email, password } = req.body;

    const user = new UserModel(name, email, password);
    this.dbConn.push(user);

    res.send(
      `Rota POST de Usuário ativada: usuário ${body.nome} de email ${body.email} adicionado ao banco de dados`
    );
  };
}

module.exports = new UserController(userDB);
