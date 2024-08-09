module.exports.index=async(req,res)=>{


    res.render("admin/pages/category/index.pug")    
}
module.exports.createGet = async (req, res) => {


    res.render("admin/pages/category/create.pug")
}