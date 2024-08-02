const express = require("express");
const router = express.Router();
const controller = require("../../controller/admin/product.controller");
const multer = require("multer");
const storage = require("../../helpers/uploadImage");
const upload = multer({ storage: storage() });
router.get("/", controller.index);
router.patch("/change-status/:status/:id", controller.changeStatus);
router.delete("/delete/:id", controller.delete);

// router.get("/detail/:id", controller.detail);
router.patch("/add", upload.array("thumbnail"), controller.add);
router.get("/edit/:id", controller.edit);
router.patch("/update/:id", upload.single("thumbnail"), controller.update);
router.get("/add-new-product", controller.addNewProduct);

module.exports = router;
