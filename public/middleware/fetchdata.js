const roleModel = require("../../model/role.model")
const staffModel = require("../../model/staff.model")
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