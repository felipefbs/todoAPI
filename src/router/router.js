const express = require("express");
const router = express.Router();
const cors = require("cors");

const UserRouter = require("./userRouter");
const TaskRouter = require("./taskRouter");

router.use(cors());
router.use((req, res, next) => {
  console.log(req.headers.host, new Date().toLocaleTimeString());
  next();
});

router.use(express.json());

router.get("/", (req, res) => {
  res.json({ message: "Welcome to ToDo app API" });
});

router.use("/users", UserRouter);
router.use("/tasks", TaskRouter);

module.exports = router;
