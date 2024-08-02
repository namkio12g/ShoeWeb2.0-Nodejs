const account = require("../../../model/account.model");
const Swal = require('sweetalert2')
const inputs = document.querySelectorAll(".verification-input")
const button= document.querySelector(".verification-button")
const cancelButton = document.querySelector(".cancel-button")
cancelButton.addEventListener("click",()=>{
    window.location="/"
})
button.addEventListener("click",async (e)=>{
    let code='';
    inputs.forEach(input => {
        code+=input.value
    })
    

    if(reason==="verification"){
        console.log(accountId)
        const response=await fetch("/login/verified",{
             method: 'PATCH',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                     accountId,
                     code
                 }),
        })
        const res = await response.json();
        if(res.success){
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Verify success",
                    timer:1500,
                    showConfirmButton: false
                }).then(function () {
                    window.location = "/";
                });
        }
        else{
             Swal.fire({
                 icon: "warning",
                 title: "Fail",
                 text: res.message,
                 showConfirmButton: true
             })
        }
    }
    
})
inputs.forEach(input=>{

    let lastInputStatus=0;
    input.onkeyup = (e)=>{
        const currInp=e.target;
        const nextInp=input.nextElementSibling;
        const prevInp=input.previousElementSibling;
        if(prevInp && e.keyCode===8){
            console.log("8")
            if(lastInputStatus===1  ){
            console.log("1")

                prevInp.value="";
                prevInp.focus();
            }
            button.disabled = true
            lastInputStatus=1
        }else{
            const reg =/^[0-9]+$/
            if(!reg.test(currInp.value))
                currInp.value = currInp.value.replace(/\D/g,"")
            else if(currInp.value){
                if(nextInp)
                    nextInp.focus()
                else
                    button.disabled = false
                    lastInputStatus=0;
            }
        }
    }
})
