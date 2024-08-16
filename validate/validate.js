exports.validateRole = (req, res, next) => {
    console.log(req.body)
    if(!req.body.title){
       req.flash("error", "Tên nhóm quyền không được để trống");
       res.redirect("back");
       return;
    }
    next();
}
module.exports.validateStaff = async (req,res,next)=>{
    if(!req.body.name){
        req.flash("error", "Tên không được để trống");
        res.redirect("back");
        return;
    }
    if(!req.body.originalPassword){
        req.flash("error", "Vui lòng điền đầy đủ ");
        res.redirect("back");
        return;
    }
     if (!req.body.confirmPassword) {
        req.flash("error", "Vui lòng điền đầy đủ ");
        res.redirect("back");
        return;
     }
      if (!req.body.email) {
         req.flash("error", "Email không được để trống");
         res.redirect("back");
         return;
      }
      else if(!req.body.email.includes('@')){
        req.flash("error", "Email không đúng định dạng");
        res.redirect("back");
        return;
      }
       if (!req.body.phoneNumbers) {
        req.flash("error", "Số điện thoại không được để trống");
        res.redirect("back");
        return;
       }
       else if (req.body.phoneNumbers[0] != "0" || req.body.phoneNumbers.length != 10||isNaN(req.body.phoneNumbers)) {
            req.flash("error", "Số điện thoại phải 10 số và bắt đầu bằng số 0");
            res.redirect("back");
            return;
       }

       if(!req.body.birthDay){
            req.flash("error", "Vui lòng điền ngày sinh");
            res.redirect("back");
            return;
       }
       else if(Date.now()<new Date(req.body.birthDay)){
         req.flash("error", "Ngày sinh không hợp lệ");
         res.redirect("back");
         return;
       }
       if(req.body.confirmPassword!==req.body.originalPassword){
         req.flash("error", "Mật khẩu và  mật khẩu nhập lại không khớp");
         res.redirect("back");
         return;
       }
    next();
   

}
module.exports.validateProduct = async (req, res, next) => {
    if (!req.body.title) {
        req.flash("error", "Tiêu đề sản phẩm không được để trống");
        res.redirect("back");
        return;
    }
    if (!req.body.price || isNaN(req.body.price)) {
        req.flash("error", "Vui lòng điền đúng định dạng cho giá cả ");
        res.redirect("back");
        return;
    }
    if (!req.body.discountPercentage || isNaN(req.body.discountPercentage)) {
        req.flash("error", "Vui lòng điền đúng định dạng discound đầy đủ ");
        res.redirect("back");
        return;
    }
    if (!req.body.brand) {
        req.flash("error", "Nhãn hiệu không được để trống");
        res.redirect("back");
        return;
    }
    if (!req.body.category) {
        req.flash("error", "Loại sản phẩm không được để trống");
        res.redirect("back");
        return;
    }

    next();


}
module.exports.validateCategory = async (req, res, next) => {
            if (!req.body.title) {
                req.flash("error", "Tiêu đề Danh mục không được để trống");
                res.redirect("back");
                return;
            }

            next();
        }