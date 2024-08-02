const accountModel = require("../../model/account.model")
const cartModel = require("../../model/cart.model")
const customer = require("../../model/customer.model")
const customerModel = require("../../model/customer.model")
const otpController = require("../client/otp.controller")

module.exports.verified = async (req, res) => {
    const {
        accountId,
        code
    }=req.body
    const result=await otpController.checkOtp(code,accountId)
    if(result==="success"){
        await accountModel.findOneAndUpdate({
            _id: accountId,},
            {verified: "true"
        })
        res.json({
            success:true,
            message:"Verify success!"
        })
    }
    else{
         res.json({
             success: false,
             message: `${result}`
         })
    }
}
module.exports.signUp = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        gender,
        birthday,
        password,
        rePassword
    } = req.body;

    const userEmailChecked = await customerModel.findOne({
        email: email,
    })
    const userPhoneChecked = await customerModel.findOne({
        phoneNumbers: phoneNumber,
    })

    if (!userEmailChecked) {

        if (!userPhoneChecked) {
            let customer = {
                name: lastName + " " + firstName,
                phoneNumbers: phoneNumber,
                email: email,
                birthDay:birthday,
                gender:gender,
            }
            let newCustomerModel = new customerModel(customer);
            await newCustomerModel.save()
            customer = await customerModel.findOne({
                email: email,
            })
            let cart = {
                customerId: customer._id
            }
            let account = {
                userId: customer._id,
                password: password,
                email: email

            }
            await new cartModel(cart).save()
            const newSaveAccount = await new accountModel(account).save()
            req.session.user = {
                _id: customer._id,
                email: customer.email,
                accountID: newSaveAccount._id,
                phoneNumbers: customer.phoneNumbers,

            };
            res.json({
                success: true,
                accountId: newSaveAccount._id,
                message: "Registered success!"
            });


        } else {
            res.json({
                success: false,
                message: "This phone number is already registered!"
            });
        }
    } else {
        res.json({
            success: false,
            message: "This email is already registered!"
        });
    }




}
module.exports.index =(req, res) => {
    res.render("client/page/login/signIn.pug",{})
}
module.exports.index_signUp = (req, res) => {
    res.render("client/page/login/signUp.pug", {})
}
module.exports.get = async (req, res, next) => {


res.locals.user = req.session.user;
next();
};
module.exports.signIn= async(req,res)=>{
    const {
        email,
        password
    } = req.body;
    
    const account=await accountModel.findOne({
        email:email,
        password:password
    })

    if(account){
        let customer = await customerModel.findOne({
            email: email,
        })
        req.session.user = {
            _id: customer._id,
            email:customer.email,
            accountID: account._id,
            phoneNumbers: customer.phoneNumbers,

        };

        res.json({
            success: true,
            message: "Login successful!"
        });
    }
    else{
        res.json({
            success: false,
            message: "Login fain!"
        });
    }
}

module.exports.signOut = (req, res) => {
req.session.destroy(err => {
    if (err) {
        return res.send('Error logging out.');
    }
    res.redirect('/');
});
}
