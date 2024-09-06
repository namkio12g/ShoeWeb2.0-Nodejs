const roleModel = require("../../model/role.model")
const staffModel = require("../../model/staff.model")
const jwt = require("jsonwebtoken");
module.exports.setSession = async (req, res, next) => {
    if(!req.session.staff){
        if(req.cookies.token)
        {
            jwt.verify(req.cookies.token, process.env.JWTSECRETKEY, (err, decoded) => {
                        if (err) {
                            req.session.destroy(err => {
                                if (err) {
                                    return res.send('Error logging out.');
                                }
                            })
                            console.log(err)
                            res.redirect("/admin/login")
                            return


                        } else {
                             req.session.staff = {
                                 _id: decoded._id,
                                 role:decoded.role,
                             };
                        }});
        }
        else{
            res.redirect("/admin/login/")
        }
    }
    next()

}
module.exports.getStaff = async (req, res, next) => {
    try {
        if (req.session.staff._id) {

            const staff = await staffModel.findOne({
                _id: req.session.staff._id,
          
            })

            if (staff) {
                res.locals.staff = {
                    name: staff.name,
                }
            }

        }
    } catch (error) {}
    next()

}
module.exports.getRole = async (req, res, next) => {
    try {
        if (req.session.staff.role) {

            const role = await roleModel.findOne({
                _id: req.session.staff.role,
                delete: false,
                status: "active"
            })

            if (role) {
                res.locals.role = {
                    title: role.title,
                    permissions: role.permissions
                }
            }

        }
    } catch (error) {}
    next()

}