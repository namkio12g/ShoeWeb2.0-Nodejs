const express = require("express");
const router = express.Router();
const controller = require("../../controller/client/user.controller");

router.get("/", controller.index);
router.get("/address", controller.address);
router.post("/addAddress", controller.addAddress);
router.post("/update", controller.updateAddress);
router.patch("/setDefault", controller.setDefault);
router.get("/orders", controller.orders);



module.exports = router;
