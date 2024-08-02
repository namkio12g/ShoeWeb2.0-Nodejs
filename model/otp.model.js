const mongoose = require("mongoose")
const otpSchema= new mongoose.Schema({
    userId:{
        type:String,
        required: true

    },
    otp:{
        type:String,
        required: true

    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    expiredDate:{
        type: Date,
        default: () => Date.now() + 5 * 60 * 1000
    }

    
});
const otp=mongoose.model("otp",otpSchema,"otps");
module.exports=otp;