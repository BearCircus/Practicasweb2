//initialize the router
const routes = require("express").Router();
//imports
const indexNoticias = require("./noticias");
//endpoints
routes.use("/noticias", indexNoticias);

module.exports = routes;
