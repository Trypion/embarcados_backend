const express = require("express");
const logger = require("morgan");
const router = express.Router();
const options = require("./options");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();
app.use(logger("dev"));

app.use(routes.clients({ router, url: options.clients.url }));

app.listen(5000, () => {
  console.log("API Gateway iniciado!");
});
