// ++++++++++++++++++++++++++Product-Page+++++++++++++++++++++++++++++++
// checkbox event
import "../../common/pagination.admin";
const checkboxItems=document.querySelectorAll("[checkbox-item]");
const checkboxAll = document.querySelector("[checkbox-all]");
if(checkboxAll){
  checkboxAll.addEventListener("click",(e)=>{
    if(checkboxAll.checked){
      checkboxItems.forEach((item) => {
        if (!item.checked) {
          item.checked = true
        }
      })
    }
    else{
       checkboxItems.forEach((item) => {
         if (item.checked) {
           item.checked = false
         }
       })
    }
   
  })
}

if(checkboxItems){
  checkboxItems.forEach((item) => {
    item.addEventListener("click",(e)=>{
      if(!item.checked){
        checkboxAll.checked=false
      }
    })
  })
}


// Event Search-Status
var url = new URL(document.location.href);
const selectElement = document.getElementById("comboboxChangeStatus");
if (selectElement) {
  selectElement.addEventListener("change", () => {
    const selectedIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedIndex];
    if (selectedOption.value != "") {
      url.searchParams.set("status", selectedOption.value);
    } else {
      url.searchParams.delete("status");
    }
    document.location.href = url.href;
  });
}
// Event Product Detail
const btn2 = document.querySelectorAll(".product-img");
var siz4;
btn2.forEach((element) => {
  element.addEventListener("click", (e) => {
    var url = new URL(document.location.href);
    const newPath = element.getAttribute("path");

    // const newPath = url.href + element.getAttribute("path");
    // form.action = newPath;

    // form.submit();
    // url.searchParams.set("range", element.value);
    document.location.href = newPath;
  });
});
// Product Detail
const detail_Btn = document.querySelectorAll("[btn-data-detail]");

detail_Btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const idProduct = element.getAttribute("id_product");
    // const form = document.querySelector("#form_detail");
    // const path = form.getAttribute("data_path");
    // console.log(path);
    // const newPath = path + `/${idProduct}`;
    // form.action = newPath;
    // form.submit();
    const url3 = new URL(document.location.href);
    if (idProduct) {
      url3.searchParams.set("idDetail", idProduct);
      document.location.href = url3.href;
    }
    // const formDetaiProduct = document.querySelector(".detail_wrapper");
    // formDetaiProduct.style.display = "block";
  });
});
// Event-close-form-detail
const detail_Btn_Close = document.querySelector("#closeFormDetail");
const url4 = new URL(document.location.href);
if (detail_Btn_Close) {
  detail_Btn_Close.addEventListener("click", (e) => {
    const tableProduct = document.querySelector(".tableProduct");

    const formDetaiProduct = document.querySelector(".detail_wrapper");
    formDetaiProduct.style.display = "none";
    tableProduct.style.width = "100%";

    url4.searchParams.delete("idDetail");
    window.history.pushState({}, "", url4);

    // document.location.href = url4.href;
  });
}

// Change status product
const btnChangeStatus = document.querySelectorAll("[status-button]");
btnChangeStatus.forEach((element) => {
  element.addEventListener("click", (e) => {
    const idProduct = element.getAttribute("id_product");
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"][checkbox-item]:checked');
    if(checkedBoxes.length>1){
      let multiItems = ""
      checkedBoxes.forEach((item)=>{
        const status = item.parentNode.parentNode.querySelector(".btnStatusProduct").getAttribute("status")
        const productId = item.getAttribute("id_product");
        multiItems += `${productId}-${status == "active" ? "inactive" : "active"},`
      })
      fetch("/admin/products/change-muilti-status",{
        headers:{"Content-Type":"application/json"},
        method:"PATCH",
        body:JSON.stringify({
          multiItems,
        })
      }).then(res=>{
        window.location.reload()
      })
    }
    else{
      const status = element.getAttribute("status");
      const newStatus = status == "active" ? "inactive" : "active";

      const form = document.querySelector("#form_change_status");
      const path = form.getAttribute("data_path_changestatus");
      console.log(path);
      const newPath = path + `/${newStatus}/${idProduct}?_method=PATCH`;
      form.action = newPath;

      form.submit();
    }
    
  });
});
//  Delete Products

const btnDelete = document.querySelectorAll("[btn_delete]");
const confirmDialog = document.getElementById("confirmDialog");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
console.log("btnDelete");

if (btnDelete.length != 0) {
  btnDelete.forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log("Vogn");
      confirmDialog.style.display = "block"; // Hiển thị dialog
      cancelBtn.addEventListener("click", () => {
        confirmDialog.style.display = "none"; // Hiển thị dialog
      });

      confirmBtn.addEventListener("click", () => {
        confirmDialog.style.display = "none"; // Hiển thị dialog
        const idProduct = element.getAttribute("id_product");
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"][checkbox-item]:checked');
        if (checkedBoxes.length > 1) {
          let multiItems = ""
          checkedBoxes.forEach((item) => {
            const productId = item.getAttribute("id_product");
            multiItems +=`${productId},`
          
          })
          console.log(multiItems)
          fetch("/admin/products/delete-multi", {
            headers: {
              "Content-Type": "application/json"
            },
            method: "DELETE",
            body: JSON.stringify({
              multiItems,
            })
          }).then(res => {
            window.location.reload()
          })
        } else {
        confirmDialog.style.display = "none"; // Hiển thị dialog
        const idProduct = element.getAttribute("id_product");
        const form = document.querySelector("#form_delete_product");
        const path = form.getAttribute("data_path_delete");
        const newPath = path + `/${idProduct}?_method=DELETE`;
        form.action = newPath;
        form.submit();
          }
      });
    });
  });
}
