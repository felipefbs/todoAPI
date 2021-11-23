const TaskModel = require("../models/taskModel");
const dao = require("../dao/taskDAO");

class TaskController {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  show = (req, res) => {
    const id = req.params.id;

    this.dbConn
      .getTaskByID(id)
      .then((task) => {
        res.send(task);
      })
      .catch((error) => {
        res.send(error);
      });
  };

  index = (req, res) => {
    this.dbConn
      .getAllTasks()
      .then((task) => {
        res.send(task);
      })
      .catch((error) => {
        res.send(error);
      });
  };

  save = (req, res) => {
    const { title, description, status, user_id } = req.body;

    const task = new TaskModel(title, description, status, user_id);

    this.dbConn
      .saveTask(task)
      .then((task) => {
        res.send(task);
      })
      .catch((error) => {
        res.send(error);
      });
  };

  update = (req, res) => {
    const id = req.params.id;
    const content = req.body;

    this.dbConn
      .updateTask(id, content)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.send(error);
      });
  };

  remove = (req, res) => {
    const id = req.params.id;

    this.dbConn
      .deleteTask(id)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.send(error);
      });
  };
}

module.exports = new TaskController(dao);
