const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const serveIndex = require("serve-index");
const api = require("./api");

app.use(bodyParser.json({ limit: "3mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "5mb",
    parameterLimit: 100000
  })
);

app.use("/api", api);
app.use(
  "/.well-known",
  express.static(".well-known"),
  serveIndex(".well-known")
);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
