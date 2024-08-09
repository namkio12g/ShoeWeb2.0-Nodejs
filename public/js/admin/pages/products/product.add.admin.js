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
const form = document.querySelector('[add-product-form]')
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
addSizeStockBtn.addEventListener("click",(e)=>{
  let clone = stockSizeFields.firstElementChild.cloneNode(true)
  clone.querySelector('[product-size]').value=""
  clone.querySelector('[product-stock ]').value = ""
  clone.querySelector('[remove-sizestock-btn]').addEventListener("click",(e)=>{
    stockSizeFields.removeChild(clone)
  })
  stockSizeFields.appendChild(clone)
  

})


//
// const publishDateInput = document.getElementById("updateAt");
// const currentDate = new Date();
// const formattedDate = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD
// publishDateInput.value = formattedDate;
// const btnAddSizeProduct = document.querySelector(".btnAddSizeProduct");

// const btnProductThumbnail = document.querySelector("#product_thumbnail");
// if (btnProductThumbnail) {
//   btnProductThumbnail.addEventListener("input", (e) => {
//     const [file] = btnProductThumbnail.files;
//     const preview_thumbnail = document.querySelector(".preview-thumbnail img");
//     preview_thumbnail.src = URL.createObjectURL(file);
//   });
// }
// function createThumbnail(src, alt, srcset) {
//   const thumbnailWrapper = document.createElement("div");
//   thumbnailWrapper.classList.add("col-4"); // Add col4 class for four-column layout

//   const thumbnailElement = document.createElement("img");
//   thumbnailElement.classList.add("preview-thumbnail-more", "preview-thumbnail");
//   thumbnailElement.setAttribute("src", URL.createObjectURL(src));
//   thumbnailElement.setAttribute("alt", alt);

//   if (srcset) {
//     thumbnailElement.setAttribute("srcset", srcset);
//   }

//   thumbnailWrapper.appendChild(thumbnailElement);
//   return thumbnailWrapper;
// }

// const btnMoreThumbnail = document.querySelector(".add-more-thumbnail");
// btnMoreThumbnail.addEventListener("input", (e) => {
//   const file = btnMoreThumbnail.files;
//   const pa = document.querySelector(".form-add-more-thumbnail");

//   for (let index = 0; index < file.length; index++) {
//     const element = file[index];
//     const thumbnail1 = createThumbnail(element);
//     pa.appendChild(thumbnail1);
//   }

//   // Example usage:
// });
// // if (btnAddSizeProduct)
// //   btnAddSizeProduct.addEventListener("click", function () {
// //     const product_size = document.querySelector("#product-size");
// //     const product_stock = document.querySelector("#product-stock");
// //     const col1 = document.createElement("div");
// //     col1.classList.add("col-md-5");
// //     const col2 = document.createElement("div");
// //     col2.classList.add("col-md-5");
// //     const col3 = document.createElement("div");
// //     col3.classList.add("col-md-2");

// //     const formGroup1 = document.createElement("div");
// //     formGroup1.classList.add("form-group");
// //     formGroup1.classList.add("al");

// //     const formGroup2 = document.createElement("div");
// //     formGroup2.classList.add("form-group");

// //     const sizeLabel = document.createElement("label");

// //     sizeLabel.textContent = "Size: ";
// //     const sizeInput = document.createElement("input");
// //     sizeInput.setAttribute("name", "size");
// //     sizeInput.classList.add("form-control");

// //     const stockLabel = document.createElement("label");
// //     stockLabel.textContent = "stock: ";
// //     const stockInput = document.createElement("input");
// //     stockInput.setAttribute("name", "stock");

// //     stockInput.classList.add("form-control");

// //     const sizeSpan = document.createElement("span");
// //     const stockSpan = document.createElement("span");
// //     const spanErrorProductSize = document.getElementById("productSizeError");
// //     if (
// //       hasLetters(product_size.value) == true &&
// //       hasLetters(product_stock.value) == true
// //     ) {
// //       sizeInput.value = product_size.value;
// //       stockInput.value = product_stock.value;
// //       product_size.value = "";
// //       product_stock.value = "";
// //       const btnDelete = document.createElement("button");
// //       btnDelete.textContent = "Delete";
// //       btnDelete.classList.add("btn");
// //       btnDelete.classList.add("btn-danger");
// //       btnDelete.classList.add("btnDeleteSizeProduct");
// //       btnDelete.setAttribute("type", "button");

// //       formGroup1.appendChild(sizeLabel);
// //       formGroup1.appendChild(sizeInput);

// //       formGroup1.appendChild(sizeSpan);
// //       formGroup2.appendChild(stockLabel);
// //       formGroup2.appendChild(stockInput);

// //       formGroup2.appendChild(stockSpan);

// //       col1.appendChild(formGroup1);
// //       col2.appendChild(formGroup2);
// //       col3.appendChild(btnDelete);
// //       col3.classList.add("pt-4");

// //       const row = document.createElement("div");
// //       row.classList.add("row");
// //       row.appendChild(col1);
// //       row.appendChild(col2);
// //       row.appendChild(col3);

// //       const sps1 = document.getElementById("SizePriceStock");

// //       sps1.insertAdjacentElement("afterend", row);
// //       spanErrorProductSize.textContent = "";
// //     } else {
// //       spanErrorProductSize.textContent = "Vui lòng nhập kiểu dữ liệu số!";
// //     }
// //   });

// const btnDelete1 = document.querySelectorAll(".btnDeleteSizeProduct");
// if (btnDelete1) {
//   btnDelete1.forEach((element) => {
//     element.addEventListener("click", () => {
//       element.parentNode.parentNode.remove();
//     });
//   });
// }
// // Onchange for price input
// const btnProductPrice = document.querySelector(".form-group #product_price");
// const spanErrorProductPrice = document.getElementById("productPriceError");
// btnProductPrice.addEventListener("input", () => {
//   if (hasLetters(btnProductPrice.value) == false) {
//     spanErrorProductPrice.textContent = "Vui lòng nhập đúng định dạng!";
//   } else {
//     spanErrorProductPrice.textContent = "";
//   }
// });

// const btnRadios = document.querySelectorAll('input[name="flexRadioDefault1"]');
// btnRadios.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     console.log(btnRadios); //
//   });
// });
