// const { response } = require("express");

const Swal = require('sweetalert2')
const quantityCartInputs = document.querySelectorAll(".quantity-input")
const checkCartInputs = document.querySelectorAll(".check-input")
const productCarts = document.querySelectorAll(".product-in-cart")
const costProducts = document.querySelector(".cost-products-text")
const totalText = document.querySelector(".total-text")
const coupponText = document.querySelector(".couppon-text")
const coupponSeletion = document.querySelector(".couppon-selection")
const coupponApplyBtn = document.querySelector(".couppon-apply-button")
const createOrderBtn = document.querySelector(".create-order-button")
const hidCpId = document.querySelector("#hiddenCoupponId")
const paymentSelect=document.querySelector(".payment-selection")


var totalApplyCoup = 0
var totalGlobal=(parseInt(totalText.textContent.replace("$","")))
createOrderBtn.addEventListener("click", async (e) => {
    let paymentValue=paymentSelect.value
    const coupponId = hidCpId.value;
    await fetch("/order/createOrder", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                coupponId,
                paymentValue,
                totalApplyCoup
                    
            })
    }).then(response => response.json())
        .then(res => {
            if(res.success){
                      Swal.fire({
                          icon: "success",
                          title: "Success",
                          text: res.massage,
                          timer: 1500,
                          showConfirmButton: false
                      }).then(function () {
                          window.location.reload();
                      });
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: res.message,
                    text: res.massage,
                    timer: 1500,
                    showConfirmButton: false
                })
            }
        })
})
coupponApplyBtn.addEventListener("click",()=>{
    hidCpId.value = coupponSeletion.value;  
    const id=coupponSeletion.value;
    console.log(id)
    if(id==0){
    totalApplyCoup = 0;
    totalText.innerHTML = `$${totalGlobal-totalApplyCoup}`
    coupponText.innerHTML = `$${totalApplyCoup}`
    }
    else{
        const selectedOption = coupponSeletion.options[coupponSeletion.selectedIndex]
        const percent =parseInt(selectedOption.dataset.percent);
        const condition = parseInt(selectedOption.dataset.condition);
        totalApplyCoup = totalGlobal / 100 * percent;

        totalText.innerHTML = `$${totalGlobal-totalApplyCoup}`
        coupponText.innerHTML = `$${totalApplyCoup}`

        }

})


// deletebutton.forEach(element => {
//     element.addEventListener(("click"),(e)=>{
//         console.log("ssss")
//         const productId = element.dataset.productId;
//         const size = element.dataset.productSize;
//         fetch('/cart/', {
//                 method: 'delete',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     productId,
//                     size
//                 }),
//             })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.success) {
//                     console.log('Quantity updated successfully');
//                 } else {
//                     console.error('Failed to update quantity');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//                    location.reload();
//     })
// });




// checkCartInputs.forEach((ele) => {
//             ele.addEventListener("change", (e) => {
//                 let quantity;
//                  const productId = ele.dataset.productId;
//                  const checked=ele.checked;
//                 const size = ele.dataset.productSize;
//                 console.log(size)
//                  updateCartQuantity(productId, quantity,size,checked);
//                  updateSubtotal()
//    })
//    })


// quantityCartInputs.forEach((ele) => {
//     ele.addEventListener("change", (e) => {
//         const productId = ele.dataset.productId;
//         const newQuantity = ele.value;
//         const size = ele.dataset.productSize;
//         let checked;
//         updateCartQuantity(productId,newQuantity,size,checked);
//         updateSubtotal()
//     })
// })
productCarts.forEach((productCart) => {

    const increasebtn=productCart.querySelector("#increase-button");

    const decreasebtn=productCart.querySelector("#decrease-button");
    const quantity = productCart.querySelector(".quantity-text");
    const price = productCart.querySelector("#price");
    const totalPrice = productCart.querySelector("#total-price");



    increasebtn.addEventListener("click",(e)=>{
        if(parseInt(quantity.innerHTML)<100){
            quantity.innerHTML = parseInt(quantity.innerHTML)+1;
            console.log(quantity.innerHTML)
            let size=quantity.dataset.productSize;
            let productId = quantity.dataset.productId;
            updateCartQuantity(productId, parseInt(quantity.innerHTML), size)
            totalPrice.innerHTML=`$${parseInt(price.dataset.productValue)*parseInt(quantity.innerHTML)}`
            updateSubtotal();

        }
    })
     decreasebtn.addEventListener("click",(e) => {
        let size = quantity.dataset.productSize;
        let productId = quantity.dataset.productId;
         if (parseInt(quantity.innerHTML) > 1) {
             quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
             
             updateCartQuantity(productId, parseInt(quantity.innerHTML), size)
            totalPrice.innerHTML = `$${parseInt(price.dataset.productValue)*parseInt(quantity.innerHTML)}`
            updateSubtotal();

         }
         else{
            
          fetch('/cart/delete', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId,
                    size
                }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Quantity updated successfully');
                } else {
                    console.error('Failed to update quantity');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
                   location.reload();  
         }
     })

})
function updateSubtotal(){
    let total=0;
    productCarts.forEach((productCart)=>{
            const price = productCart.querySelector("#price").dataset.productValue;
            const quantity = productCart.querySelector(".quantity-text").innerHTML;
            const productTotal=parseInt(price)*parseInt(quantity);
            total+=productTotal;




    })
    totalGlobal=total;
    const selectedOption = coupponSeletion.options[coupponSeletion.selectedIndex]
   const id = coupponSeletion.value;
   if(id!=0){
    const percent = parseInt(selectedOption.dataset.percent);
    const condition = parseInt(selectedOption.dataset.condition);
    totalApplyCoup = totalGlobal / 100 * percent;
   }
   else{
    totalApplyCoup=0;
   }
   

   totalText.innerHTML = `$${totalGlobal-totalApplyCoup}`
   coupponText.innerHTML = `$${totalApplyCoup}`

}
function updateCartQuantity(productId, quantity,size){

    fetch('/cart/update', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId,
                size,
                quantity,
            }),
        })
        .then(response => response.json())
        
        
}