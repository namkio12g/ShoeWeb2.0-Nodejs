// Form-search
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
