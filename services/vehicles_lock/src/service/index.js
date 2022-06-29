const { default: mongoose } = require("mongoose");
const VehicleLock = require("../models/vehicle_lock");

const billingApi = require("../client/billing");

const factory = ({ router }) => {
  const Model = mongoose.model("VehicleLock", VehicleLock);

  router.get("/vehicle_lock", async (req, res) => {
    const vehicle_lock = await Model.find();

    res.send(vehicle_lock);
  });

  router.get("/vehicle_lock/:id", async (req, res) => {
    const vehicle_lock = await Model.find({ _id: req.params.id });

    res.send(vehicle_lock);
  });

  router.post("/vehicle_lock/unlock", async (req, res) => {
    const { veiculo, cliente, tempo } = req.body;

    const vehicle_lock = new Model({ veiculo, cliente, status: "unlocked" });

    const { data: id } = await billingApi.http.post("/billing", {
      veiculo,
      cliente,
      tempo,
    });

    await vehicle_lock.save();

    res.send({ billing: id, vehicle_lock: vehicle_lock });
  });

  router.post("/vehicle_lock/lock", async (req, res) => {
    const { billing, vehicle_lock_id } = req.body;

    const {
      data: { id },
    } = await billingApi.http.get(`/billing/charge/${billing}`);

    const vehicle_lock = await Model.findByIdAndUpdate(
      { _id: vehicle_lock_id },
      { status: "locked" }
    );

    await vehicle_lock.save();

    res.send({ billing: id, vehicle_lock });
  });

  router.put("/vehicle_lock/:id", async (req, res) => {
    const vehicle_lock = await Model.findByIdAndUpdate(req.params.id, req.body);

    res.send(vehicle_lock);
  });

  router.delete("/vehicle_lock/:id", async (req, res) => {
    const vehicle_lock = await Model.findByIdAndDelete(req.params.id);

    res.send(vehicle_lock);
  });

  return router;
};

module.exports = factory;
