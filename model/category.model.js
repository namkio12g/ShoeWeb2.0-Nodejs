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

    }


});
const category = mongoose.model("category", categorySchema, "categories");

module.exports = category;
