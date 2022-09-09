const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views"); //not really necessary but we want to make sure the folder's name is views

app.get("/", (req, res) => {
  //   res.send("Pre engine");
  res.render("index", { title: "Post engine" });
});

app.listen(3000, () => {
  console.log("Testing port 3000");
});
