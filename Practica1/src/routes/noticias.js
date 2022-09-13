const axios = require("axios");
const app = require("express")();
const router = require("express").Router();

async function getNews(req, res) {
  encodeURI();
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
  const resp = await axios.get(url);
  const data = resp.data;
  return data;
}

app.get("/", async (req, res) => {
  const news = await getNews(req, res);
  const articles = news.articles;
  res.send(articles);
  // res.render("index", { title: articles });
});

module.exports = app;
