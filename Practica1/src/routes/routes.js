//initialize the router
const routes = require("express").Router();
//imports
const indexNoticias = require("./noticias");

routes.use("/noticias", indexNoticias);

module.exports = routes;
