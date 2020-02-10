const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const serveIndex = require("serve-index");
const path = require("path");
const api = require("./api");

app.use(bodyParser.json({ limit: "15mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "15mb",
    parameterLimit: 100000
  })
);

app.use("/api", api);
app.use(
  "/.well-known",
  express.static(".well-known"),
  serveIndex(".well-known")
);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

app.use(
  express.static(path.join(__dirname, "/public"), {
    maxage: 86400000 * 7
  })
);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
