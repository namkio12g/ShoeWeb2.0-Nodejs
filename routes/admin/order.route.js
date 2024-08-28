const ex = require("express");
const order = require("../../controller/admin/order.controller");
const Router = ex.Router();
const authMiddle = require("../../public/middleware/auth.middleware")

Router.get("/", authMiddle.checkAuth, order.index);
Router.get("/canceled-orders", authMiddle.checkAuth, order.cancelIndex);

Router.get("/detail/:id", authMiddle.checkAuth, order.detail);
Router.post("/update-status/:id/:status", authMiddle.checkAuth, order.updateStatus);
Router.post("/cancel/:id", authMiddle.checkAuth, order.cancel);

module.exports = Router;
