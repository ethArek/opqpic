const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const path = require("path");
const api = require("./API");

app.use(bodyParser.json({ limit: "3mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "5mb",
    parameterLimit: 100000
  })
);

// app.use("/api", api);

app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
