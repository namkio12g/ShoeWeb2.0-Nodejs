const cartModel = require("../../model/cart.model")
const productModel = require("../../model/product.model")
const coupponModel = require("../../model/couppon.model")

const accountModel = require("../../model/account.model")

module.exports.get=async (req,res,next)=>{
if (req.session.user) {
    try {
        let total=0;
        let user=req.session.user
        const cart = await cartModel.findOne({
            customerId: user._id,
        })
        const products=[];
        for (const item of cart.products) {
            const product = await productModel.findOne({
                    _id: item.productId
                });
                total = parseInt(total) + (item.quantity * product.price)
                products.push({
                    title: product.title,
                    thumbnail: product.thumbnail,
                    size: item.size,
                    quantity: item.quantity,
                    price:product.price,
                    id:item.productId
                });
           }
        res.locals.cart = {_id:cart._id,products:products,total:total};
    } catch (err) {
        console.error(err);
        res.locals.cart = {_id:"null"}; 
    }
} else {
    res.locals.cart = {
        _id: "null"
    };
}
next();
};
module.exports.update = async (req, res) => {
    const {
        productId,
        size,
        quantity,
    } = req.body;
    var userId = req.session.user._id;
    try {
        const cart = await cartModel.findOne({
            customerId:userId,
        });
        if (cart) {
            const item = cart.products.find(item => (item.productId === productId && item.size === parseInt(size)));
            if (item) {
                item.quantity = quantity;
                await cart.save();
                return res.json({
                    success: true
                });
            }
        }
        res.json({
            success: false
        });
    } catch (error) {
        console.error('Error updating cart:', error);
        res.status(500).json({
            success: false
        });
    }
}
module.exports.index= async(req,res)=>{
    if ( req.session.user){
    const account=await accountModel.findOne({
       userId: req.session.user._id,
    })
    let couppons=[]
    for (const item of account.couppons) {
        const couppon=await coupponModel.findOne({
            _id: item._id
        })
        couppons.push({
            _id:couppon._id,
            name: couppon.name,
            percent: couppon.percent,
            condition: couppon.condition,
        })
    };
     const cart = await cartModel.findOne({
               customerId: req.session.user._id,
           })
           const products = [];
           let total=0;
           for (const item of cart.products) {
               const product = await productModel.findOne({
                   _id: item.productId
               });
               
                total = parseInt(total)+(item.quantity*product.price)
               products.push({
                   title: product.title,
                   thumbnail: product.thumbnail,
                   size: item.size,
                   quantity: item.quantity,
                   price: product.price,
                   id: item.productId,
               });
           }
    res.render("client/page/cart/index",{
        products:products,
        total:total,
        couppons:couppons,
        indexCartFlag:"true",

    })
     }
     else
        res.redirect("back")

}
module.exports.add = async(req,res)=>{
        let flag=true;
        console.log(req.body)
        if (req.session.user){
       const cart = await cartModel.findOne({
         customerId:req.session.user._id,

       });
       if (cart) {
           const item = cart.products.find(item => (item.productId === req.body.id && item.size === parseInt(req.body.size)));
           if (item) {
                flag=false;
                item.quantity = (parseInt(item.quantity) + parseInt(req.body.quantity));
                await cart.save();
               }
            }
    if(flag){
        await cartModel.findOneAndUpdate(
            {
                 customerId:req.session.user._id,
            },
            {
                $push: {
                    products: {
                        productId: req.body.id,
                        size: req.body.size,
                        quantity: req.body.quantity,
                    }
                }
            }
        ).then(updatedCart => {
               ;
            })
            .catch(error => {
               
            });
            
  
}
 res.json({
     success: true,
     message: "Add success!"
 });
        }
        else{
            res.json({
                success: false,
                message: "You should login first!"
            });
        }

}
module.exports.delete = async (req, res) => {
       const {
           productId,
            size
       } = req.body;
    await cartModel.findOneAndUpdate({
            customerId: req.session.user._id,
        }, {
            $pull: {
                products: {
                    productId: productId,
                    size: size,
                }
            }
        })
        .then(updatedCart => {
       
        })
        .catch(error => {
        
        });
}

