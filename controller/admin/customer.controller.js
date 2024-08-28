const filterStatus = require("../../helpers/filterStatus")
const customerModel=require("../../model/customer.model")
const listOption2=require("../../helpers/filterStatus")
module.exports.index= async (req,res)=>{
    const listOps = listOption2.statusProduct(req.query)
    
    let condition={
        delete:"false",
    }
     if (req.query.status) {
         condition.status = req.query.status;
     }
     if(req.query.keyword){
        condition.name = {
            $regex: req.query.keyword,
            $options: "i"
        };
     }
    
    const customers=await customerModel.find(condition)
    let customer;
    if (req.query.idDetail) {
        customer = customers.find(
            (c) => c._id == req.query.idDetail
        );
    }
    res.render("admin/pages/customers/index",{
        customers:customers,
        listOps:listOps,
        customer:customer,
        
    });


}
module.exports.delete = async (req, res) => {
    const id = req.params.id;
    await customerModel.updateOne({_id:id},{delete:"true"});
    res.redirect("back");
}
module.exports.changeStatus=async (req,res)=>{
    const id=req.params.id;
    const status=req.params.status;
    await customerModel.updateOne({_id:id},{status:status});
    res.redirect("back");

}