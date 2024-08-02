const express = require("express");
const home = require("../../controller/client/home.controller");
const Router = express.Router();
Router.get("/", home.index);
module.exports = Router;
