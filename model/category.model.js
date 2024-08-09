const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title:String,
    image: {
        type: String,
        default: ""
    },
    parrentId:{
        type:String,
        default:""
    },
    description:{
        type: String,
            default: ""
    }


});
const category = mongoose.model("category", categorySchema, "categories");

module.exports = category;
