module.exports.validateStaff = async (req,res,next)=>{
    if(!req.body.name){
        req.flash("error", "Tên không được để trống");
        res.redirect("back");
        return;
    }
    if(!req.body.originalPassword){

    }
     if (!req.body.confirmPassword) {

     }
      if (!req.body.email) {
         
      }
      else if(req.body.email.includes('@')){

      }
       if (!req.body.phoneNumbers) {

       }
       else if(req.body.phoneNumbers[0]!="0" || req.body.phoneNumbers.length!=10){
        
       }
    next();
   

}