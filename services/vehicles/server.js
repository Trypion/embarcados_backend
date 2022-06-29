const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const service = require("./src/services");
const database = require("./src/database");
const options = require("./options");
const router = express.Router();

const app = express(); //inicia o express
database.factory(options.database); // inicia o banco de dados
app.use(bodyParser.json()); //inicia o bodyParser que cria um objeto json
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(service({ router })); //recebendo as rotas do service

app.use(logger("dev")); //inicia o logger do morgan em "DEV"

//Servidor
let porta = 5000;
app.listen(porta, () => {
  console.log("Servidor em execução na porta: " + porta);
});
