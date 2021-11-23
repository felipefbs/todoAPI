const db = require("../infra/sqlite-db");

const { TASKS_TABLE: TABLE } = require("../utils/appConfig");

class TaskDAO {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  getTaskByID = (id) => {
    return new Promise((resolve, reject) => {
      this.dbConn.all(
        `SELECT * FROM ${TABLE} WHERE id like ?`,
        id,
        (error, results) => {
          console.log(id);
          if (error) {
            reject("Error: " + error);
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  getAllTasks = () => {
    return new Promise((resolve, reject) => {
      this.dbConn.all(`SELECT * FROM ${TABLE}`, (error, results) => {
        if (error) {
          reject("Algo de errado não esta certo!");
        } else {
          resolve(results);
        }
      });
    });
  };

  saveTask = (task) => {
    return new Promise((resolve, reject) => {
      console.log(task);
      this.dbConn.run(
        `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?, ?, ?)`,
        task.id,
        task.title,
        task.description,
        task.status,
        task.user_id,
        task.created_at,
        (error) => {
          if (error) {
            reject("Error: " + error);
          } else {
            resolve(true);
          }
        }
      );
    });
  };

  updateTask = (id, task) => {
    return new Promise((resolve, reject) => {
      this.dbConn.run(
        `UPDATE ${TABLE} SET title = ?, description = ?, status = ?, user_id = ? WHERE id = ?`,
        task.title,
        task.description,
        task.status,
        task.user_id,
        id,
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(true);
          }
        }
      );
    });
  };

  deleteTask = (id) => {
    return new Promise((resolve, reject) => {
      this.dbConn.run(`DELETE FROM ${TABLE} WHERE id = ?`, id, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(true);
        }
      });
    });
  };
}

module.exports = new TaskDAO(db);
