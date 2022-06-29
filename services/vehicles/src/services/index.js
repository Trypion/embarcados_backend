const { default: mongoose } = require("mongoose");
const Vehicle = require("../models/vehicles");

const factory = ({router}) => {
    const Model = mongoose.model("Vehicle", Vehicle);

    router.get("/vehicles", async (req, res) => {
        const vehicles = await Model.find();

        res.send(vehicles);
    });

    router.get("/vehicles/:id", async (req, res) => {
        const vehicles = await Model.find({ _id: req.params.id });

        res.send(vehicles);
    });

    router.post("/vehicles", async (req, res) => {
        const vehicle = new Model(req.body); //entrega o conteudo do body para o model

        await vehicle.save();

        res.send(vehicle);
    });

    router.put("/vehicles/:id", async (req, res) => {
        const vehicle = await Model.findByIdAndUpdate(req.params.id, req.body);

        res.send(vehicle);
    });

    router.delete("/vehicles/:id", async (req, res) => {
        const vehicle = await Model.findByIdAndDelete(req.params.id);

        res.send(vehicle);
    });

    return router;
};

module.exports = factory;
