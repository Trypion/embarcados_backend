const proxy = require("express-http-proxy");

const factory = ({ router, url }) => {
  router.get("/vehicle_lock", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.get("/vehicle_lock/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.post("/vehicle_lock/lock", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.post("/vehicle_lock/unlock", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.post("/vehicle_lock", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.put("/vehicle_lock/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.delete("/vehicle_lock/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  return router;
};

module.exports = factory;
