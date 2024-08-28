const product = require("../../model/product.model");
const getPagination = require("../../helpers/getPagination");

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
  const numberDocument = await product.countDocuments(find);
  const pagination = getPagination(req.query, 8, numberDocument);
  const listproduct = await product
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
    listRangePrice: listRangePrice,
    rangePrice: req.query.range,
  });
};
// [GET] /products/detail/:id
module.exports.detailProduct = async (req, res) => {
  const id = req.params.id;
  const listproduct = await product.find({ _id: id });
  let listRouter;
  let newProducts;
  if (listproduct) {
    listRouter = [
      { title: "Trang Chủ > ", route: "/" },
      { title: "products >", route: "/products" },
      {
        title: listproduct[0].title,
        route: `/products/detail/${listproduct[0]._id}`,
      },
    ];
    newProducts = listproduct.map((item) => {
      item.priceNew = (
        (item.price * (100 - item.discountPercentage)) /
        100
      ).toFixed(0);
      return item;
    });
  }

  const listproduct2 = await product.find().limit(6);
  let newProducts2;
  if (listproduct2) {
    newProducts2 = listproduct2.map((item) => {
      item.priceNew = (
        (item.price * (100 - item.discountPercentage)) /
        100
      ).toFixed(0);
      return item;
    });
  }
  res.render("client/page/product/detailProduct", {
    title: "Detail",
    message: "This is product detail page !",
    listRoute: listRouter,
    listproduct: newProducts[0],
    product: newProducts2,
  });
};
