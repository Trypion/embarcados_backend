const { default: mongoose } = require("mongoose");
const VehicleLocation = require("../models/vehicle_location");

const factory = ({ router }) => {
  const Model = mongoose.model("VehicleLocation", VehicleLocation);

  router.get("/vehicle_location", async (req, res) => {
    const vehicle_location = await Model.find();

    res.send(vehicle_location);
  });

  router.get("/vehicle_location/:id", async (req, res) => {
    const vehicle_location = await Model.find({ _id: req.params.id });

    res.send(vehicle_location);
  });

  router.post("/vehicle_location", async (req, res) => {
    const vehicle_location = new Model(req.body);

    await vehicle_location.save();

    res.send(vehicle_location);
  });

  router.put("/vehicle_location/:id", async (req, res) => {
    const vehicle_location = await Model.findByIdAndUpdate(req.params.id, req.body);

    res.send(vehicle_location);
  });

  router.delete("/vehicle_location/:id", async (req, res) => {
    const vehicle_location = await Model.findByIdAndDelete(req.params.id);

    res.send(vehicle_location);
  });

  return router;
};

module.exports = factory;
