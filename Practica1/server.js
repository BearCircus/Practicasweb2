const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const routes = require("./src/routes/noticias");
require("dotenv").config();

const app = express();

//routes
app.use("/noticias", routes);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.static("styles/css"));

app.get("/", (req, res) => {
  res.sendStatus(202);
});

app.listen(1234, () => {
  console.log("Testing port 1234");
});
