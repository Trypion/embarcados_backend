const { default: mongoose } = require("mongoose");
const Billing = require("../models/billing");
const vehiclesApi = require("../client/vehicles");
const clientApi = require("../client/client");

const factory = ({ router }) => {
  const Model = mongoose.model("Billing", Billing);

  router.get("/billing", async (req, res) => {
    const billing = await Model.find();

    res.send(billing);
  });

  router.get("/billing/:id", async (req, res) => {
    const billing = await Model.findById(req.params.id);

    res.send(billing);
  });

  router.post("/billing", async (req, res) => {
    const { tempo, veiculo, cliente } = req.body;

    const {
      data: { cartao },
    } = await clientApi.http.get(`/clients/${cliente}`);

    const {
      data: { valor },
    } = await vehiclesApi.http.get(`/vehicles/${veiculo}`);

    const preco = valor * tempo;

    const billing = new Model({
      ...req.body,
      cartao,
      valor: preco,
      status: "pending",
    });

    await billing.save();

    res.send(billing);
  });

  router.put("/billing/:id", async (req, res) => {
    const billing = await Model.findByIdAndUpdate(req.params.id, req.body);

    res.send(billing);
  });

  router.delete("/billing/:id", async (req, res) => {
    const billing = await Model.findByIdAndDelete(req.params.id);

    res.send(billing);
  });

  router.get("/billing/reservation/:id", async (req, res) => {
    const billing = await Model.findByIdAndUpdate(req.params.id, {
      status: "reserved",
    });

    // TODO reserva no cartao de crédito

    res.send(billing);
  });

  router.get("/billing/charge/:id", async (req, res) => {
    // TODO cobrar no cartao de crédito

    const billing = await Model.findByIdAndUpdate(req.params.id, {
      status: "paid",
    });

    res.send(billing);
  });

  return router;
};

module.exports = factory;
