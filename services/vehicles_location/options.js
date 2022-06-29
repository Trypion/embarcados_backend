module.exports = {
  database: {
    mongodb: {
      url: process.env.MONGODB_URL || "mongodb://localhost:27017/",
      dbname: process.env.DATABASE_NAME || "vehicle_location",
    },
  },
  clients: {
    vehicle: {
      url: process.env.VEHICLES_URL || "http://localhost:3000",
    },
  },
};
