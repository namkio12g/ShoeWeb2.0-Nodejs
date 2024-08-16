const customerModel = require("../../model/customer.model")
const accountModel = require("../../model/account.model")
const orderModel = require("../../model/order.model");
module.exports.orders=async(req,res)=>{
    if (req.session.user) {
        const customer = await customerModel.findById(req.session.user._id);
        const orders = await orderModel.find({
            customerId: req.session.user._id
        })

        res.render("client/page/user/order.pug" ,{orders:orders,userName:customer.name})

    }
    else{
        res.render("client/page/home/index.pug")
    }
}
module.exports.setDefault=async (req,res)=>{
    if(req.session.user){
         const {
            idAddress

         } = req.body
         console.log(idAddress)
         if (idAddress) {
            try{
         await customerModel.updateOne({
              _id: req.session.user._id,
              'addresses.defaultSetting': 'true'
          }, {
              $set: {
                  'addresses.$.defaultSetting': 'false'
              }
          })

          await customerModel.updateOne({
                _id: req.session.user._id,
                'addresses._id': `${idAddress}`
            }, {
                $set: {
                    'addresses.$.defaultSetting': 'true'
                }
            })
         }catch(error){
            console.log(error)
         }
            res.render("client/page/user/address.pug", {})
        }
         else
         res.render("client/page/home/index.pug", {})
    }
else
    res.render("client/page/home/index.pug", {})
}
module.exports.updateAddress = async (req, res) => {
    if (req.session.user) {
        const {
            city,
            district,
            commune,
            street,
            id

        } = req.body
        if (id) {
            await customerModel.updateOne({
                          _id: req.session.user._id,
                          'addresses._id': id
                      }, {
                          $set: {
                              'addresses.$.location': street + ',' + commune + ',' + district + ',' + city
                          }
                      })
            res.redirect("back")
        } else
            res.render("client/page/home/index.pug", {})
    } else
        res.render("client/page/home/index.pug", {})
}
module.exports.addAddress = async (req, res) => {
    if(req.session.user){
    const {
        city,
        district,
        commune,
        street

    }=req.body
    const customer = await customerModel.findById(req.session.user._id)
    const name=customer.name;
    const flag=customer.addresses.length==0?"true":"false"
    await customerModel.findOneAndUpdate({
                 _id: req.session.user._id,
             }, {
                 $push: {
                     addresses: {
                        location:street+","+commune+","+district+","+city,
                        name:name,
                        default:flag
                     }
                 }
             }).then(success => {
                 })
                 .catch(error => {
                     console.log(error)

                 });

     res.redirect("back")
    }
    else {
        res.render("client/page/home/index.pug", {})
    }
}
module.exports.index=async(req,res)=>{
    if(req.session.user){
        let find={
            _id: req.session.user._id
        }
        
    const customer=await customerModel.findOne(find)
    const formatBd = customer.formatBirthDay();
    find = {
          userId: req.session.user._id
      }
      const account=await accountModel.findOne(find)
    res.render("client/page/user/profile.pug", {
        user: customer,
        birthday:formatBd,
        account:account
    })
    }
    else{
         res.render("client/page/home/index.pug", {
         })
    }
}
module.exports.address = async (req, res) => {
    if (req.session.user) {
        let find = {
            _id: req.session.user._id
        }

        const customer = await customerModel.findOne(find)
        res.render("client/page/user/address.pug", {
            addresses: customer.addresses,

  
        })
    } else {
        res.render("client/page/home/index.pug", {})
    }
}