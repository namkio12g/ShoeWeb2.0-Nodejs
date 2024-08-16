const staffModel=require("../../model/staff.model")
const roleModel = require("../../model/role.model")
const status1 = require("../../helpers/filterStatus");
const getPagination = require("../../helpers/getPagination");
const bcrypt = require("bcrypt")

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
module.exports.deleteMulti = async (req, res) => {
    try {
        let multiItems = req.body.multiItems.split(',');
        for (let i = 0; i < multiItems.length - 1; i++) {
            let id = multiItems[i]
            await categoryModel.updateOne({
                _id: id
            }, {
                delete: "true"
            });
            req.flash("success", "Tạo mới thành công");
            res.redirect("back")
        }
    } catch (error) {
        req.flash("error", "Thao tác không thành công!");
    }
}
// access category view view

module.exports.index=async(req,res)=>{
    try{
    const listOption = status1.statusProduct(req.query);
    let find = {
        delete: "false",
    };
    // const roles=await roleModel.find(find).select("_id title");
    if (req.query.keyword) {
        find.title = {
            $regex: req.query.keyword,
            $options: "i"
        };
    }
    if (req.query.status) {
        find.status = req.query.status;
    }
    


    const numberDocument = await staffModel.countDocuments(find);
    const pagination = getPagination(req.query, 5, numberDocument);

    const list = await staffModel
        .find(find).sort({
                "position": "asc"
            })
            .limit(pagination.numberOfProduct)
            .skip(pagination.positionProduct);

    let detailstaff;
    // if (req.query.idDetail) {
    //     etailstaff = list.find(
    //         (staff) => staff._id == req.query.idDetail
    //     );
    res.render("admin/pages/staff/index.pug", {
        title: "pagedashboard",
        list:list,
        message: "This is Home!",
        listOption: listOption,
        keyword: req.query.keyword,
        // roles:roles
        // detailCategory: detailCategory,
    });
}
catch(error){
      req.flash("error", "Có lỗi");
      res.redirect("back")
}
}


// access create category view

module.exports.createGet = async (req, res) => {
    const roles=await roleModel.find({delete:false}).select("_id title");

    res.render("admin/pages/staff/create.pug",{ 
        roles: roles
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
        const salt = await bcrypt.genSalt(parseInt(process.env.SALTROUNDS))
        const secPass=await bcrypt.hash(req.body.originalPassword,salt);
        req.body.thumbnail=`/uploads/${req.file.filename}`;
        req.body.password = secPass;
        req.body.birthDay=new Date(req.body.birthDay)
        const newItem=new staffModel(req.body)
        newItem.save()
        req.flash("success", "Tạo mới thành công");
        res.redirect("back")
    } catch (error) {
        req.flash("error", "Không thể tạo mới");
        res.redirect("back")

    }
}