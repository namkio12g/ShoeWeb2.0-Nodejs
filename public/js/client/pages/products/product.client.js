import "../../components/rangePrice";
import "../../common/pagination.client";
//++++++++++++++++++++++Product-Detail++++++++++++++++++++++++++++=
const btn2 = document.querySelectorAll(".cart-product__img");
var siz4;
btn2.forEach((element) => {
  element.addEventListener("click", (e) => {
    var url = new URL(document.location.href);
    const newPath = element.getAttribute("path");

    // const newPath = url.href + element.getAttribute("path");
    // form.action = newPath;

    // form.submit();
    // url.searchParams.set("range", element.value);
    document.location.href = newPath;
  });
});
