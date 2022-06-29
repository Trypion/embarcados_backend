const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
  placa: {
    type: String,
    required: [true, "Placa Obrigatório"],
  },
  ano: {
    type: String,
    required: [true, "Ano Obrigatório"],
  },
  modelo: {
    type: String,
    required: [true, "Modelo Obrigatório"],
  },
});

module.exports = VehicleSchema;
