const { v4: uuid } = require("uuid");

class Tasks {
  constructor(title, description, status, userID) {
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.status = status;
    this.user_id = userID;
    this.created_at = new Date().toLocaleString();
  }
}

module.exports = Tasks;
