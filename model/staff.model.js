const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
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
        type: String,
        default: "false"

    },


});
const staff = mongoose.model("staff", staffSchema, "staffs");

module.exports = staff;
