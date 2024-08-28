//cart show and hid event
const cartShowBtn = document.querySelector(".shopping-cart-icon-section");
const overlay = document.querySelector(".overlay");
const cartMenu = document.querySelector(".cart-section");
const iconCancelCart = document.querySelector(".icon-cancel");
if(cartShowBtn){
    cartShowBtn.addEventListener("click",()=>{
        console.log("12312312")
        cartMenu.classList.add("cart-active");
        overlay.classList.add("overlay-active");

    })
};
if(overlay){
    overlay.addEventListener("click",()=>{
        cartMenu.classList.remove("cart-active");
        overlay.classList.remove("overlay-active");

    })
    iconCancelCart.addEventListener("click", () => {
        cartMenu.classList.remove("cart-active");
        overlay.classList.remove("overlay-active");

    })
};