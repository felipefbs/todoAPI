const UserModel = require("../models/userModel");
const db = require("../infra/sqlite-db");

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

  index = (req, res) => {
    this.dbConn.all("SELECT * FROM USUARIOS", (error, results) => {
      if (error) {
        res.send("Algo de errado não esta certo!");
      } else {
        res.send(results);
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

  update = (req, res) => {
    const name = req.params.name;
    const content = req.body;

    for (let i = 0; i < this.dbConn.length; i++) {
      if ((this.dbConn[i].name = name)) {
        this.dbConn[i] = content;
      }
    }

    res.send(`task: ${name} modificado com sucesso`);
  };

  remove = (req, res) => {
    const name = req.params.name;

    this.dbConn = this.dbConn.filter((u) => {
      return u.name !== name;
    });

    res.send(`${name} apagado com sucesso`);
  };
}

module.exports = new UserController(db);
