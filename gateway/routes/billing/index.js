const proxy = require("express-http-proxy");

const factory = ({ router, url }) => {
  router.get("/billing", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.get("/billing/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.post("/billing", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.put("/billing/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.delete("/billing/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.get("/billing/reservation/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.get("/billing/charge/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  return router;
};

module.exports = factory;
