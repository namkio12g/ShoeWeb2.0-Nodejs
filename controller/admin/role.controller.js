const roleModel=require("../../model/role.model")
const status1 = require("../../helpers/filterStatus");
const getPagination = require("../../helpers/getPagination");
const bcrypt = require("bcrypt");

module.exports.changeStatus = async (req, res) => {
    try {
        const id = req.body.id;
        const status = req.body.newStatus;
        await categoryModel.updateOne({
            _id: id
        }, {
            status: status
        });
        
        req.flash("success", "Thao tác thành công");
        res.redirect("back");
    } catch (error) {
        req.flash("error", "Thao tác không thành công");
        res.redirect("back");
    }
    
    

};
// multi change stastus
module.exports.changeMultiStatus = async (req, res) => {
    try {
        let multiItems = req.body.multiItems.split(',');
        for (let i = 0; i < multiItems.length - 1; i++) {
            let temp = multiItems[i].split('-')
            let id = temp[0];
            let status = temp[1];
            console.log(id)
            console.log(status)

            await categoryModel.updateOne({
                _id: id
            }, {
                status: status
            });


        }
        req.flash("success", "Thao tác thành công");
        res.redirect("back");
    } catch (error) {
        req.flash("error", "Thao tác không thành công!");

        res.redirect("back");
    }
}
// delete 
module.exports.delete = async (req, res) => {
    try {
        const id = req.body.id;
        await categoryModel.updateOne({
            _id: id
        }, {
            delete: "true"
        });
        req.flash("success", "Tạo mới thành công");

        res.redirect("back");
    } catch (error) {
        
    }
    
};
// multi delete 
module.exports.changePermissions = async (req, res) => {
    try {
    console.log("122")

        const roles=req.body.roles;
        roles.forEach(async (element) => {
            await roleModel.updateOne({_id:element.id},{permissions:element.permissions})
        });
    console.log("123")

         req.flash("success", "Cập nhật thành công");
        res.redirect("back");

    } catch (error) {
    console.log("124")

        req.flash("error", "Cập nhật không thành công!");
        res.redirect("back");

    }
}
// access category view view

module.exports.index=async(req,res)=>{
    try{
        const roles=await roleModel.find({delete:false})
        res.render("admin/pages/permission/index.pug", {
            roles:roles
    });
}
catch(error){
    console.log(error)
      req.flash("error", "Có lỗi");
      res.redirect("back")
}
}


// access create category view

module.exports.createGet = async (req, res) => {
  
    res.render("admin/pages/permission/createRole.pug",{ 
    })
}
module.exports.editGet = async (req, res) => {
    try {
        let find = {
            delete:"false"
        };
        const categories = await categoryModel.find(find).select('_id title parentId');
        const item = await categoryModel.findOne({
            _id: req.params.id
        })
        console.log(item)
        const tree = createTree(categories)
        res.render("admin/pages/categories/edit.pug", {
            tree: tree,
            item:item
        })
    } catch (error) {
        
    }
    
}



// create new category
module.exports.createPatch = async (req, res) => {
    try {
        req.body.birthDay=new Date(req.body.birthDay)
        const newItem=new roleModel(req.body)
        newItem.save()
        req.flash("success", "Tạo mới thành công");
        res.redirect("back")
    } catch (error) {
        console.log(error)
        // req.flash("error", "Không thể tạo mới");
        // res.redirect("back")

    }
}