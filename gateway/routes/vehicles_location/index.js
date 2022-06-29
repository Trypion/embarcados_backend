const proxy = require("express-http-proxy");

const factory = ({ router, url }) => {
  router.get("/vehicles_location", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.get("/vehicles_location/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.post("/vehicles_location", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.put("/vehicles_location/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.delete("/vehicles_location/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  return router;
};

module.exports = factory;
