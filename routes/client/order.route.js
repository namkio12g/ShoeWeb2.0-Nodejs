const express = require("express")
const route=express.Router()
const controller=require("../../controller/client/order.controller")
route.post("/createOrder",  controller.createOrder)
route.get("/detail/:id", controller.orderDetail)
route.post("/cancel/:id", controller.cancel)
route.post("/orderAgain/:id", controller.orderAgain)




module.exports=route;