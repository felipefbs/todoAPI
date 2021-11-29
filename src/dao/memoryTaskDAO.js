const db = [];

class TaskDAO {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  getTaskByID = (id) => {
    return new Promise((resolve, reject) => {
      console.log(this.dbConn);
      console.log(id);
      for (let i = 0; i < this.dbConn.length; i++) {
        if (this.dbConn[i].id === id) {
          console.log(this.dbConn[i]);
          resolve(this.dbConn[i]);
        }
      }
    });
  };

  getAllTasks = () => {
    return new Promise((resolve, reject) => {
      resolve(this.dbConn);
    });
  };

  saveTask = (task) => {
    return new Promise((resolve, reject) => {
      this.dbConn.push(task);
      resolve(task.id);
    });
  };

  updateTask = (id, task) => {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.dbConn.length; i++) {
        if (this.dbConn[i].id === id) {
          this.dbConn[i].id = task;
          resolve(this.dbConn[i].id);
        }
      }
    });
  };

  deleteTask = (id) => {
    return new Promise((resolve, reject) => {
      this.dbConn = this.dbConn.filter((db) => db.id !== id);
      resolve(true);
    });
  };
}

module.exports = new TaskDAO(db);
