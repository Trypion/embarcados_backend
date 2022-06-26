const proxy = require("express-http-proxy");

const factory = ({ router, url }) => {
  router.get("/clients", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.get("/clients/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.post("/clients", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.put("/clients/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.delete("/clients/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  return router;
};

module.exports = factory;
