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
    if(req.query.status=="0"){
      find.status = {
        $lt: 4
      };
    }
    else{
    find.status = parseInt(req.query.status);
    }
  }
  else{
    find.status = {
      $lt: 4
    };
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
module.exports.cancel = async (req, res) => {
  try{
  const id = req.params.id;
  await order.updateOne({ _id: id }, { status:5});
  req.flash("success","Đã hủy bỏ thành công đơn hàng")
  res.redirect("back");
  }
  catch(err){
req.flash("error", "Thao tác gặp lỗi")
res.redirect("back");
  }
};
module.exports.updateStatus = async (req, res) => {
  try {
  const id = req.params.id;
  await order.updateOne({
    _id: id
  }, {
    status: parseInt(req.params.status) + 1
  });
  req.flash("success", "Đã Cập nhật trạng thái thành công thành công đơn hàng")
  res.redirect("back");
  } catch (err) {
    req.flash("error", "Thao tác gặp lỗi")
    res.redirect("back");
  }
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
