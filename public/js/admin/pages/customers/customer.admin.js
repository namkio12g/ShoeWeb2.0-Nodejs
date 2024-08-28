const confirmDialog = document.getElementById("confirmDialog");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const deleteBtn = document.querySelectorAll("[btn_delete]")
const detailBtns = document.querySelectorAll("[btn_detail]")
const changeStatusBtns = document.querySelectorAll(".btnStatus")
const detail_Btn_Close = document.querySelector(".btnCloseDetail");
detailBtns.forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log("ádasd")
        const id = element.getAttribute("id_customer");
        // const form = document.querySelector("#form_detail");
        // const path = form.getAttribute("data_path");
        // console.log(path);
        // const newPath = path + `/${idProduct}`;
        // form.action = newPath;
        // form.submit();
        const url3 = new URL(document.location.href);
        if (id) {
            url3.searchParams.set("idDetail", id);
            document.location.href = url3.href;
        }
        // const formDetaiProduct = document.querySelector(".detail_wrapper");
        // formDetaiProduct.style.display = "block";
    });
});

const url4 = new URL(document.location.href);
if (detail_Btn_Close) {
    detail_Btn_Close.addEventListener("click", (e) => {
        const table = document.querySelector(".tableProduct");

        const formDetail = document.querySelector(".detail_wrapper");
        formDetail.style.display = "none";
        table.style.width = "100%";

        url4.searchParams.delete("idDetail");
        window.history.pushState({}, "", url4);

        // document.location.href = url4.href;
    });
}




if (changeStatusBtns.length != 0) {
    changeStatusBtns.forEach((item) => {
        item.addEventListener("click", (e) => {
            const id = item.getAttribute("id_customer");
            const status = item.getAttribute("status");

            const form = document.querySelector("#form-change_status");
            const newstatus = status === "active" ? "inactive" : "active";
            console.log(status);
            const path = form.getAttribute("path_data");
            form.action = path + `/${newstatus}/${id}?_method=PATCH`;
            form.submit();
        })
    })
}

// if(detailBtn.length!=0){
//     detailBt.forEach((item)=>{
//         item.addEventListener("click",(e)=>{
//             const id=item.getAttribute("id_product");
//             const form=document.querySelector("#form-detail")
//             const path=form.getAttribute("path_data");
//             form.action=path+`/${id}?_method=`;
//         })
//     })
// }




if (deleteBtn.length != 0) {
    deleteBtn.forEach((item) => {
        item.addEventListener("click", (e) => {
            confirmDialog.style.display = "block";
            cancelBtn.addEventListener("click", () => {
                confirmBtn.style.display = "none"
            });

            confirmBtn.addEventListener("click", () => {
                confirmBtn.style.display = "none";
                const id = item.getAttribute("id_product");
                const formDetele = document.querySelector("#form-delete");
                const path = formDetele.getAttribute("path_data");
                const newpath = path + `/${id}?_method=DELETE`;
                formDetele.action = newpath;
                formDetele.submit();

            });
        });



    });

}