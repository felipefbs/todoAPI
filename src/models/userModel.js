const { v4: uuid } = require("uuid");
const sha256 = require("js-sha256");

class UserModel {
  constructor(name, email, password) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = sha256(password);
  }
}

module.exports = UserModel;
