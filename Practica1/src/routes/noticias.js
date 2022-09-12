const axios = require("axios");
const app = require("express")();
const router = require("express").Router();
const { engine } = require("express-handlebars");

async function getNews(req, res) {
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
  const resp = await axios.get(url);
  const data = resp.data;
  // console.log(data);
}

app.get("/", (req, res) => {
  const news = getNews(req, res);
  console.log(typeof news);
  // res.render("index", { title: news });
  res.send(news);
});

module.exports = app;
