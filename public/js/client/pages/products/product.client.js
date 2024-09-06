// import "../../components/rangePrice";
import "../../common/pagination.client";
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
