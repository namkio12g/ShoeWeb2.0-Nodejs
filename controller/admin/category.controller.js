const categoryModel=require("../../model/category.model")
const createTree = require("../../helpers/categoryTree");

const status1 = require("../../helpers/filterStatus");

const getPagination = require("../../helpers/getPagination");
// change status
module.exports.changeStatus = async (req, res) => {
    try {
        const id = req.body.id;
        const status = req.body.newStatus;
        await categoryModel.updateOne({
            _id: id
        }, {
            status: status,$set: {
      'editedInfo.editedBy': req.session.staff._id,
      'editedInfo.editedAt': Date.now()
    }
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
                status: status, $set: {
                    'editedInfo.editedBy': req.session.staff._id,
                    'editedInfo.editedAt': Date.now()
                }
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
            delete: "true", $set: {
                'editedInfo.editedBy': req.session.staff._id,
                'editedInfo.editedAt': Date.now()
            }
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
            console.log(id)
            await categoryModel.updateOne({
                _id: id
            }, {
                delete: "true", $set: {
                    'editedInfo.editedBy': req.session.staff._id,
                    'editedInfo.editedAt': Date.now()
                }
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

    if (req.query.keyword) {
        find.title = {
            $regex: req.query.keyword,
            $options: "i"
        };
    }
    if (req.query.status) {
        find.status = req.query.status;
    }


    const numberDocument = await categoryModel.countDocuments(find);

    const list = await categoryModel
        .find(find).sort({"position":"asc"})
 
        // .limit(pagination.numberOfProduct)
        // .skip(pagination.positionProduct);
    const tree = createTree.createTree(list)
    let detailCategory;
    if (req.query.idDetail) {
        detailCategory = list.find(
            (category) => category._id == req.query.idDetail
        );
    }
    res.render("admin/pages/categories/index.pug", {
        title: "pagedashboard",
        message: "This is Home!",
        categories: tree,
        listOption: listOption,
        keyword: req.query.keyword,
        detailCategory: detailCategory,
    });
}
catch(error){
      req.flash("error", "Có lỗi");
      res.render("admin/pages/categories/index.pug")
}
}


// access create category view

module.exports.createGet = async (req, res) => {
     let find = {
         delete: "false",
     };
     const categories = await categoryModel.find(find).select('_id title parentId');;
     const tree=createTree.createTree(categories)
    res.render("admin/pages/categories/create.pug",{ 
        tree:tree
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
        const tree = createTree.createTree(categories)
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
          let find = {
              delete: "false",
          };
        req.body.thumbnail=`/uploads/${req.file.filename}`
        if(req.body.position==""){
            let numberDocument = await categoryModel.countDocuments(find);
            req.body.position=parseInt(numberDocument)+1
        }
        const newItem=new categoryModel(req.body)
        newItem.createdInfo.createdBy = req.session.staff._id;
        newItem.save()
        req.flash("success", "Tạo mới thành công");
        res.redirect("back")
    } catch (error) {
        req.flash("error", "Không thể tạo mới");

        res.redirect("back")

    }
}