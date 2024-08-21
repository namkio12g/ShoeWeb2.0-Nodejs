const ex = require("express");
const controller = require("../../controller/admin/category.controller");
const Router = ex.Router();
const multer = require("multer");
const validate = require("../../validate/validate")

const storage = require("../../helpers/uploadImage");
const upload = multer({
    storage: storage()
});
const authMiddle = require("../../public/middleware/auth.middleware")

Router.get("/", authMiddle.checkAuth,controller.index);
Router.get("/add-new-category", authMiddle.checkAuth, controller.createGet);
Router.get("/edit/:id", authMiddle.checkAuth, controller.editGet);
Router.delete("/delete", authMiddle.checkAuth, controller.delete);
Router.delete("/delete-multi", authMiddle.checkAuth, controller.deleteMulti);
Router.patch("/change-status", authMiddle.checkAuth, controller.changeStatus)
Router.patch("/change-multi-status", authMiddle.checkAuth, controller.changeMultiStatus)
Router.post("/add-new-category", authMiddle.checkAuth, upload.single("thumbnail"), validate.validateCategory, controller.createPatch);
module.exports = Router;
