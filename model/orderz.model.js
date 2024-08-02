const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const orderItemSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Shoe',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    variant: {
       
        size: {
            type: Number,
            required: true
        }
    },
    quantity: {
        type: Number,
        required: true
    },
    discountTotal:{
        type:Number,
        default:0
    },
    price: {
        type: Number,
        required: true
    } // Price per unit
});

const orderSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    items: [orderItemSchema],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Pending'
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    paymentMethod:{
        type: Number,
        default:0
    },
      delete: {
          type: String,
          default: "false"
      }
});

const Order = mongoose.model('order', orderSchema, "orders");

module.exports = Order;
