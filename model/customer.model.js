const mongoose=require("mongoose")
const customerSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},

birthDay:{
    type:Date,
},
gender: {
    type: String,

},
addresses:{
    type:[
        {
            name:{
                type:String
            },
           location:{
            type:String
           }, 
           defaultSetting:
            {
                type:String,
                default:"false"
            }
        }
    ]

},
score:{
    type:Number,
    default:0
},
dateCreated:{
    type:String,
    default:Date.now()
  
},
phoneNumbers:{
    type:String,
    required:true
},
citizenId:{
    type:String,
    default: ""
  
},
email:{
    type:String,
    required:true
},
score:{
    type:Number,
    default:0
},
status:{
 type:String,
 default:"active"
},
delete:{
    type:String,
    default:"false"
},
});
customerSchema.methods.formatBirthDay = function () {
    if (!this.birthDay) return null;

    const month = this.birthDay.getMonth() + 1; // Months are zero-based
    const day = this.birthDay.getDate();
    const year = this.birthDay.getFullYear();

    // Ensure month and day are always two digits
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedMonth}/${formattedDay}/${year}`;
};
const customer=mongoose.model("customer",customerSchema,"customers");
module.exports=customer;

