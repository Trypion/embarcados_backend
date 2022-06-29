module.exports = {
  database: {
    mongodb: {
      url: process.env.MONGODB_URL || "mongodb://localhost:27017/",
      dbname: process.env.DATABASE_NAME || "vehicle_lock",
    },
  },
  clients: {
    vehicle_location: {
      url: process.env.VEHICLES_URL || "http://localhost:3000",
    },
    billing: {
      url: process.env.BILLING_URL || "http://localhost:3001",
    },
  },
};
