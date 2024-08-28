const order = require("../../model/order.model");
const customerModel = require("../../model/customer.model");
const staffModel = require("../../model/staff.model");
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
    find.phoneNumber = { $regex: req.query.keyword, $options: "i" };
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
    for (let item of listproduct){
       const customer = await customerModel.findById(item.customerId)
       item.nameCustomer = customer.name
    }

    // req.flash("info", "Welcome");
  res.render("admin/pages/order/index", {
    title: "order-page",
    message: "This is Home!",
    orders: listproduct,
    status: status,
    keyword: req.query.keyword,
    pagination: pagination,
  });
};
// [DELETE] /admin/orders/delete/:id
module.exports.cancel = async (req, res) => {
  try{
  const id = req.params.id;
  await order.updateOne({
    _id: id
  }, {
    status: 5,
    $set: {
      'editedInfo.editedBy': req.session.staff._id,
      'editedInfo.editedAt': Date.now()
    }
  });
  req.flash("success","Đã hủy bỏ thành công đơn hàng")
  res.redirect("back");
  }
  catch(err){
    console.log(err)
req.flash("error", "Thao tác gặp lỗi")
res.redirect("back");
  }
};
module.exports.cancelIndex = async (req, res) => {
  try{
   let find = {
     status:5
   };
   if (req.query.keyword) {
     find.phoneNumber = {
       $regex: req.query.keyword,
       $options: "i"
     };
   }

   const numberDocument = await order.countDocuments(find);
   // Pagination

   const pagination = getPagination(req.query, 5, numberDocument);
  console.log("12345")
   const listproduct = await order
     .find(find)
     .limit(pagination.numberOfProduct)
     .skip(pagination.positionProduct);
   for (let item of listproduct) {
     const customer = await customerModel.findById(item.customerId)
     item.nameCustomer = customer.name
   }

 
   // req.flash("info", "Welcome");
   res.render("admin/pages/order/cancelPage", {
     title: "order-page",
     message: "This is Home!",
     orders: listproduct,
     keyword: req.query.keyword,
     pagination: pagination,
   });

  }
        catch (err) {
          console.log(err)
        }
};
module.exports.updateStatus = async (req, res) => {
  try {
  const id = req.params.id;
  await order.updateOne({
    _id: id
  }, {
    status: parseInt(req.params.status) + 1,
    $set: {
      'editedInfo.editedBy': req.session.staff._id,
      'editedInfo.editedAt': Date.now()
    }
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
  const customer = await customerModel.findById(listOrders.customerId)
  const staff = await staffModel.findById(listOrders.editedInfo.editedBy)
  if(customer)
    listOrders.nameCustomer = customer.name
  if(staff)
    listOrders.staffName = staff.name
  res.render("admin/pages/order/detailOrder", {
    order: listOrders,
  });
};
