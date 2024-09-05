//cart show and hid event
const cartShowBtn = document.querySelector(".shopping-cart-icon-section");
const overlay = document.querySelector(".overlay");
const cartMenu = document.querySelector(".cart-menu");
const iconCancelCart = document.querySelector(".icon-cancel");
if (cartMenu) {
    cartShowBtn.addEventListener("click",()=>{
        console.log("12312312")
        cartMenu.classList.add("cart-active");
        overlay.classList.add("overlay-active");

    })
};
if (cartMenu) {
    overlay.addEventListener("click",()=>{
        cartMenu.classList.remove("cart-active");
        overlay.classList.remove("overlay-active");

    })
    iconCancelCart.addEventListener("click", () => {
        cartMenu.classList.remove("cart-active");
        overlay.classList.remove("overlay-active");

    })
};
// quick view action
const quickViewBtn = document.querySelectorAll("[quick-view-btn]")
const quickView = document.querySelector("#quickViewModal")

if(quickViewBtn){
    quickViewBtn.forEach((Btn)=>{
        Btn.addEventListener("click", async() => {
            const id=Btn.getAttribute("data-id");
            let response=await fetch("/products/getProductQuickView",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    id
                })
            });
            if(response.ok){
                console.log("123123")
                const res = await response.json()
                quickView.querySelector("img").src=res.product.thumbnail;
                quickView.querySelector(".price").innerHTML = res.product.price;
                quickView.querySelector(".title").innerHTML = res.product.title;
                quickView.querySelector("input").value=1;
                const select=quickView.querySelector("select");
                select.innerHTML=""
                for (let i = 0; i < res.size.length; i++) {
                    const option = document.createElement("option");
                    option.value = res.size[i].Value;
                    option.textContent = res.size[i].Value;
                    select.appendChild(option);
                }

            }
            else{
                console.alert("some thing wrong!")
            }
        })
    })
}