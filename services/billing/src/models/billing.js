const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillingSchema = new Schema({
  valor: {
    type: String,
    required: [true, "Nome Obrigatório"],
  },
  status: {
    type: String,
    required: [true, "Status Obrigatório"],
  },
  cartao: {
    type: String,
    required: [true, "Cartão Obrigatório"],
  },
  cliente: {
    type: String,
    required: [true, "Cliente Obrigatório"],
  },
  veiculo: {
    type: String,
    required: [true, "veiculo Obrigatória"],
  },
  tempo: {
    type: String,
    required: [true, "Tempo Obrigatório"],
  },
});

module.exports = BillingSchema;
