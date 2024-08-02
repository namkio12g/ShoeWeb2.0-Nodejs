const userLinks = document.querySelectorAll('.profile-selection, .orders-selection, .address-selection');
const cancelBtn= document.querySelector('.cancel-button');
if(cancelBtn){
  cancelBtn.addEventListener("click",(e)=>{
    const orderId=cancelBtn.dataset.orderId
    fetch("/order/cancel",{
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        orderId:orderId
      })
    }).then(res=>res.json())
    .then(resjson=>{
      if(resjson.status){
        Swal.fire({
          icon: "success",
          title: "Success",
          text: resjson.massage,
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.reload();
        });
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: resjson.massage,
          timer: 1500,
          showConfirmButton: false
        }).then(function () {
          window.location.reload();
        });
      }
    })
  })
}
const currentUrl = window.location.href;
if (currentUrl.includes('address')) {
    userLinks.forEach(link => link.classList.remove('selected'));
    userLinks[2].classList.add("selected")
}
else if (currentUrl.includes('order')) {
  userLinks.forEach(link => link.classList.remove('selected'));
  userLinks[1].classList.add("selected")
}
else{
    userLinks.forEach(link => link.classList.remove('selected'));
    userLinks[0].classList.add("selected")
}