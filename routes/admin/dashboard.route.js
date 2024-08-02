const ex = require("express");
const dashboard = require("../../controller/admin/dashboard.controller");
const Router = ex.Router();

Router.get("/", dashboard.index);
module.exports = Router;
