const express = require("express");
const router = express.Router();
const controller = require("../../controller/admin/product.controller");
const validate = require("../../validate/validate")
const multer = require("multer");
const storage = require("../../helpers/uploadImage");
const upload = multer({
    storage: storage()
});
const authMiddle = require("../../public/middleware/auth.middleware")

router.get("/", authMiddle.checkAuth, controller.index);
router.post("/change-status/:status/:id", authMiddle.checkAuth, controller.changeStatus);
router.patch("/change-muilti-status", controller.changeMultiStatus);
router.delete("/delete/:id", authMiddle.checkAuth, controller.delete);
router.delete("/delete-multi", authMiddle.checkAuth, controller.deleteMulti);

// router.get("/detail/:id", controller.detail);
// router.patch("/add",, controller.add);
router.get("/edit/:id", authMiddle.checkAuth, controller.editGet);
router.patch("/update/:id", authMiddle.checkAuth, upload.single("thumbnail"),validate.validateProduct,controller.update);
router.get("/add-new-product", authMiddle.checkAuth, controller.addNewProduct);
router.post("/add-new-product", authMiddle.checkAuth, upload.single("thumbnail"), validate.validateProduct,controller.addNewProductPatch);


module.exports = router;
