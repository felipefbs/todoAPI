class Tasks {
  constructor(title, description, status) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.created_at = new Date().toLocaleString();
  }
}

module.exports = Tasks;
