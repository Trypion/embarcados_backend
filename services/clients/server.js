const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const service = require("./src/services");
const database = require("./src/database");
const options = require("./options");
const router = express.Router();

const app = express();
database.factory(options.database);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(service({ router }));

app.use(logger("dev"));

//Servidor
let porta = 5000;
app.listen(porta, () => {
  console.log("Servidor em execução na porta: " + porta);
});
