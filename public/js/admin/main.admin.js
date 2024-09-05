const { default: tinymce } = require("tinymce");
``
// Form-search
if(tinymce){
tinymce.init({
  selector: 'textarea#long_description'
});}
const form_search = document.querySelector(".form-search");
if (form_search) {
  form_search.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = new URL(document.location.href);
    const keyword = e.target.elements.keyword.value;
    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }
    document.location.href = url.href;
  });
}
// alert hiddin button
const Alert = document.querySelector('.alert-boxshowing')
const icon = document.querySelector('icon')
if(Alert){
const timeout = setTimeout(() => {
  Alert.classList.add('alert-box-hidden');

}, 2500)
}
if(icon){
icon.addEventListener('click', function () {
  // Toggle the class that hides the alert box
  Alert.classList.add('alert-box-hidden');
  
});}
// sign out button
const signOutBtn = document.querySelector("[signOut-button]")
signOutBtn.addEventListener("click",()=>{
  fetch("/admin/login/signOut",{
    headers:{"Content-Type":"application/json"}
    ,method:"PATCH",
  }).then(res=>{
    if(res.ok)
    window.location.href="/admin/login/"
  })
})
