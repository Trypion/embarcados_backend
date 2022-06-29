const { default: mongoose } = require("mongoose");
const Client = require("../models/clients");

const factory = ({ router }) => {
  const Model = mongoose.model("Client", Client);

  router.get("/clients", async (req, res) => {
    const clients = await Model.find();

    res.send(clients);
  });

  router.get("/clients/:id", async (req, res) => {
    const clients = await Model.findById(req.params.id);

    res.send(clients);
  });

  router.post("/clients", async (req, res) => {
    const client = new Model(req.body); //entrega o conteudo do body para o model

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

module.exports = factory; //exporta o factory inteiro como uma variavel com função
