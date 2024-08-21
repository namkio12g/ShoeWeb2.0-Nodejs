const ex = require("express");
const authMiddle=require("../../public/middleware/auth.middleware")
const dashboard = require("../../controller/admin/dashboard.controller");
const Router = ex.Router();

Router.get("/",authMiddle.checkAuth,dashboard.index);
module.exports = Router;
