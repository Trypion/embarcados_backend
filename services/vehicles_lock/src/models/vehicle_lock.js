const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleLockSchema = new Schema({
  veiculo: {
    type: String,
    required: [true, "veiculo Obrigatório"],
  },
  cliente: {
    type: String,
    required: [true, "cliente Obrigatório"],
  },
  status: {
    type: String,
    required: [true, "status Obrigatório"],
  },
});

module.exports = VehicleLockSchema;
