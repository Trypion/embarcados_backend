const proxy = require("express-http-proxy");

const factory = ({ router, url }) => { // factory é um objeto que recebe o router e o url
  router.get("/vehicles", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.get("/vehicles/:id", (req, res, next) => {
    proxy(url)(req, res, next); // url para onde vai ser feito o proxy"
  });

  router.post("/vehicles", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.put("/vehicles/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  router.delete("/vehicles/:id", (req, res, next) => {
    proxy(url)(req, res, next);
  });

  return router;
};

module.exports = factory;
