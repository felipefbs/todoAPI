const express = require("express");

const router = require("./router/router");

const { APP_PORT, APP_NAME } = require("./utils/appConfig");

const app = express();

app.use("/", router);

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} listening at http://localhost:${APP_PORT}`);
});
