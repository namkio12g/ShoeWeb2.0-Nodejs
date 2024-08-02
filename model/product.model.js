const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    size: {
      type: [
        {
          Value: {
            type: Number,
            default: 0,
          },
          stock: {
            type: Number,
            default: 0,
          },
        },
      ],
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    images: {
      type: [String],
    },
    status: {
      type: String,
      default: "active",
    },
    delete: {
      type: String,
      default: "false",
    },
    gender: {
      type: String,
      default: "unisex",
    },
    updateAt: {
      type: Date,
    },
  },
  { versionKey: false }
);
const product = mongoose.model("product", productSchema, "products");

module.exports = product;
