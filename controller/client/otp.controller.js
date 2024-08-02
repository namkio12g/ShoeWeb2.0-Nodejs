const otpModel = require("../../model/otp.model")
const nodeMail = require("nodemailer")
const bcrypt = require("bcrypt")
const accountModel = require("../../model/account.model")
const {
    json
} = require("body-parser")
let transporter = nodeMail.createTransport({
    service: 'gmail',
        port: 465,
        secure: true,
    auth: {
        user: "myotpnam123@gmail.com",
        pass: "syvelooalwkssbxm",
    }
});
module.exports.checkOtp= async function checkOtp(code,accountId){
    const otps=await otpModel.find({
        userId:accountId
    })
 
    if(otps.length<=0){
            return "Account record doesnt exist or has been verified already.Please Sign up or Sign in"
    }
    else {
        const { expiredDate }=otps[0];
        const hashCode=otps[0].otp;
        if(expiredDate<Date.now()){
            await otpModel.deleteMany({userId:accountId})
            return "Code has expired. please request again"
        }
        else{
            const validOtp=await bcrypt.compare(code,hashCode)
            if(!validOtp){
                return "invalid  code passed. Check again your inbox."

            }
            else{
                await otpModel.deleteMany({
                    userId: accountId
                })
                return "success"
            }
        }
    }
}
async function sendOtpToEmail(email, code) {
    const mailOptions = {
        from: "THE KING-SHOE WEBSITE",
        to: email,
        subject: "Verified account",
        html: `
      <a href="" style="font-size: 1.4em;color: #00466a;text-decoration:none;font-weight:600">Your Brand</a>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes.</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${code}</h2>
    `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

async function madeOtp(email, userId) {
    let code = `${Math.floor(1000 + Math.random() * 9000)}`;


    try {
        const hashCode = await bcrypt.hash(code, 10);
        const newOtp = new otpModel({
            userId: userId,
            otp: hashCode
        });

        await newOtp.save();
        await sendOtpToEmail(email, code)

    } catch (error) {
        console.log(error)
    }
}

module.exports.sendOtp=async (req,res)=>{
    let email = req.session.user.email
    let accountId = req.session.user.accountID;
    await madeOtp(email, accountId)
}
module.exports.index = async (req, res) => {
    if (req.session.user){
    let reason = req.query.reason;
        if(reason){
            let email = req.session.user.email;
            let accountId = req.session.user.accountID;

            res.render("client/layout/verification.pug", {
                email: email,
                reason:reason,
                accountId: accountId
            });}
        else{
             res.render("client/page/home/index.pug", {
        })
        }
    }
        
    else{
        res.render("client/page/home/index.pug", {

        });

    }
}