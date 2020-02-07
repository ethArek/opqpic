const express = require("express");
const app = express();
const bodyParser = require("body-parser");
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

app.listen(3000, () => {
  console.log("listening on port 3000");
});
