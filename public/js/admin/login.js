const Swal = require('sweetalert2')
const loginForm=document.querySelector("#login-form")
const userInp = document.querySelector(".username-input")

const pwInp = document.querySelector(".password-input")

const warningTxt = document.querySelector(".warning-text")
const systeApp = require("../../../config/system.js");
if (loginForm){

    loginForm.addEventListener('submit', async (e)=>{
        
        e.preventDefault();
        const formData = new FormData(loginForm);
        const data=new URLSearchParams(formData);
        const response=await fetch(`${systeApp.prefixedAdmin}/login/signIn`,{
            method:'PATCH',
            body:data,
            headers:{
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }) 
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const res = await response.json(); // Parse JSON response
        console.log(response)
            if(res.success){
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Login success",
                    timer:1500,
                    showConfirmButton: false
                }).then(function () {
                    window.location = `${systeApp.prefixedAdmin}/dashboard/`;
                });
            }
            else{
                warningTxt.innerHTML=res.message
                warningTxt.classList.add('display-block');
          
            }
        })
}