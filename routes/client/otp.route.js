const express = require("express");

const router = express.Router();
const controller = require("../../controller/client/otp.controller");

router.post("/sendOtp", controller.sendOtp);
router.get("/", controller.index);
module.exports = router;