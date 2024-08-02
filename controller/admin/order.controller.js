const order = require("../../model/order.model");
const getPagination = require("../../helpers/getPagination");
const status1 = require("../../helpers/filterStatus");

// [GET] /admin/orders
module.exports.index = async (req, res) => {
  const status = status1.statusOrder(req.query);
  let find = {
    delete: "false",
  };

  if (req.query.keyword) {
    // const regex = new RegExp(keyword);
    // find.title = regex;
    find.customerID = { $regex: req.query.keyword, $options: "i" };
  }
  if (req.query.status) {
    find.status = req.query.status;
  }

  const numberDocument = await order.countDocuments(find);
  // Pagination

  const pagination = getPagination(req.query, 5, numberDocument);

  const listproduct = await order
    .find(find)
    .limit(pagination.numberOfProduct)
    .skip(pagination.positionProduct);

  // req.flash("info", "Welcome");
  res.render("admin/pages/order/index", {
    title: "order-page",
    message: "This is Home!",
    orders: listproduct,
    status: status,
    // keyword: req.query.keyword,
    pagination: pagination,
  });
};
// [DELETE] /admin/orders/delete/:id
module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await order.updateOne({ _id: id }, { status: "Đã Xóa" }, { delete: "true" });
  res.redirect("back");
};
// [GET] /admin/orders/detail/:id
module.exports.detail = async (req, res) => {
  let list = {};
  if (req.params.id) {
    list._id = req.params.id;
  }
  const listOrders = await order.findOne(list);
  res.render("admin/pages/order/detailOrder", {
    order: listOrders,
  });
};
