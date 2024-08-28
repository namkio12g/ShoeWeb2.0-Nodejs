const productsInCart = document.querySelectorAll(".product-cart-hover")
const Swal = require('sweetalert2')
const headerBot = document.querySelector(".header-bottom")
//header sticky transform
window.addEventListener("scroll",function(e){
 if (window.pageYOffset > 500) {
        headerBot.classList.add("sticky-div")
    headerBot.classList.remove("hidden-div")

    }
else if (window.pageYOffset > 200) {
    headerBot.classList.add("hidden-div")

 } 
else {
         headerBot.classList.remove("sticky-div")
        headerBot.classList.remove("hidden-div")


 }
})
///
productsInCart.forEach((item)=>{
    const inputProductCart=item.querySelector(".quantity-input");
    inputProductCart.addEventListener("change",(e)=>{
        const productId =inputProductCart.dataset.productId;
        const size = inputProductCart.dataset.productSize;
        const quantity = inputProductCart.value;
        if(quantity>0){
            updateCartQuantity(productId,quantity,size);
            updateTotaltext(productsInCart)
        }
        else {

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
function updateTotaltext(productsInCart) {
    let total=0;
   productsInCart.forEach((item) => {
    const quantity = item.querySelector(".quantity-input").value;
    const price = item.querySelector(".price-text").dataset.productPrice;
    total+=parseInt(quantity*price)

    
   })
   document.querySelector(".total-text-hover").innerHTML=`Total: $${total}`;
}
function updateCartQuantity(productId, quantity, size) {

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