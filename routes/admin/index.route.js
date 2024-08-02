const dashboard = require("./dashboard.route");
const systemConfig = require("../../config/system");
const productRouter = require("./product.route");
const orderRouter = require("./order.route");

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixedAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashboard);
  app.use(PATH_ADMIN + "/products", productRouter);
  app.use(PATH_ADMIN + "/orders", orderRouter);

  // app.use(PATH_ADMIN + "/order", orderRouter);
  // app.use(PATH_ADMIN + "/customers", customerRouter);
};
