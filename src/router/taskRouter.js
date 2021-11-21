const express = require("express");

const TaskController = require("../controllers/taskController");

const router = express.Router();

router.get("/:id", TaskController.show);
router.get("/", TaskController.index);
router.post("/", TaskController.save);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.remove);

module.exports = router;
