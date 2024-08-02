const ex = require("express");
const order = require("../../controller/admin/order.controller");
const Router = ex.Router();
Router.get("/", order.index);
Router.get("/detail/:id", order.detail);
Router.delete("/delete/:id", order.delete);
module.exports = Router;
