module.exports = {
  database: {
    mongodb: {
      url: process.env.MONGODB_URL || "mongodb://localhost:27017/",
      dbname: process.env.DATABASE_NAME || "billing",
    },
  },
  clients: {
    vehicle: {
      url: process.env.VEHICLES_URL || "http://localhost:3000",
    },
    clients: {
      url: process.env.CLIENTS_URL || "http://localhost:3001",
    }
  },
};
