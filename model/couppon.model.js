const mongoose=require("mongoose")
const coupponSchema=new mongoose.Schema({
    name:{
        type:String
    },
    condition:{
        type:Number
    },
    percent:{
        type:Number
    }
    ,
    quantity:{
        type:Number
    }
});
const couppon=mongoose.model("couppon",coupponSchema,"couppons")
module.exports=couppon
