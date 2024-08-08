const mongoose = require("mongoose");
var slug = require('mongoose-slug-generator')
mongoose.plugin(slug);
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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
      default: ""

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
    slug:{
      type:String,
      slug:"title",unique:true
    },
    createAt:{
      type:{
        createBy:{
          type:String,
          default:""
        },
        createTime:{
          type:Date,
          default:Date.now()
        }
      }
    },
    updateAt: {
      type: Date,
    },
  },
  { versionKey: false }
);
const product = mongoose.model("product", productSchema, "products");

module.exports = product;
