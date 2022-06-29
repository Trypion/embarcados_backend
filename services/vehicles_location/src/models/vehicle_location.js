const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleLocationSchema = new Schema({
  veiculo: {
    type: String,
    required: [true, "veiculo Obrigatório"],
  },
  latitude: {
    type: String,
    required: [true, "Latitude Obrigatória"],
  },
  longitude: {
    type: String,
    required: [true, "Longitude Obrigatória"],
  },
});

module.exports = VehicleLocationSchema;
