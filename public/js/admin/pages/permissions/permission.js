const addbtn=document.querySelector("[btn-add-role]")

const roleInTable = document.querySelectorAll("[role-id]")
if(roleInTable){
    roleInTable.forEach((ele, index) => {
        const permisionTr = document.querySelectorAll("[data-name]")
        const rolePermissions = ele.getAttribute("role-permissions")
        permisionTr.forEach((item) => {
            const dataName = item.getAttribute("data-name")
            const checkboxs = item.querySelectorAll("input[type='checkbox']")
            if (rolePermissions.includes(dataName)) {
                checkboxs[index].checked=true
            }
        })
        })
}


addbtn.addEventListener("click",()=>{
    let roles=[]
    roleInTable.forEach((ele,index)=>{
        const permisionTr=document.querySelectorAll("[data-name]")
        const id=ele.getAttribute("role-id")
        let permissions=[]
        permisionTr.forEach((item)=>{
            const dataName=item.getAttribute("data-name")
            const checkboxs=item.querySelectorAll("input[type='checkbox']")
            if(checkboxs[index].checked){
                permissions.push(dataName)
            }
        })
        roles.push({id:id,permissions:permissions})
    })
    console.log("???")
    fetch("/admin/roles/change-permissions",{
        headers: {
            "Content-Type": "application/json"
        },
        method:"PATCH",
        body:JSON.stringify({roles})
    }).then((res)=>{
        window.location.reload()
    })
})