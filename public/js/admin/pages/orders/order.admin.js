import "../../common/pagination.admin";
// +++++++++++++++++++++++++++Order-Page+++++++++++++++++++++++++++++++
//event search status
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
// Cancel Order
const btnDeleteOrder = document.querySelectorAll("[cancel-button]");
if (btnDeleteOrder.length != 0) {
  btnDeleteOrder.forEach((element) => {
    element.addEventListener("click", (e) => {
      confirmDialog.style.display = "block"; // Hiển thị dialog
      cancelBtn.addEventListener("click", () => {
        confirmDialog.style.display = "none"; // Hiển thị dialog
      });

      confirmBtn.addEventListener("click", () => {
        confirmDialog.style.display = "none"; // Hiển thị dialog
        const idOrder = element.getAttribute("id_order");
        // fetch("/admin/orders/cancel",{
        //   method:"POST",
        //   headers:{"Content-Type":"application/json"},
        //   redirect: 'follow',
        //   body: JSON.stringify({
        //     idOrder
        //   })
        // })
        const form = document.querySelector("#form_update");
        const path=form.getAttribute("data_path");
        const newPath = path + `/cancel/${idOrder}?_method=POST`;
        form.action = newPath;
        form.submit();
      });
    });
  });
}
// Change status of order
const statusBtn = document.querySelectorAll("[status-button]");
if (statusBtn.length != 0) {
  statusBtn.forEach((element) => {
    element.addEventListener("click", (e) => {

      const idOrder = element.getAttribute("id_order");
      const statusOrder = element.getAttribute("status_order");
      const form = document.querySelector("#form_update");
      const path = form.getAttribute("data_path")
      const newPath = path + `/update-status/${idOrder}/${statusOrder}?_method=POST`;
      form.action = newPath;
      form.submit();
    });
  });
}
// Order Detail
const detail_Btn_order = document.querySelectorAll("[btn-data-detail-order]");

detail_Btn_order.forEach((element) => {
  element.addEventListener("click", (e) => {
    const orderID = element.getAttribute("orderID");

    const url3 = new URL(document.location.href);
    const path = "/admin/orders/detail/" + orderID;
    document.location.href = path;
  });
});
