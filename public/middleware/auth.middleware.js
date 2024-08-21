const staffModel = require("../../model/staff.model")
module.exports.checkAuth = async (req,res,next)=>{
    if(!req.cookies.token|| !req.session.staff){
        res.clearCookie("token");
        res.redirect("/admin/login")
        return;
    }
    else{
        const staff=await staffModel.findOne({token:req.cookies.token})
        if(staff){
            next()
        }
        else{

        res.redirect("/admin/login")

        return;
    }}
}