const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    console.log(process.env.DATABASE_URL);
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connect Success");
  } catch (error) {
    console.log("Connect error");
  }
};
