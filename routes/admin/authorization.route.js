const ex = require("express");
const controller = require("../../controller/admin/authorization.controller");
const Router = ex.Router();
const validation = require("../../validate/validate")
const multer = require("multer");
const storage = require("../../helpers/uploadImage");
const upload = multer({
    storage: storage()
});
Router.get("/", controller.index);
Router.patch("/signin", controller.signIn);



module.exports = Router;
