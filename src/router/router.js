const express = require("express");
const cors = require("cors");
const router = express.Router();

const UserRouter = require("./userRouter");
const TaskRouter = require("./taskRouter");

router.use(cors());
router.use((req, res, next) => {
  console.log(req.headers.host, new Date().toLocaleTimeString());
  next();
});

router.use(express.json());

router.get("/", (req, res) => {
  res.send("Welcome to ToDo APP API");
});

router.use("/users", UserRouter);
router.use("/tasks", TaskRouter);

module.exports = router;
