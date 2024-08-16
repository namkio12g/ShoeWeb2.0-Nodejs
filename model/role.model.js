const mongoose = require("mongoose");

function rand() {
    return Math.random().toString(36).substr(2)
}
const roleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:String,
    permissions:[
        {
            type:String
        }
    ],
    status:String,
    delete:{
        type:Boolean,
        default:false
    }

});
const role = mongoose.model("role", roleSchema, "roles");

module.exports = role;
