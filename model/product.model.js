const mongoose = require("mongoose");
var slug = require('mongoose-slug-generator');
const type = require("mongoose/lib/schema/operators/type");
mongoose.plugin(slug);
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    images:[{
      type:String
    }],
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    position:Number,
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
    editedInfo: {
        editedAt: {
          type: String,
          default: ""
        },
        editedBy: {
          type: Date,
          default: Date.now()
        }

      },
      deleteInfo: {
        deleteAt: {
          type: String,
          default: ""
        },
        deleteBy: {
          type: Date,
          default: Date.now()
        }

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
     type: {
       updateBy: {
         type: String,
         default: ""
       },
       updateTime: {
         type: Date,
         default: Date.now()
       }
     }
    },
  },
  { versionKey: false }
);
productSchema.virtual('priceFormatted').get(function () {
 return new Intl.NumberFormat('vi-VN', {
   style: 'currency',
   currency: 'VND'
 }).format(this.price);
});
productSchema.virtual('priceAfterDiscountFormatted').get(function () {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(this.price*(100-this.discountPercentage)/100);
});
const product = mongoose.model("product", productSchema, "products");

module.exports = product;
