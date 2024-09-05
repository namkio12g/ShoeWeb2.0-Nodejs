const dashboard = require("./dashboard.route");
const systemConfig = require("../../config/system");
const productRouter = require("./product.route");
const orderRouter = require("./order.route");
const categoryRouter = require("./category.route");
const staffRouter = require("./staff.route");
const roleRouter = require("./role.route");
const authorRouter = require("./authorization.route");
const customerRouter = require("./customer.route");
const brandRouter = require("./brand.route");


const fetchData=require("../../public/middleware/fetchdata")





module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixedAdmin;
  app.use(PATH_ADMIN + "/login", authorRouter);
  app.use(fetchData.setSession)
  app.use(fetchData.getRole)
  app.use(fetchData.getStaff)
  app.use(PATH_ADMIN + "/dashboard", dashboard);
  app.use(PATH_ADMIN + "/products", productRouter);
  app.use(PATH_ADMIN + "/orders", orderRouter);
  app.use(PATH_ADMIN + "/categories", categoryRouter);
  app.use(PATH_ADMIN + "/brands", brandRouter);
  app.use(PATH_ADMIN + "/staffs", staffRouter);
  app.use(PATH_ADMIN + "/roles", roleRouter);
  app.use(PATH_ADMIN + "/customers", customerRouter);






};
