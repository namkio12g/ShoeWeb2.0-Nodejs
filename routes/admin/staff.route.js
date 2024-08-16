const ex = require("express");
const controller = require("../../controller/admin/staff.controller");
const Router = ex.Router();
const validation=require("../../validate/validate")
const multer = require("multer");
const storage = require("../../helpers/uploadImage");
const upload = multer({
    storage: storage()
});
Router.get("/", controller.index);
Router.get("/add-new-staff",controller.createGet);
// Router.get("/edit/:id", controller.editGet);
// Router.delete("/delete", controller.delete);
// Router.delete("/delete-multi", controller.deleteMulti);
// Router.patch("/change-status",controller.changeStatus)
// Router.patch("/change-multi-status", controller.changeMultiStatus)


Router.post("/add-new-staff", upload.single("thumbnail"), validation.validateStaff, controller.createPatch);


module.exports = Router;
