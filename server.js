const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 8084;
app.listen(port, function() {
  console.log(`Listening on port number http://localhost:${port}`);
});
