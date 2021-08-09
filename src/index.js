const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
const route = require("./routes");

// Apply middleware
app.use(
  express.urlencoded({
    extended: true,
  })
); // Middleware xử lý dữ liệu từ form (html)
app.use(express.json()); // XMLHttpRequest, fetch, axios,... (Từ client gửi dữ liệu lên bằng js)

// Public file
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
