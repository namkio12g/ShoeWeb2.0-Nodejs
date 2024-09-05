const brandModel = require("../../model/brand.model")
const categoryModel = require("../../model/category.model")
const createTree = require("../../helpers/categoryTree");

module.exports.getBrands = async (req, res, next) => {
    const find={status:"active",delete:false}
        const list = await categoryModel
            .find(find).sort({
                "position": "asc"
            })

    res.locals.categoriesTree = createTree(list)
    next()

}
module.exports.getCategories = async (req, res, next) => {
    const find = {
        status: "active",
        delete: false
    }
    const list = await brandModel
        .find(find).sort({
            "position": "asc"
        })

    res.locals.brands = list;
    next()

}
