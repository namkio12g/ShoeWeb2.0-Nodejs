// slide carousel
const slidercontent = document.querySelector(".slider-content");

if(slidercontent){
const sliderSelectItemWidth = slidercontent.querySelector(".slider-item").offsetWidth;
const sliderChilds = [...slidercontent.children]
let cardPerview = Math.round(slidercontent.offsetWidth / sliderSelectItemWidth)

sliderChilds.slice(-cardPerview).reverse().forEach(child => {
    slidercontent.insertAdjacentElement("afterbegin", child.cloneNode(true))
})
sliderChilds.slice(0, cardPerview).forEach(child => {
    slidercontent.insertAdjacentElement("beforeend", child.cloneNode(true))
})

let isDragging = false,
    startX, startScrollLeft;
const dragStart = (e) => {
    isDragging = true;
    slidercontent.classList.add("dragging");
    startX = e.pageX - slidercontent.offsetLeft;
    startScrollLeft = slidercontent.scrollLeft;


}
const dragging = (e) => {
    e.preventDefault();
    if (!isDragging) return;
    const x = e.pageX - slidercontent.offsetLeft;
    const walk = (x - startX) * 2
    slidercontent.scrollLeft = startScrollLeft - walk;
}
const dragStop = () => {
    isDragging = false;
    slidercontent.classList.remove("dragging")
}
const infiniteScroll = () => {
    if (slidercontent.scrollLeft === 0) {
        slidercontent.classList.add("no-smooth")
        slidercontent.scrollLeft = slidercontent.scrollWidth - (slidercontent.offsetWidth + 1)
        slidercontent.classList.remove("no-smooth")

    } else if (Math.ceil(slidercontent.scrollLeft) === slidercontent.scrollWidth - slidercontent.offsetWidth) {
        slidercontent.classList.add("no-smooth")
        slidercontent.scrollLeft = 1
        slidercontent.classList.remove("no-smooth")
    }
}
slidercontent.addEventListener("mousedown", dragStart)
slidercontent.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
slidercontent.addEventListener("scroll", infiniteScroll)




const nextIcon = document.querySelector(".next-icon");
nextIcon.addEventListener("click", () => {
    slidercontent.scrollLeft += sliderSelectItemWidth
})
const prevIcon = document.querySelector(".prev-icon");
prevIcon.addEventListener("click", () => {
    slidercontent.scrollLeft -= sliderSelectItemWidth
})
}
//const addForm = document.querySelector("#add-form")
const addForm = document.querySelectorAll("#add-form")
if (addForm) {
    addForm.forEach((item) => {
        item.addEventListener('submit', async (e) => {

            e.preventDefault();

            const formData = new FormData(item);
            const data = new URLSearchParams(formData);

            var response;

            response = await fetch('/cart/add', {
                method: 'POST',
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
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: res.message,
                    timer: 1000,
                    showConfirmButton: false
                }).then(function () {
                    location.reload();
                })

            } else {

                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: res.message,
                    timer: 1000,
                    showConfirmButton: false
                })
            }
        })
    })
}
