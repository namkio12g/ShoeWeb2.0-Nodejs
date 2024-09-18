const express = require("express");

const router = express.Router();
const controller = require("../../controller/client/cart.controller");

router.patch("/update", controller.update);
router.get("/index",controller.index);
router.post("/add", controller.add);
router.patch("/quickAdd", controller.quickAdd);
router.delete("/delete", controller.delete);
router.post("/delete", controller.delete);


module.exports = router;
