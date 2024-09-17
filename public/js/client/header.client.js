const productsInCart = document.querySelectorAll(".product-cart-hover")
const Swal = require('sweetalert2')
const headerBot = document.querySelector(".header-bottom")
//-----search expand-----///
const btnSearch=document.querySelector(".btn-search")
const btnCancel = document.querySelector(".btn-cancel")
const MenuExpand= document.querySelector(".menu-expand")
const MenusearchExpand = document.querySelector(".menu-search-expand")

const inputSearch=MenuExpand.querySelector(".input-search");

btnSearch.addEventListener("click",()=>{
    btnCancel.classList.toggle("active");
    btnSearch.classList.toggle("active");
    MenuExpand.classList.toggle("active");
})
btnCancel.addEventListener("click",()=>{
     btnCancel.classList.toggle("active");
     btnSearch.classList.toggle("active");
     MenuExpand.classList.toggle("active");
})
inputSearch.addEventListener("keydown", async () => {
    if (inputSearch.value == "" || inputSearch.value === "") {
        MenusearchExpand.classList.remove("active")
        MenusearchExpand.innerHTML=""
    }
    else{
        
        MenusearchExpand.classList.add("active");
        const keyword = inputSearch.value;
        let response = await fetch("/products/searching", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                keyword
            })
        });
        if (response.ok) {
            const res = await response.json()
            MenusearchExpand.innerHTML = ""
            res.products.forEach((product)=>{
                MenusearchExpand.innerHTML += ` 
                <a href = "/products/detail/${product.slug}" class = "row">
                    <div class = "col-3"> 
                    <img class = "rounded-3" src = "${product.thumbnail}"
                    alt = ""/> 
                    </div> 
                    <div class = "col-8 d-flex justify-content-center flex-column"> 
                        <span class = "product-title">${product.title}</span>
                        <span class="product-price">${product.price}₫<span> 
                    </div>
                </a>
                <hr>`

            })
        }
        MenusearchExpand.innerHTML += `
        <span style = 'color:rgb(147, 146, 146)'> Search
        for "${inputSearch.value}" </span>
        `
    }
})
//-- header expand in small size 
//------show the header expand and hide expand

const hedaerExpand = document.querySelector(".header-bottom-expand")
const overlayHeader = document.querySelector(".overlay-header-expand")
const menuBarsIcon = document.querySelector(".menu-bars")
menuBarsIcon.addEventListener("click",()=>{
    hedaerExpand.classList.add("active");
    overlayHeader.classList.add("overlay-active")
})
        //hide
const iconX = document.querySelector(".fa-x")
iconX.addEventListener("click", () => {
    hedaerExpand.classList.remove("active");
    overlayHeader.classList.remove("overlay-active")

})

overlayHeader.addEventListener("click", () => {
    hedaerExpand.classList.remove("active");
    overlayHeader.classList.remove("overlay-active")

})
//------collapse for item in header expand
const items = document.querySelector(".header-bottom-expand").querySelectorAll(".item")
items.forEach((item)=>{
    const itemIcon = item.querySelector(".item-title-icon")
    const collapse = item.querySelector(".item-collapse")
    if(collapse){
    itemIcon.addEventListener("click", () => {
        const itemsActive = document.querySelectorAll(".item-active")
        if (itemsActive[itemsActive.length-1]) {
            if (!itemsActive[itemsActive.length - 1].contains(item)){
                   itemsActive.forEach((itemactive)=>{
                       itemactive.classList.toggle("item-active")
                   }) 
            }
        }
        item.classList.toggle("item-active")
    })
}
})
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