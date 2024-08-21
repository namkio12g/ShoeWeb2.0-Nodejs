const ex = require("express");
const controller = require("../../controller/admin/role.controller");
const Router = ex.Router();
const validation=require("../../validate/validate")
const authMiddle = require("../../public/middleware/auth.middleware")

Router.get("/", authMiddle.checkAuth, controller.index);
Router.get("/add-new-role", authMiddle.checkAuth,controller.createGet);
Router.patch("/change-permissions", authMiddle.checkAuth, controller.changePermissions);
// Router.delete("/delete", controller.delete);
// Router.delete("/delete-multi", controller.deleteMulti);
// Router.patch("/change-status",controller.changeStatus)
// Router.patch("/change-multi-status", controller.changeMultiStatus)


Router.post("/add-new-role", authMiddle.checkAuth, validation.validateRole, controller.createPatch);


module.exports = Router;
