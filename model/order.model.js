const mongoose = require("mongoose");
const couppon = require("./couppon.model");

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      required: false,
    },
    priceTotal: {
      type: Number,
      required: true,
    },
    quantityTotal: {
      type: Number,
      required: true,
    },
    productArray: [
      {
        productId: {
          type: String,
          require: true,
        },
        thumbnail:{
          type: String,
        },
        name: {
          type: String,
        },
        total: {
          type: String,
        },
        quantity: {
          type: Number,
          require: true,
        },
        size: {
          type: String,
          require: true,
        },
      },
    ],
    payMethod: {
      type: String,
      default:"thanh toán bằng tiền mặt",
    },
    coupponTotal:{
      type:Number
    },
    date: {
      type: Date,
      default:Date.now()
    },
    address: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    status: {
      type:Number,
      default: 1,
    },
    delete: {
      type: String,
      default: "false",
    },
    editedInfo:{
      editedBy:{
        type:String,
        default:""
      },
      editedAt:{
        type:Date,
        default:Date.now()
      }

    }
  },
  { versionKey: false }
);
orderSchema.virtual('formattedDate').get(function () {
  let newDate = new Date(this.date);
  return newDate.toISOString().split('T')[0];
});
orderSchema.virtual('formattedDateEdit').get(function () {
  let newDate = new Date(this.editedInfo.editedAt);
  return newDate.toISOString().split('T')[0];
});
orderSchema.set('toJSON', {
  virtuals: true
});
orderSchema.set('toObject', {
  virtuals: true
});
const order = mongoose.model("order", orderSchema, "orders");

module.exports = order;
