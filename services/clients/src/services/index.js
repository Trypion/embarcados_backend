const { default: mongoose } = require("mongoose");
const Client = require("../models/clients");

const factory = ({ router }) => {
  const Model = mongoose.model("Client", Client);

  router.get("/clients", async (req, res) => {
    const clients = await Model.find();

    res.send(clients);
  });

  router.get("/clients/:id", async (req, res) => {
    const clients = await Model.find({ _id: req.params.id });

    res.send(clients);
  });

  router.post("/clients", async (req, res) => {
    const client = new Model(req.body);

    await client.save();

    res.send(client);
  });

  router.put("/clients/:id", async (req, res) => {
    const client = await Model.findByIdAndUpdate(req.params.id, req.body);

    res.send(client);
  });

  router.delete("/clients/:id", async (req, res) => {
    const client = await Model.findByIdAndDelete(req.params.id);

    res.send(client);
  });

  return router;
};

module.exports = factory;
