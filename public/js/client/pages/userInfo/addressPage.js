const updateAddressBtns = document.querySelectorAll(".updateAddress-btn");
const setDefaultBtns = document.querySelectorAll(".setDefault-btn");
const updateForm = document.querySelector("#updateAddressForm")
const selected = document.querySelector(".address-selection")
selected.classList.add('selected');
setDefaultBtns.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        const idAddress=btn.dataset.addressId;
        fetch("/user/setDefault",{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                idAddress:idAddress
            })
        }

        )
            window.location.reload();
        
    })
})
updateAddressBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const cityInp=updateForm.querySelector(".city-input");
        const districtInp = updateForm.querySelector(".district-input");
        const communeInp = updateForm.querySelector(".commune-input");
        const streetInp = updateForm.querySelector(".street-input");
        const idInp = updateForm.querySelector(".id-input")
        const addressArray=btn.dataset.addressLocation.split(",");
        streetInp.value=addressArray[0];
        communeInp.value = addressArray[1];
        districtInp.value = addressArray[2];
        cityInp.value = addressArray[3];
        idInp.value = btn.dataset.addressId;
        $('#updateAddressModal').modal('toggle');


    })
})