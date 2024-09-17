// import "../../components/rangePrice";
import "../../common/pagination.client";
//slider price js
const minRange = document.getElementById('minRange');
const maxRange = document.getElementById('maxRange');
const minValue = document.getElementById('minValue');
const maxValue = document.getElementById('maxValue');

minRange.addEventListener('input', updateValueMin);
maxRange.addEventListener('input', updateValueMax);

function updateValueMin() {

  if (parseInt(minRange.value) > parseInt(maxRange.value)) {
    minRange.value = maxRange.value;
  }

  minValue.textContent = (parseInt(minRange.value) * 10000000 / 100).toLocaleString();;
  maxValue.textContent = (parseInt(maxRange.value) * 10000000 / 100).toLocaleString();;
}

function updateValueMax() {
  if (parseInt(maxRange.value) < parseInt(minRange.value)) {
    maxRange.value = minRange.value;
  }
  minValue.textContent = (parseInt(minRange.value) * 10000000 / 100).toLocaleString();;
  maxValue.textContent = (parseInt(maxRange.value) * 10000000 / 100).toLocaleString();;
}
//++++++++++++++++++++++Product-filter++++++++++++++++++++++++++++=
// const form_search = document.querySelector(".form-search");
// if (form_search) {
//   form_search.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const url = new URL(document.location.href);
//     const keyword = e.target.elements.keyword.value;
//     if (keyword) {
//       url.searchParams.set("keyword", keyword);
//     } else {
//       url.searchParams.delete("keyword");
//     }
//     document.location.href = url.href;
//   });
// }
const checkBox = document.querySelectorAll("input[type='checkbox']");
checkBox.forEach((item)=>{
  item.addEventListener("click",()=>{
    const url = new URL(document.location.href);

    if(item.checked){
      url.searchParams.append(item.getAttribute("filter-name"), item.getAttribute("filter-data"));

    }
    else{
      url.searchParams.delete(item.getAttribute("filter-name"), item.getAttribute("filter-data"))
    }
    document.location.href = url.href;
  })
})
const rangeBtn = document.querySelector(".range-button");

rangeBtn.addEventListener("click",()=>{
  const url = new URL(document.location.href);
  url.searchParams.delete("prices");
  url.searchParams.append("prices", maxValue.textContent.replace(/,/g, ''));
  url.searchParams.append("prices", minValue.textContent.replace(/,/g, ''));
  document.location.href = url.href;


})
//++++++++++++++++++++++Product-Detail++++++++++++++++++++++++++++=
const filterBlock = document.querySelectorAll(".filter-block-collapse");
filterBlock.forEach((element) => {
  const filterTitle = element.querySelector(".filter-title");
  const filterCollapse = element.querySelector(".filter-collapse");
  filterTitle.addEventListener("click", (e) => {

      filterCollapse.classList.toggle("filter-collapse-active")
      filterTitle.classList.toggle("filter-title-active")
  });
});
//Filter Button
const filterButton = document.querySelector('.filter-button');
const filterMenu = document.querySelector('.filter-menu');
filterButton.addEventListener("click",()=>{

  filterMenu.classList.toggle("filter-menu-active")
})





