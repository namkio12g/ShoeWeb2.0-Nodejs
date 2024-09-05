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

//quantity button
const plusBtn = document.querySelector(".plus-button");
const minusBtn = document.querySelector(".minus-button");
const inputQuanityDetail1 = document.querySelector("#inputQuantity");
plusBtn.addEventListener("click",()=>{
  let newValue = parseInt(inputQuanityDetail1.value) + 1
  if (newValue >=1) {
        inputQuanityDetail1.value = newValue;
  console.log(inputQuanityDetail1.value)


  }
})
minusBtn.addEventListener("click", () => {
   let newValue = parseInt(inputQuanityDetail1.value) - parseInt(inputQuanityDetail1.step)
   if (newValue >= parseInt(inputQuanityDetail1.min)) {
     inputQuanityDetail1.value = newValue;

   }
})

//slide carousel


const sliderImg = document.querySelector(".slider-content");
const sliderSelectItemWidth = sliderImg.querySelector(".slider-item").offsetWidth;
const sliderChilds=[...sliderImg.children]
let cardPerview=Math.round(sliderImg.offsetWidth/sliderSelectItemWidth)

sliderChilds.slice(-cardPerview).reverse().forEach(child=>{
  sliderImg.insertAdjacentElement("afterbegin", child.cloneNode(true))
})
sliderChilds.slice(0,cardPerview).forEach(child => {
  sliderImg.insertAdjacentElement("beforeend", child.cloneNode(true))
})

let isDragging=false,startX,startScrollLeft;
const dragStart=(e)=>{
  isDragging=true;
  sliderImg.classList.add("dragging");
  startX = e.pageX - sliderImg.offsetLeft;
  startScrollLeft=sliderImg.scrollLeft;


}
const dragging=(e)=>{
  e.preventDefault();
  if(!isDragging) return;
  const x = e.pageX - sliderImg.offsetLeft;
  const walk = (x - startX) * 2
  sliderImg.scrollLeft = startScrollLeft - walk;
}
const dragStop=()=>{
  isDragging=false;
    sliderImg.classList.remove("dragging")
}
const infiniteScroll=()=>{
  if(sliderImg.scrollLeft===0){
    sliderImg.classList.add("no-smooth")
    sliderImg.scrollLeft=sliderImg.scrollWidth-(sliderImg.offsetWidth+1)
    sliderImg.classList.remove("no-smooth")

  }
  else if(Math.floor(sliderImg.scrollLeft)===sliderImg.scrollWidth-sliderImg.offsetWidth){
    sliderImg.classList.add("no-smooth")

    sliderImg.scrollLeft =1
    sliderImg.classList.remove("no-smooth")
  }
}
sliderImg.addEventListener("mousedown",dragStart)
sliderImg.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
sliderImg.addEventListener("scroll",infiniteScroll)




const nextIcon = document.querySelector(".next-icon");
nextIcon.addEventListener("click",()=>{
    sliderImg.scrollLeft += sliderSelectItemWidth
})
const prevIcon = document.querySelector(".prev-icon");
prevIcon.addEventListener("click", () => {
  sliderImg.scrollLeft -= sliderSelectItemWidth
})
//change the image
const sliderItems=document.querySelectorAll(".slider-item")
sliderItems.forEach((item)=>{
  item.addEventListener("click",()=>{
    const value=item.getAttribute("index-image")
    const sliderItemActive=document.querySelector(".slider-item.active")
    if(item!=sliderItemActive){
    document.querySelector(`.img-showing.active`).classList.remove("active")
    document.querySelector(`img.img-showing[index-image='${value}']`).classList.add("active")
      sliderItemActive.classList.remove("active")
      item.classList.add("active")

    }
  })
})
//select select
const btnSize = document.querySelectorAll(".size-item");
let sizeSelected = btnSize[0];
sizeSelected.classList.toggle("active");;
const size_input = document.querySelector("#size_input_detail");
size_input.value = parseInt(sizeSelected.innerHTML);
const stock = document.querySelector(".product-stock-text span");
stock.innerHTML = sizeSelected.getAttribute("stock") + " left in stock";

btnSize.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (sizeSelected) {
      sizeSelected.classList.toggle("active");
    }

    sizeSelected = item;
    sizeSelected.classList.toggle("active");
    stock.innerHTML = sizeSelected.getAttribute("stock") + " left in stock";
    size_input.value = parseInt(sizeSelected.innerHTML);

  });
});