const axios = require("axios");
const options = require("../../options");

const BASE_URL = options.clients.vehicle.url;

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = { http };
