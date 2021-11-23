const db = require("../infra/sqlite-db");

const { USERS_TABLE: TABLE } = require("../utils/appConfig");

class UserDAO {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  getUserByID = (id) => {
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

  getAllUsers = () => {
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

  saveUser = (user) => {
    return new Promise((resolve, reject) => {
      this.dbConn.run(
        `INSERT INTO ${TABLE} VALUES (?, ?, ?, ?)`,
        user.id,
        user.name,
        user.email,
        user.password,
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

  updateUser = (id, user) => {
    return new Promise((resolve, reject) => {
      this.dbConn.run(
        `UPDATE ${TABLE} SET name = ?, email = ?, password = ? WHERE id = ?`,
        user.name,
        user.email,
        user.password,
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

  deleteUser = (id) => {
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

module.exports = new UserDAO(db);
