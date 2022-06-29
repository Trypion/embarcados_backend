module.exports = {
  clients: {
    url: process.env.CLIENTS_URL || "http://localhost:3000",
  }, // url para onde vai ser feito o proxy

  vehicles: {
    url: process.env.VEHICLES_URL || "http://localhost:3001",
  } // url para onde vai ser feito o proxy do Vehicles
};
