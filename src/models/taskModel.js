const { v4: uuid } = require("uuid");

class Tasks {
  constructor(title, description, status) {
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.status = status;
    this.created_at = new Date().toLocaleString();
  }
}

module.exports = Tasks;
