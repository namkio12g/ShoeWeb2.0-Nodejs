const staffModel = require("../../model/staff.model")
module.exports.checkAuth = async (req,res,next)=>{
    if (!req.session.token) {
        res.redirect("/admin/login")
        return;
    }
    else{
        const staff=await staffModel.findOne({token:req.session.token})
        if(staff){
            next()
        }
        else{

        res.redirect("/admin/login")

        return;
    }}
}