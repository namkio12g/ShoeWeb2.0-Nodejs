const express = require("express");

const router = express.Router();
const controller = require("../../controller/client/cart.controller");

router.patch("/update", controller.update);
router.get("/index",controller.index);
router.post("/add", controller.add);
router.delete("/delete", controller.delete);

module.exports = router;
