const express = require("express");
const { engine } = require("express-handlebars");
const routes = require("./src/routes/routes");
require("dotenv").config();

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views"); //not really necessary but we want to make sure the folder's name is views
// app.use("/assets", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //res.send("Pre engine");
  res.render("index", { title: "Post engine" });
  //fetch noticias
});
// app.get("/noticias", (req, res) => {
//   res.send("Tus nalgas");
// });
app.use("/api", routes);
app.listen(3000, () => {
  console.log("Testing port 3000");
});
