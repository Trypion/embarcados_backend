module.exports = {
  clients: {
    url: process.env.CLIENTS_URL || "http://localhost:3000",
  },
  billing: {
    url: process.env.BILLING_URL || "http://localhost:3001",
  },
};
