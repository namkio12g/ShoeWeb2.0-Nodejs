const productModel = require("../../model/product.model");
const categoryModel = require("../../model/category.model");
const brandModel = require("../../model/brand.model");
const mongoose = require('mongoose');
const getPagination = require("../../helpers/getPagination");
const createTree = require("../../helpers/categoryTree");


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
  try{
  
  let find = {
    delete: "false",
  };
  let category;
  if(req.query.category){
    category = await categoryModel.findOne({
      slug: req.query.category
    });

     const categories = await categoryModel.find({
       delete: false,
       status: "active"
     }).select('_id title parentId thumbnail');;
     const tree = 
     createTree.createTree(categories)
     const categoryFindId = createTree.getSubCategories(tree, category._id)
    find.category = {
      $in: categoryFindId
    }
   }
   
  const numberDocument = await productModel.countDocuments(find);
  const pagination = getPagination(req.query, 9, numberDocument);
  const listproduct = await productModel
    .find(find)
    .limit(pagination.numberOfProduct)
    .skip(pagination.positionProduct);

 
  let listRouter = [
    { title: "Home > ", route: "/" },
    { title: "Products", route: "/products" },
  ];

  // const
  res.render("client/page/product/index", {
    title: "Trang Chủ > Products >",
    message: "This is product page!", 
    products: listproduct,
    listRoute: listRouter,
    pagination: pagination,
    rangePrice: req.query.range,
      filter: {
        category: category
      }
  });
}
  catch(err){
    console.log(err)
res.render("client/page/error/404Error", {})
  }
};
// [GET] /products/detail/:id
module.exports.detailProduct = async (req, res) => {
  try{
  const identifier = req.params.identifier;
  const isObjectId = mongoose.Types.ObjectId.isValid(identifier);
  const productDetail = isObjectId 
      ?await productModel.findById(identifier) 
      :await productModel.findOne({
        slug: identifier
      });
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
res.render("client/page/product/detailProduct", {
    title: "Detail",
    message: "This is productdetail page !",
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
