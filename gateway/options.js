module.exports = {
  clients: {
    url: process.env.CLIENTS_URL || "http://localhost:3000",
  },
  billing: {
    url: process.env.BILLING_URL || "http://localhost:3001",
  },
  vehicles: {
    url: process.env.VEHICLES_URL || "http://localhost:3002",
  },
  vehicle_location: {
    url: process.env.VEHICLE_LOCATION_URL || "http://localhost:3003",
  },
  vehicle_lock: {
    url: process.env.VEHICLE_LOCK_URL || "http://localhost:3004",
  },
};
