function showCode(demo_container) {
  document.getElementById(demo_container).classList.add("show-code");
}
function showComponent(demo_container) {
  document.getElementById(demo_container).classList.remove("show-code");
}
function extractHtmlString(element) {
  return element.outerHTML
    .replaceAll(" ", "&nbsp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\n", "<br>");
}
let allSourcesCode = document.querySelectorAll(".demo__control__source");
[...allSourcesCode].forEach((element) => {
  element.innerHTML = extractHtmlString(
    element.parentElement.querySelector(".demo__control__element")
  );
  hightLigther(element, "html");
});
