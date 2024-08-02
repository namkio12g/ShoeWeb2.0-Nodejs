const img = document.querySelectorAll(".img__select a");
const imgBtn = [...img];
const addForm = document.querySelector("#add-form")

if (addForm) {
  addForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData = new FormData(addForm);
    const data = new URLSearchParams(formData);

    var response;
  
      response = await fetch('/cart/add', {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const res = await response.json(); // Parse JSON response



      if (res.success) {
        Swal.fire({
          icon: "success",
          title:"Success" ,
          text: res.message,
          timer: 2000,
          showConfirmButton: false
        }).then(function(){
          location.reload();
        })
        
      } else {
       
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: res.message,
        timer: 1500,
        showConfirmButton: false
      })
    } 
  })

}

console.log(imgBtn);
let eleSelected = imgBtn[0].parentNode;
eleSelected.style.border = "4px solid red";

let imgId = 1;
img.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    eleSelected.style.border = "4px solid rgb(170, 157, 157)";

    imgId = item.getAttribute("data-id");
    eleSelected = item.parentNode;
    eleSelected.style.border = "4px solid red";
    slideImage();
  });
});
function slideImage() {
  const displayWidth = document.querySelector(
    ".img__showcase:first-child"
  ).clientWidth;
  console.log(displayWidth);
  document.querySelector(".img__showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

// seclect size
const btnSize = document.querySelectorAll(".size-item");
let sizeSelected = btnSize[0];
sizeSelected.style.border = "3px solid red";
const size_input = document.querySelector("#size_input_detail");
size_input.value = parseInt(sizeSelected.innerHTML);
const stock = document.querySelector(".product-stock p");
stock.innerHTML = "Stock: " + sizeSelected.getAttribute("stock");

btnSize.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (sizeSelected) {
      sizeSelected.style.border = "3px solid rgb(36, 34, 34)";
    }

    sizeSelected = item;
    sizeSelected.style.border = "3px solid red";
    stock.innerHTML = "Stock: " + sizeSelected.getAttribute("stock");
    size_input.value = parseInt(sizeSelected.innerHTML);

  });
});
