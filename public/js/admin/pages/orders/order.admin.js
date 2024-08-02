import "../../common/pagination.admin";
// +++++++++++++++++++++++++++Order-Page+++++++++++++++++++++++++++++++
// Delete Order
const btnDeleteOrder = document.querySelectorAll("[btn_delete_order]");
if (btnDeleteOrder.length != 0) {
  btnDeleteOrder.forEach((element) => {
    element.addEventListener("click", (e) => {
      confirmDialog.style.display = "block"; // Hiển thị dialog
      cancelBtn.addEventListener("click", () => {
        confirmDialog.style.display = "none"; // Hiển thị dialog
      });

      confirmBtn.addEventListener("click", () => {
        confirmDialog.style.display = "none"; // Hiển thị dialog
        const idProduct = element.getAttribute("id_order");
        const form = document.querySelector("#form_delete_order");
        const path = form.getAttribute("data_path_delete");
        const newPath = path + `/${idProduct}?_method=DELETE`;
        form.action = newPath;
        form.submit();
      });
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
