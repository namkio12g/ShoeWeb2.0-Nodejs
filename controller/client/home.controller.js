const product = require("../../model/product.model");

module.exports.index = async (req, res) => {
    let find = {
      delete: "false",
      status:"active"
    };
    const listproduct = await product
      .find(find)
      .limit(8)

  res.render("client/page/home/index.pug", {
    products:listproduct
  });
};
