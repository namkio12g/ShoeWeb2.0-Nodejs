
// add more brand
const addbtn=document.querySelector('[add-button]')
addbtn.addEventListener("click",(e)=>{
    window.location.href="/admin/brands/add-new-brand"
})
 
// status search select
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

// delete button event
const btnDelete = document.querySelectorAll("[btn_delete]");
const confirmDialog = document.getElementById("confirmDialog");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
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
                const checkedBoxes = document.querySelectorAll('input[type="checkbox"][checkbox-item]:checked');
                if (checkedBoxes.length > 1) {
                    let multiItems = ""
                    checkedBoxes.forEach((item) => {
                        const categoryId = item.getAttribute("id_category");
                        multiItems += `${categoryId},`

                    })
                    console.log(multiItems)
                    fetch("/admin/brands/delete-multi", {
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
                    const id = element.getAttribute("id_category");
                    fetch("/admin/brands/delete", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "DELETE",
                        body: JSON.stringify({
                            id,
                        })
                    }).then(res => {
                        window.location.reload()
                    })
                }
            });
        });
    });
}
// status button event
const btnChangeStatus = document.querySelectorAll("[status-button]");
btnChangeStatus.forEach((element) => {
    element.addEventListener("click", (e) => {
        const id = element.getAttribute("id_category");
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"][checkbox-item]:checked');
        if (checkedBoxes.length > 1) {
            let multiItems = ""
            checkedBoxes.forEach((item) => {
                const status = item.parentNode.parentNode.querySelector("[status-button]").getAttribute("status")
                const idCategory = item.getAttribute("id_category");
                multiItems += `${idCategory}-${status == "active" ? "inactive" : "active"},`
            })
            fetch("/admin/brands/change-multi-status", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PATCH",
                body: JSON.stringify({
                    multiItems,
                })
            }).then(res => {
                window.location.reload()
            })
        } else {
            const status = element.getAttribute("status");
            const newStatus = status == "active" ? "inactive" : "active";
            fetch("/admin/brands/change-status", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PATCH",
                body: JSON.stringify({
                    id,
                    newStatus
                })
            }).then(res => {
                window.location.reload()
            })
            
        }

    });
});
// check box event
const checkboxItems = document.querySelectorAll("[checkbox-item]");
const checkboxAll = document.querySelector("[checkbox-all]");
console.log(checkboxAll)
if (checkboxAll) {
    checkboxAll.addEventListener("click", (e) => {
        if (checkboxAll.checked) {
            checkboxItems.forEach((item) => {
                if (!item.checked) {
                    item.checked = true
                }
            })
        } else {
            checkboxItems.forEach((item) => {
                if (item.checked) {
                    item.checked = false
                }
            })
        }

    })
}

if (checkboxItems) {
    checkboxItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (!item.checked) {
                checkboxAll.checked = false
            }
        })
    })
}
