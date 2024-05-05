let formEl = document.querySelector("form");
formEl.addEventListener("submit", function (event) {
  event.preventDefault(); //reload hone se rok dia
  console.log(event.target.elements);
  //   console.log(event.target.children[0].value);
  //   console.log(event.target.children[1].value);
  console.log(event.target.elements[0].value);
  console.log(event.target.elements[1].value);
});
