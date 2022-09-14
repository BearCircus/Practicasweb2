const axios = require("axios");
const app = require("express")();
const router = require("express").Router();

// async function getNews2(req, res, next) {
//   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
//   const resp = await axios.get(url);
//   const data = await resp.data;
//   req.params.data = data.articles;
//   next();
// }

async function getNews(req, res) {
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
  const resp = await axios.get(url);
  const data = resp.data;
  return data;
}

app.get("/", async (req, res) => {
  const news = await getNews(req, res);
  const data = news.articles;
  // if ((req.query.format = "JSON")) {
  //   console.log("Send");
  //   res.send(data);
  // }
  console.log("Render");
  res.render("index", { articles: data });
});

module.exports = app;
