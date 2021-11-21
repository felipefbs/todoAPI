const express = require("express");

const UserController = require("../controllers/userController");

const router = express.Router();

router.get("/:id", UserController.show);
router.get("/", UserController.index);
router.post("/", UserController.save);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.remove);

module.exports = router;
