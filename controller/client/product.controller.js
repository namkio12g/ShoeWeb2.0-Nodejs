const productModel = require("../../model/product.model");
const categoryModel = require("../../model/category.model");
const brandModel = require("../../model/brand.model");
const mongoose = require('mongoose');
const getPagination = require("../../helpers/getPagination");
// getProductQuickView
module.exports.getProductQuickView = async (req, res) => {
  try {
    const id = req.body.id;

    const product =await productModel.findOne({
      _id: id
    });
    if(product){
      let newProduct={};
      newProduct.price = product.priceAfterDiscountFormatted;
      newProduct.thumbnail = product.thumbnail;
      newProduct.title = product.title;
      res.status(200).json({
        product: newProduct,
        size:product.size
      });
    }
    else{
      res.status(404).json({
        success: false,
        message: "This email is already registered!"
      });
    }
  } catch (error) {
    console.log(error)

    res.status(404).json({
      success: false,
      message: "This email is already registered!"
    });
  }
   
}
// [GET] /products
module.exports.index = async (req, res) => {
  // const listOption = listOption1(req.query);
  let find = {
    delete: "false",
  };
  let listRangePrice = [
    {
      text: "0-500000",
      value: "0-500000",
      id: "rangePrice1",
    },
    {
      text: "500000-1000000",
      value: "500000-1000000",
      id: "rangePrice2",
    },
    {
      text: "1000000-5000000",
      value: "1000000-5000000",
      id: "rangePrice3",
    },
    {
      text: "6000000",
      value: "6000000",
      id: "rangePrice4",
    },
  ];
  var listRange;

  if (req.query.range) {
    listRange = req.query.range.split("-");
    const listRangeInt = listRange.map((item) => {
      return parseInt(item);
    });
    find.price = { $gte: listRange[0], $lte: listRange[1] };
  }
  console.log(find)
  const numberDocument = await productModel.countDocuments(find);
  const pagination = getPagination(req.query, 8, numberDocument);
  const listproduct = await productModel
    .find(find)
    .limit(pagination.numberOfProduct)
    .skip(pagination.positionProduct);

 
  let listRouter = [
    { title: "Home > ", route: "/" },
    { title: "Products", route: "/products" },
  ];

  // const
  res.render("client/page/productModel/index", {
    title: "Trang Chủ > Products >",
    message: "This is productModel page!", 
    products: listproduct,
    listRoute: listRouter,
    pagination: pagination,
    listRangePrice: listRangePrice,
    rangePrice: req.query.range,
  });
};
// [GET] /products/detail/:id
module.exports.detailProduct = async (req, res) => {
  try{
  const identifier = req.params.identifier;
  console.log(identifier)
  const isObjectId = mongoose.Types.ObjectId.isValid(identifier);
  const productDetail = isObjectId 
      ?await productModel.findById(identifier) 
      :await productModel.findOne({
        slug: identifier
      });
  console.log(productDetail)
  const category = await categoryModel.findOne({
    _id: productDetail.category
  });
    const brand = await brandModel.findOne({
      _id: productDetail.brand
    }).select("title");
  if(category){
    productDetail.categoryTitle=category.title
  }
  if (brand) {
    productDetail.brandTitle = brand.title
  }
  // let listRouter;
  let newProducts;
  // if (productDetail) {
  //   listRouter = [
  //     { title: "Trang Chủ > ", route: "/" },
  //     { title: "products >", route: "/products" },
  //     {
  //       title: productDetail.title,
  //       route: `/products/detail/${productDetail._id}`,
  //     },
  //   ];
  // }

  const listproduct = await productModel.find({category:productDetail.category}).limit(6);
res.render("client/page/productModel/detailProduct", {
    title: "Detail",
    message: "This is productModel detail page !",
    listproduct: listproduct,
    product:productDetail,
  });
   }
   catch(err){
    console.log(err)
    return res.status(404).json({
      message: 'Product not found'
    });
   }
};
