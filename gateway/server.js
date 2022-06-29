const express = require("express");
const logger = require("morgan");
const router = express.Router();
const options = require("./options");
const bodyParser = require("body-parser");

const routes = require("./routes"); //importa as rotas do arquivo routes.js

const app = express();
app.use(logger("dev"));

app.use(routes.clients({ router, url: options.clients.url }));
app.use(routes.billing({ router, url: options.billing.url }));
app.use(routes.vehicles({ router, url: options.vehicles.url })); //Gatway para o Vehicles e redirecionamento das rotas (routes.vehicles = route do express pra configurar e url definida em options.js)
app.use(routes.vehicle_location({ router, url: options.vehicle_location.url }));
app.use(routes.vehicle_lock({ router, url: options.vehicle_lock.url }));

app.listen(5000, () => {
  console.log("API Gateway iniciado!");
});
