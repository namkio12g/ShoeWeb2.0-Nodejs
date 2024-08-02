const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true,
    },
    products: {
        type: [{
            productId: {
                type: String,
            },
            size: {
                type: Number,
            },
            quantity: {
                type: Number,
            },
      
        }, ],
    },
     delete: {
         type: String,
         default: "false"

     },
});
const cart = mongoose.model("cart", cartSchema, "carts");

module.exports = cart;
