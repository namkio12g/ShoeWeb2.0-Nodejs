const express = require("express");
const router = express.Router();
const controller = require("../../controller/client/product.controller");

router.get("/", controller.index);
router.post("/getProductQuickView", controller.getProductQuickView);
router.post("/searching", controller.getSearching);

router.get("/detail/:identifier", controller.detailProduct);

module.exports = router;
