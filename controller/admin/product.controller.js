const status1 = require("../../helpers/filterStatus");
const getPagination = require("../../helpers/getPagination");
const product = require("../../model/product.model");
const { ObjectID } = require("mongodb");
const categoryModel = require("../../model/category.model")
const brandModel = require("../../model/brand.model")
const createTree = require("../../helpers/categoryTree");
// const product = require("../../models/product.model");
// multi delete 
module.exports.deleteMulti = async (req, res) => {
  try {
    console.log(error)
    
    let multiItems = req.body.multiItems.split(',');
    for (let i = 0; i < multiItems.length - 1; i++) {
      let id = multiItems[i]
      console.log(id)
      await product.updateOne({
        _id: id
      }, {
        delete: "true", $set: {
          'editedInfo.editedBy': req.session.staff._id,
          'editedInfo.editedAt': Date.now()
        }
      });
        req.flash("success", "Tạo mới thành công");
        res.redirect("back")
    }
  } catch (error) {
    console.log(error)

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
       status: status, $set: {
         'editedInfo.editedBy': req.session.staff._id,
         'editedInfo.editedAt': Date.now()
       }
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
     req.body.thumbnail = `/uploads/${req.files.thumbnail[0].filename}`
     const images=[];
     if(req.files.thumbnails){
      req.files.thumbnails.forEach((image)=>{
        images.push(`/uploads/${image.filename}`)
      })
     }
     req.body.images=images;
     const newProduct = new product(req.body);
     newProduct.createdInfo.createdBy = req.session.staff._id;
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
    
   const categories = await categoryModel.find({
     delete: false,
       status: "active"

   }).select('_id title parentId');;
   
     const brands = await brandModel.find({
       delete: false,
       status:"active"
     }).select('_id title');;
   const tree = createTree.createTree(categories)
  const listOption = status1.statusProduct(req.query);
  let find = {
    delete: "false",
  };

  if (req.query.keyword) {
    // const regex = new RegExp(keyword);
    // find.title = regex;
    find.title = { $regex: req.query.keyword, $options: "i" };
  }
  
  if(req.query.category){
    find.category=req.query.category
  }
  if (req.query.brand) {
    find.brand = req.query.brand
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
  for (let item of listproduct) {
   const category = await categoryModel.findOne({
     _id: item.category
   })
   if (category) {
     item.categoryName = category.title
   }
   
      const brand = await brandModel.findOne({
        _id: item.brand
      })
      if (brand) {
        item.brandName = brand.title;
      }
      else{
        item.brandName="";
      }
  }
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
    categorySelected: req.query.category,
    brandSelected:req.query.brand,
    pagination: pagination,
    detailProduct1: detailProduct,
    tree:tree,
    brands:brands
  });
  } catch (error) {
    console.log(error)
  }
};
// [PATCH] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.params.status;
  await product.updateOne({
    _id: id
  }, {
    status: status,
    $set: {
      'editedInfo.editedBy': req.session.staff._id,
      'editedInfo.editedAt': Date.now()
    }
  });
  req.flash("success", "Thao tác thành công");
  res.redirect("back");
  
};
// [DELETE] /admin/products/delete/:id
module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await product.updateOne({
    _id: id
  }, {
    delete: "true",
    $set: {
      'editedInfo.editedBy': req.session.staff._id,
      'editedInfo.editedAt': Date.now()
    }
  });
  res.redirect("back");
};

module.exports.editGet = async (req, res) => {
  try {
    const categories = await categoryModel.find({
      delete: false
    }).select('_id title parentId');;
   const brands = await brandModel.find({
     delete: false
   }).select('_id title');;
    const tree = createTree.createTree(categories)
    const productId = req.params.id;
    const productItem = await product.findOne({
      _id: productId
    })
    res.render("admin/pages/products/product-edit",{productItem:productItem,tree:tree,brands:brands});
  } catch (error) {
  req.flash("error", "Truy cập không thành công");
    res.redirect("back");
  }
  
}// [PATCH] /admin/update
module.exports.update = async (req, res) => {
  try {
       let sizestockArr = req.body.sizestock.split(',')
       let sizestockjson = []
       let total = 0;
       for (let i = 0; i < sizestockArr.length - 1; i++) {
         let temp = sizestockArr[i].split('-')
         total += parseInt(temp[1]);
         sizestockjson.push({
           Value: parseInt(temp[0]),
           stock: parseInt(temp[1]),

         })
       }
        let newproduct = {
          title: req.body.title,
          description: req.body.description,
          price: parseInt(req.body.price),
          discountPercentage: parseInt(req.body.discountPercentage),
          stock: total,
          brand: req.body.brand,
          category: req.body.category,
          size: sizestockjson,
          status: req.body.status,
          gender: req.body.gender,
        };
    if (req.files) {
      if(req.files.thumbnail){
      newproduct.thumbnail = `/uploads/${req.files.thumbnail[0].filename}`
      }
      if (req.files.thumbnails) {
      const images = [];
        req.files.thumbnails.forEach((image) => {
          images.push(`/uploads/${image.filename}`)
        })
        newproduct.images = images;
    }
    }
   

    await product.updateOne({ _id: req.params.id }, { $set: newproduct, 
                'editedInfo.editedBy': req.session.staff._id,
                'editedInfo.editedAt': Date.now()
             });
      req.flash("success", "Cập nhật thành công");
    res.redirect("/admin/products");
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error adding product", error: err });
  }
};
module.exports.addNewProduct = async (req, res) => {
       const categories = await categoryModel.find({delete:false}).select('_id title parentId');
         const brands = await brandModel.find({
           delete: false
         }).select('_id title');;
       const tree = createTree.createTree(categories);
  res.render("admin/pages/products/product-add", {
    tree: tree,brands:brands
  });
};
