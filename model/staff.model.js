const mongoose = require("mongoose");
function rand(){
    return Math.random().toString(36).substr(2)
}
const staffSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    token:{
        type:String,
        default: rand()+rand()
    },
    name: {
            type: String,
            required: true
        },

        birthDay: {
            type: Date,
        },
        gender: {
            type: String,

        },
        phoneNumbers: {
            type: String,
            required: true
        },
    password: {
        type: String,
        required: true,
    },
    role:{
        type:String
    },
    status: {
        type: String,
        default: "active"
    },
    delete: {
        type: Boolean,
        default: false

    },


});
const staff = mongoose.model("staff", staffSchema, "staffs");

module.exports = staff;
