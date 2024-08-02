const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
            required: true,
    },
       userId: {
           type: String,
           required: true,
       },
          staff: {
              type: String,
              default:"1"
              
          },
       verified: {
           type: String,
            default: "false"
          
       },
       delete: {
           type: String,
           default: "false"

       },
       couppons:{
        type:[
            {
             
                _id:{
                    type:String},
                quantity:{
                    type:Number}
            }
        ]
       }
       
});
const account = mongoose.model("account", accountSchema, "accounts");

module.exports = account;
