function showCode(demo_container) {
  document.getElementById(demo_container).classList.add("show-code");
}
function showComponent(demo_container) {
  document.getElementById(demo_container).classList.remove("show-code");
}
function extractHtmlString(element) {
  const getMinSpaces = (lines) => {
    let min;
    lines.forEach((line) => {
      if (!line) return;
      leftSpaces = line.split("<")[0];
      var matches = leftSpaces.match(/ /g);
      if (!min) min = matches?.length;
      else if (matches < min) min = matches.length;
    });
    return min;
  };
  var minSpaces = getMinSpaces(element.innerHTML.split("\n"));
  return element.innerHTML
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\n", "<br>")
    .split("<br>")
    .filter((line) => line && line.replaceAll(" ", "").length > 0)
    .map((line) => (minSpaces > 2 ? line.substr(minSpaces) : line))
    .join("<br>")
    .replaceAll(" ", "&nbsp;");
}
function fullScreenDemo(element) {
  document
    .getElementById(element)
    .parentElement.classList.toggle("demo__fullscreen");
}
let allSourcesCode = document.querySelectorAll(".demo__control__source");
[...allSourcesCode].forEach((element) => {
  element.innerHTML = extractHtmlString(
    element.parentElement.querySelector(".demo__control__element")
  );
  hightLigther(element, "html");
});
