import { hasLetters } from "../../../../validation/hasLetters"; // Assuming validation.js is in the same directory
// preview image
const imgInp = document.querySelector('[thumbnail-input]')
const imgPreview = document.querySelector('[thumbnail-image]')
imgInp.addEventListener("change",(e)=>{
  if (imgInp.files && imgInp.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imgPreview.src = e.target.result;
    };

    reader.readAsDataURL(imgInp.files[0]);
  }
})


// submit event
const form = document.querySelector('[product-form]')
console.log(form)
form.addEventListener("submit",(e)=>{
  try {
     e.preventDefault()
     let stocks = document.querySelectorAll('[product-stock]');
     let sizes = document.querySelectorAll('[product-size]');
     let string = "";
     stocks.forEach(function (value, i) {
        string += `${parseInt(sizes[i].value)}-${parseInt(stocks[i].value)},`
     })
     const hiddenInput = document.createElement('input');
     hiddenInput.setAttribute('type', 'hidden');
     hiddenInput.setAttribute('name', 'sizestock');
     hiddenInput.setAttribute('value',string);
     form.appendChild(hiddenInput);
     form.submit();
  } catch (error) {
    alert("some thing went wrong")
  }
 
})

// add more and remove  field for stock and size input button 
const addSizeStockBtn = document.querySelector('[add-sizestock-btn]')
const stockSizeFields = document.querySelector('[stock-size-fields]')
if(stockSizeFields.childNodes.forEach((node)=>{
   node.querySelector('[remove-sizestock-btn]').addEventListener("click", (e) => {
     stockSizeFields.removeChild(node)
   })
}))
addSizeStockBtn.addEventListener("click",(e)=>{
  let clone = stockSizeFields.firstElementChild.cloneNode(true)
  clone.querySelector('[product-size]').value=""
  clone.querySelector('[product-stock ]').value = ""
  clone.querySelector('[remove-sizestock-btn]').addEventListener("click",(e)=>{
    stockSizeFields.removeChild(clone)
  })
  stockSizeFields.appendChild(clone)
  

})


