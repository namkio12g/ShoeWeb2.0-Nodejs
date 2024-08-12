const status1 = require("../../helpers/filterStatus");
const getPagination = require("../../helpers/getPagination");
const product = require("../../model/product.model");
const { ObjectID } = require("mongodb");
const categoryModel = require("../../model/category.model")
const createTree = require("../../helpers/categoryTree");
// const product = require("../../models/product.model");
// multi delete 
module.exports.deleteMulti = async (req, res) => {
  try {
    let multiItems = req.body.multiItems.split(',');
    for (let i = 0; i < multiItems.length - 1; i++) {
      let id = multiItems[i]
      console.log(id)
      await product.updateOne({
        _id: id
      }, {
        delete: "true"
      });
        req.flash("success", "Tạo mới thành công");
        res.redirect("back")
    }
  } catch (error) {
        req.flash("error", "Thao tác không thành công!");
  }
}
// multi change stastus
module.exports.changeMultiStatus=async(req,res)=>{
  try {
  let multiItems=req.body.multiItems.split(',');
  for (let i = 0; i < multiItems.length - 1; i++) {
      let temp = multiItems[i].split('-')
      let id=temp[0];
      let status=temp[1];


     await product.updateOne({
       _id: id
     }, {
       status: status
     });
     
    
  }
   req.flash("success", "Thao tác thành công");
   res.redirect("back");
  } catch (error) {
    req.flash("error", "Thao tác không thành công!");

    res.redirect("back");
  }
}
// [GET] /admin/products
module.exports.addNewProductPatch = async (req, res) => {
  try {
     let sizestockArr = req.body.sizestock.split(',')
     let sizestockjson=[]
     let total=0;
     for (let i = 0; i < sizestockArr.length - 1; i++) {
        let temp = sizestockArr[i].split('-')
        total += parseInt(temp[1]);
        sizestockjson.push({
          Value:parseInt(temp[0]),
          stock: parseInt(temp[1]),

        })
     }
     req.body.price = parseInt(req.body.price);
     req.body.discountPercentage = parseInt(req.body.discountPercentage);
     req.body.size=sizestockjson;
     req.body.stock=total;
     req.body.thumbnail=`/uploads/${req.file.filename}`
     const newProduct = new product(req.body);
     await newProduct.save();
      req.flash("success", "Tạo mới thành công");
     res.redirect("back")
  } catch (error) {
    console.log(error)
      req.flash("error", "Không thể tạo mới");
     res.redirect("back")
  }
 
}
module.exports.index = async (req, res) => {
  try {
    
  
  const listOption = status1.statusProduct(req.query);
  let find = {
    delete: "false",
  };

  if (req.query.keyword) {
    // const regex = new RegExp(keyword);
    // find.title = regex;
    find.title = { $regex: req.query.keyword, $options: "i" };
  }

  if(req.query.maxValue && req.query.minValue ){
    find.price = {
      $lte: parseInt(req.query.maxValue),
      $gte: parseInt(req.query.minValue)
    }
  }
  if (req.query.status) {
    find.status = req.query.status;
  }

  // Pagination
  const numberDocument = await product.countDocuments(find);
  const pagination = getPagination(req.query, 5, numberDocument);

  const listproduct = await product
    .find(find)
    .limit(pagination.numberOfProduct)
    .skip(pagination.positionProduct);

  // Detail
  let detailProduct;
  if (req.query.idDetail) {
    detailProduct = listproduct.find(
      (product) => product._id == req.query.idDetail
    );
  }
  // req.flash("info", "Welcome");

  res.render("admin/pages/products/index", {
    title: "pagedashboard",
    message: "This is Home!",
    products: listproduct,
    listOption: listOption,
    keyword: req.query.keyword,
    minValue:req.query.minValue,
    maxValue:req.query.maxValue,
    pagination: pagination,
    detailProduct1: detailProduct,
  });
  } catch (error) {
    console.log(error)
  }
};
// [PATCH] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.params.status;
  await product.updateOne({ _id: id }, { status: status });
  req.flash("success", "Thao tác thành công");
  res.redirect("back");
  
};
// [DELETE] /admin/products/delete/:id
module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await product.updateOne({ _id: id }, { delete: "true" });
  res.redirect("back");
};
// [PUT] /admin/products/add
// module.exports.add = async (req, res) => {
//   let sizearr = [];

//   const size = req.body.size;
//   const stock = req.body.stock;
//   var i = 0;
//   if (Array.isArray(size)) {
//     size.forEach((element) => {
//       sizearr.push({ Value: element, stock: stock[i], _id: null });
//       i = i + 1;
//     });
//   } else {
//     sizearr.push({ Value: size, stock: stock, _id: null });
//   }
//   console.log(req.file);
//   let thumbnail = req.file.thumbnail;
//   if (thumbnail == "") {
//     thumbnail = null;
//   }
//   let image = req.body.images;
//   if (image == "") {
//     image = null;
//   }

//   let newproduct = {
//     title: req.body.title,
//     description: req.body.description,
//     price: parseInt(req.body.price),
//     stock: 100,
//     brand: req.body.brand,
//     category: req.body.category,
//     thumbnail: thumbnail,
//     images: image,
//     size: sizearr,
//     status: req.body.status,
//   };
//   const newProductModel = new product(newproduct);
//   await newProductModel.save((err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("Product added successfully!");
//   });
// };

module.exports.editGet = async (req, res) => {
  try {
    console.log("sssss")
    const productId = req.params.id;
    const productItem = await product.findOne({
      _id: productId
    })
    res.render("admin/pages/products/product-edit",{productItem:productItem});
  } catch (error) {
  req.flash("error", "Truy cập thành công");
    res.redirect("back");
  }
  
}// [PATCH] /admin/update
module.exports.update = async (req, res) => {
  try {
    let sizearr = [];
    const size = req.body.size;
    const stock = req.body.stock;
    var i = 0;
    if (Array.isArray(size)) {
      size.forEach((element) => {
        sizearr.push({ Value: element, stock: stock[i], _id: null });
        i = i + 1;
      });
    } else {
      sizearr.push({ Value: size, stock: stock, _id: null });
    }
    let image = [];
    let thumbnail;
    if (req.files) {
      if (req.files.length > 1) {
        thumbnail = "/images/" + req.files[0].filename;
        req.files.splice(0, 1);
        for (let index = 0; index < req.files.length; index++) {
          image.push("/images/" + req.files[index].filename);
        }
      } else {
        thumbnail = "/images/" + req.files[0].filename;
        image = null;
      }
    } else {
      thumbnail = req.file
        ? "/images/" + req.file.filename
        : req.body.thumbnail;
    }
    let newproduct = {
      title: req.body.title,
      description: req.body.description,
      price: parseInt(req.body.price),
      discountPercentage: parseInt(req.body.discountPercentage),
      stock: 100,
      brand: req.body.brand,
      category: req.body.category,
      thumbnail: thumbnail,
      images: image,
      size: sizearr,
      status: req.body.status,
      gender: req.body.gender,
      updateAt: req.body.updateAt,
    };

    await product.updateOne({ _id: req.params.id }, { $set: newproduct });
    console.log("Product added successfully!");
    res.redirect("back");
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error adding product", error: err });
  }
};
module.exports.addNewProduct = async (req, res) => {
       const categories = await categoryModel.find({delete:"false"}).select('_id title parentId');;
       const tree = createTree(categories)
       console.log(tree)
  res.render("admin/pages/products/product-add", {
    tree: tree
  });
};
