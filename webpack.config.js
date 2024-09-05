const path = require("path");
const category = require("./model/category.model");

module.exports = {
  entry: {
    main: "./public/js/admin/main.admin.js",
    product: "./public/js/admin/pages/products/product.admin.js",
    product_add: "./public/js/admin/pages/products/product.add.admin.js",
    product_client: "./public/js/client/pages/products/product.client.js",
    customer_admin: "./public/js/admin/pages/customers/customer.admin.js",
    login_admin: "./public/js/admin/login.js",
    product_client_detail:
      "./public/js/client/pages/products/product-detail.js",
    categoryIndex_admin: "./public/js/admin/pages/category/index.js",
    brandIndex_admin: "./public/js/admin/pages/brand/index.js",

    permissions_admin: "./public/js/admin/pages/permissions/permission.js",
    home_client: "./public/js/client/pages/home/home.js",
    order: "./public/js/admin/pages/orders/order.admin.js",
    cart: "./public/js/client/pages/cart.client.js",
    header: "./public/js/client/header.client.js",
    login: "./public/js/client/login.js",
    verification: "./public/js/client/verification.js",
    addressPageJs: "./public/js/client/pages/userInfo/addressPage.js",
    profile: "./public/js/client/pages/userInfo/profile.js",
    default_client: "./public/js/client/default.client.js"



  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "development",
};
