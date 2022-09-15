const axios = require("axios");
const app = require("express")();
const router = require("express").Router();

async function getNews(req, res) {
  let search = req.query.title;
  let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.API_KEY}`;
  const resp = await axios.get(url);
  const data = resp.data;
  return data;
}

app.get("/", async (req, res) => {
  let format = req.query.format;
  const news = await getNews(req, res);
  const data = news.articles;

  if (format == "JSON") {
    res.send(data);
    return;
  }
  res.render("index", { articles: data });
});

module.exports = app;
