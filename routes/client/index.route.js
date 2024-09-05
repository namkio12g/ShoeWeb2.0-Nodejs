const express = require("express");
const home = require("./home.route");
const products = require("./product.route");
const cartRouter = require("./cart.route");
const otpRouter = require("./otp.route.js");
const fetchCart = require("../../controller/client/cart.controller");
const fetchSession = require("../../controller/client/login.controller");
const userRoute=require("./userInfo.route.js")
const loginRouter = require("./login.route");
const orderRouter = require("./order.route");
const fetchData=require("./../../public/middleware/fetchdata.client.js")





module.exports = (app) => {
  app.use(fetchCart.get)
  app.use(fetchData.getBrands)
  app.use(fetchData.getCategories)
  app.use(fetchSession.get) 
  app.use("/", home);
  app.use("/order", orderRouter);
  app.use("/products", products);
  app.use("/cart", cartRouter);
  app.use("/login", loginRouter);
  app.use("/verification", otpRouter);
  app.use("/user", userRoute);

};
