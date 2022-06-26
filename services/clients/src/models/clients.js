const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  nome: {
    type: String,
    required: [true, "Nome Obrigatório"],
  },
  CNH: {
    type: String,
    required: [true, "CNH Obrigatório"],
  },
  email: {
    type: String,
    required: [true, "Email Obrigatório"],
  },
  telefone: {
    type: String,
    required: [true, "Telefone Obrigatório"],
  },
  cartao: {
    type: String,
    required: [true, "Cartão Obrigatório"],
  },
});

module.exports = ClientSchema;
