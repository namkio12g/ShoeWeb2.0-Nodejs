const brandModel = require("../../model/brand.model")

const status1 = require("../../helpers/filterStatus");

const getPagination = require("../../helpers/getPagination");
// change status
module.exports.changeStatus = async (req, res) => {
    try {``
        const id = req.body.id;
        const status = req.body.newStatus;
        await brandModel.updateOne({
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

            await brandModel.updateOne({
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
        await brandModel.updateOne({
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
            await brandModel.updateOne({
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

module.exports.index = async (req, res) => {
    try {
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


        // const numberDocument = await brandModel.countDocuments(find);

        const list = await brandModel
            .find(find).sort({
                "position": "asc"
            })

        // .limit(pagination.numberOfProduct)
        // .skip(pagination.positionProduct);
        let detailCategory;
        if (req.query.idDetail) {
            detailCategory = list.find(
                (category) => category._id == req.query.idDetail
            );
        }
        res.render("admin/pages/brands/index.pug", {
            title: "pagedashboard",
            message: "This is Home!",
            brands:list,
            listOption: listOption,
            keyword: req.query.keyword,
            detailCategory: detailCategory,
        });
    } catch (error) {
        req.flash("error", "Có lỗi");
        res.render("admin/pages/brands/index.pug")
    }
}


// access create category view

module.exports.createGet = async (req, res) => {
  
    res.render("admin/pages/brands/create.pug", {
    })
}
module.exports.editGet = async (req, res) => {
    try {
  
  
        const item = await brandModel.findOne({
            _id: req.params.id
        })
        res.render("admin/pages/brands/edit.pug", {
            item: item
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
        req.body.thumbnail = `/uploads/${req.file.filename}`
        if (req.body.position == "") {
            let numberDocument = await brandModel.countDocuments(find);
            req.body.position = parseInt(numberDocument) + 1
        }
        const newItem = new brandModel(req.body)
        newItem.createdInfo.createdBy = req.session.staff._id;
        newItem.save()
        req.flash("success", "Tạo mới thành công");
        res.redirect("back")
    } catch (error) {
        req.flash("error", "Không thể tạo mới");

        res.redirect("back")

    }
}