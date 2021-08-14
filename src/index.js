const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

// Connect DB
db.connect();

// Apply middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
); // Middleware xử lý dữ liệu từ form (html)
app.use(express.json()); // XMLHttpRequest, fetch, axios,... (Từ client gửi dữ liệu lên bằng js)

// Public file
app.use(express.static(path.join(__dirname, 'public')));

// methodOverride
app.use(methodOverride('_method'));

// Custom Middleware
app.use(SortMiddleware);

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default'
        const icons = {
          default: 'oi oi-elevator',
          asc: 'oi oi-sort-ascending',
          desc: 'oi oi-sort-descending',
        };
        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc'
        }
        const icon = icons[sortType];
        const type = types[sortType];
        return `<a href="?_sort&column=${field}&type=${type}">
          <span class="${icon}"></span>
        </a>`;
      },
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
