const jwt = require("jsonwebtoken");
const staffModel = require("../../model/staff.model")
module.exports.checkAuth = async (req,res,next)=>{
    const token = req.cookies.token
    if(token){
    jwt.verify(token, process.env.JWTSECRETKEY, (err, decoded) => {
        if (err) {
            req.session.destroy(err => {
                        if (err) {
                            return res.send('Error logging out.');
                        }})
            res.redirect("/admin/login")
            

        } 
        else {
            // req.session.staff=decoded
            next()

        }
    });
}
            else{
                next()
            }
}