const orderModel=require("../../model/order.model")
const coupponModel = require("../../model/couppon.model")
const customerModel = require("../../model/customer.model")
const accountModel = require("../../model/account.model")
const cartModel = require("../../model/cart.model")
const productModel=require("../../model/product.model")
module.exports.cancel = async (req, res) => {
       try {
           const orderId = req.params.id;
           await orderModel.findOneAndUpdate({_id:orderId},{status:5})
           res.redirect("back")
       } catch (error) {

       }
}
module.exports.orderAgain = async (req, res) => {
    try {
        const orderId = req.params.id;
        await orderModel.findOneAndUpdate({
            _id: orderId
        }, {
            status: 1
        })
        res.redirect("back")
    } catch (error) {

    }
}
module.exports.orderDetail = async (req, res) => {
    try {
         const orderId = req.params.id;
         const order = await orderModel.findById(orderId)
         res.render("client/page/user/orderDetail.pug", {
             order: order

         })
    } catch (error) {
        
    }
   
}
module.exports.createOrder=async (req,res)=>{
    if(req.session.user){
    const {
        coupponId,
        paymentValue,
        totalApplyCoup
    }=req.body;
    try{
        const cus=await customerModel.findById(req.session.user._id);
        const address = await cus.addresses.find(address => address.defaultSetting === "true")
        if(address){

            if(coupponId!="0"){
            const account = await accountModel.findOne({
                    userId: req.session.user._id
            })
            const couppon=await account.couppons.find(couppon=>(couppon._id===coupponId))

            if(couppon.quantity === 1) {

                await accountModel.findOneAndUpdate({
                    customerId: req.session.user._id,
                }, {
                    $pull: {
                        couppons: {
                            _id:coupponId
                        }
                    }
                })
            }
            else{

               couppon.quantity=couppon.quantity-1;
               await account.save();
            }
        }
        const cart = await cartModel.findOne({customerId:req.session.user._id});
        let total=0
        let quantityTotal=0
        let products=[] 
        if(cart.products.length>0){
        for (let item of cart.products) {
            const product= await productModel.findOne({_id:item.productId})
            let totalTheProduct = parseInt(item.quantity) * (parseInt(product.discountPercentage) * parseInt(product.price))/100
            total += parseInt(totalTheProduct)
            quantityTotal+=parseInt(item.quantity)
            products.push({ 
                productId:item.productId,
                size:item.size,
                price: ((100-parseInt(item.discountPercentage)) * parseInt(product.price)) / 100,
                quantity:item.quantity,
                name:product.title,
                thumbnail:product.thumbnail,
                total: totalTheProduct
            })
        }
        console.log(products)
        cart.products=[];
        await cart.save();
        const newOrder={
            customerId: `${req.session.user._id}`,
            priceTotal:total,
            coupponTotal: totalApplyCoup,
            quantityTotal:quantityTotal,
            productArray:products,
            // payMethod:payMethod,
            address:address.location,
            phoneNumber: req.session.user.phoneNumbers,
        }

        await orderModel(newOrder).save()
          res.json({
              success: true,
              message: "Create order success!"
          })
        }
        else{
                res.json({
                    success: false,
                    message: "Your cart is empty"
                })
        }
    }
            
        else{
            res.json({
                success:false,
                message:"Add more an address"
            })
        }

    }
    catch(error){
        console.log(error)
         res.json({
             success: false,
             message: "Something are wrong"
         })
    } }
    else{

    }
}