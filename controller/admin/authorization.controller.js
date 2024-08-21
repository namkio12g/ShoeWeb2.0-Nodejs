const staffModel = require("../../model/staff.model")
const status1 = require("../../helpers/filterStatus");
const system = require("../../config/system.js");

const getPagination = require("../../helpers/getPagination");
const bcrypt = require("bcrypt")

module.exports.signIn = async (req, res) => {
    try {
        
             const salt = await bcrypt.genSalt(parseInt(process.env.SALTROUNDS))
            const staff=await staffModel.findOne({email:req.body.email,delete:false})
            if(!staff){
                res.json({
                    success: false,
                    message: "Không tìm thấy tài khoản!"
                })
                return;
            }
            if(staff.status=="inactive"){
                res.json({
                    success: false,
                    message: "Tài khoản đã ngừng hoạt động!"
                })
                return;
            }
            const flag=await bcrypt.compare(req.body.password, staff.password)
            if (!flag) {
                res.json({
                    success: false,
                    message: "Mật khẩu không đúng !"
                })
                return;
            }
            res.cookie("token",staff.token)
            req.session.staff = {
                _id: staff._id,
                role:staff.role,
                name:staff.name
            };
            res.json({
                success: true,
                message: "Đăng nhập thành công!"
            })
    } catch (error) {
        res.json({
            success: false,
            message: "Thao tác thất bại!"
        })
    }
}
// access category view view

module.exports.index = async (req, res) => {
    try {
        if(!req.session.staff) {
            res.render("admin/pages/login/signIn.pug", {});
        }
        else{
        res.redirect("/admin/dashboard")

        }
    } catch (error) {
        console.log(error)
        req.flash("error", "Có lỗi");
        res.redirect("back")
    }
}


// access create category view

module.exports.createGet = async (req, res) => {

    res.render("admin/pages/permission/createRole.pug", {})
}
module.exports.editGet = async (req, res) => {
    try {
        let find = {
            delete: "false"
        };
        const categories = await categoryModel.find(find).select('_id title parentId');
        const item = await categoryModel.findOne({
            _id: req.params.id
        })
        console.log(item)
        const tree = createTree(categories)
        res.render("admin/pages/categories/edit.pug", {
            tree: tree,
            item: item
        })
    } catch (error) {

    }

}



// create new category
module.exports.createPatch = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(parseInt(process.env.SALTROUNDS))
        const secPass = await bcrypt.hash(req.body.originalPassword, salt);
        req.body.thumbnail = `/uploads/${req.file.filename}`;
        req.body.password = secPass;
        req.body.birthDay = new Date(req.body.birthDay)
        const newItem = new staffModel(req.body)
        newItem.save()
        req.flash("success", "Tạo mới thành công");
        res.redirect("back")
    } catch (error) {
        console.log(error)
        // req.flash("error", "Không thể tạo mới");
        // res.redirect("back")

    }
}