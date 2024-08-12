const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title:String,
    thumbnail: {
        type: String,
        default: ""
    },
    position:Number,
    parentId:{
        type:String,
        default:""
    },
    description:{
        type: String,
            default: ""
    },
    delete:{
      type:Boolean ,
          default: false
    },
    status:{
        type: String,
            default: "active"
    }


});
const category = mongoose.model("category", categorySchema, "categories");

module.exports = category;
