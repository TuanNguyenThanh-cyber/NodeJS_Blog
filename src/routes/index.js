// Routing (req: request, ress: response)
// Action ---> Dispatcher --> Function Handler (Controller)

// Query parameter (GET) thì sử dụng req.query
// Form Data (POST) thì sử dụng req.body

const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = route;
