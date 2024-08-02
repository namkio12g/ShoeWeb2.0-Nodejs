const Swal = require('sweetalert2')
const loginForm=document.querySelector("#login-form")
const userInp = document.querySelector(".username-input")

const pwInp = document.querySelector(".password-input")

const warningTxt = document.querySelector(".warning-text")
const signUpForm = document.querySelector("#signUp-form")

if (signUpForm) {
    signUpForm.addEventListener('submit', async (e) => {

        e.preventDefault();
        const pass= document.querySelector(".pass-input")
        const rePass = document.querySelector(".rePass-input")
        const formData = new FormData(signUpForm);
        const data = new URLSearchParams(formData);
        let password = formData.get("password");
        let email = formData.get("email");
        let rePassword = formData.get("rePassword");

        var response;   
        if(password==rePassword){

            response = await fetch('/login/signUp', {
                method: 'PATCH',
                body: data,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const res = await response.json(); // Parse JSON response



            if (res.success) {
                // Swal.fire({
                //     icon: "success",
                //     title: res.message,
                //     text: "Login success",
                //     timer: 2000,
                //     showConfirmButton: false
                // }).then(function () {
                    // window.location = `/verification/?email=${email}&accountId=${res.accountId}`;
                // });
                let reason="verification"
                // let accountId=res.accountId
                    fetch('/verification/sendOtp', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        
                    })
                window.location = `/verification/?reason=${reason}`;

                   
            } else {
                warningTxt.innerHTML = res.message;
                warningTxt.classList.add('display-block');
                userInp.value = "";
                pwInp.value = "";
            }
    }
    else{
        warningTxt.classList.add('display-block');
        warningTxt.innerHTML = "Password and Confirm password is not the same!"
        pass.value="";
        rePass.value="";
        pass.focus({
            focusVisible: true
        });
    }
    })

}

if (loginForm){

    loginForm.addEventListener('submit', async (e)=>{
        
        e.preventDefault();
        const formData = new FormData(loginForm);
        const data=new URLSearchParams(formData);
        const response=await fetch('/login/signIn',{
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


        console.log(res.success)
        
            if(res.success){
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Login success",
                    timer:1500,
                    showConfirmButton: false
                }).then(function () {
                    window.location = "/";
                });
            }
            else{
                warningTxt.classList.add('display-block');
                userInp.value="";
                pwInp.value="";
            }
        })
}