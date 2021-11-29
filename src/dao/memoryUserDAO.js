const db = [];

class UserDAO {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  getUserByID = (id) => {
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

  getAllUsers = () => {
    return new Promise((resolve, reject) => {
      resolve(this.dbConn);
    });
  };

  saveUser = (user) => {
    return new Promise((resolve, reject) => {
      this.dbConn.push(user);
      resolve(user.id);
    });
  };

  updateUser = (id, user) => {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.dbConn.length; i++) {
        if (this.dbConn[i].id === id) {
          this.dbConn[i].id = user;
          resolve(this.dbConn[i].id);
        }
      }
    });
  };

  deleteUser = (id) => {
    return new Promise((resolve, reject) => {
      this.dbConn = this.dbConn.filter((db) => db.id !== id);
      resolve(true);
    });
  };
}

module.exports = new UserDAO(db);
