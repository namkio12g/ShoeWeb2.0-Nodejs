const express = require("express");
const router = express.Router();
const controller = require("../../controller/admin/product.controller");
const multer = require("multer");
const storage = require("../../helpers/uploadImage");
const upload = multer({
    storage: storage()
});
router.get("/", controller.index);
router.post("/change-status/:status/:id", controller.changeStatus);
router.patch("/change-muilti-status", controller.changeMultiStatus);
router.delete("/delete/:id", controller.delete);
router.delete("/delete-multi", controller.deleteMulti);

// router.get("/detail/:id", controller.detail);
// router.patch("/add",, controller.add);
router.get("/edit/:id", controller.editGet);
router.patch("/update/:id", upload.single("thumbnail"), controller.update);
router.get("/add-new-product", controller.addNewProduct);
router.post("/add-new-product", upload.single("thumbnail"), controller.addNewProductPatch);


module.exports = router;
