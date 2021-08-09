// Routing (req: request, ress: response)
// Action ---> Dispatcher --> Function Handler (Controller)

// Query parameter (GET) thì sử dụng req.query
// Form Data (POST) thì sử dụng req.body

const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
