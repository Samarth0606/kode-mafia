let redBtn = document.querySelector("#red");
let blueBtn = document.querySelector("#blue");
let greenBtn = document.querySelector("#green");

let body = document.querySelector("body");

redBtn.addEventListener("click", function () {
  body.style.backgroundColor = "red";
});

blueBtn.addEventListener("click", function () {
  body.style.backgroundColor = "blue";
});

greenBtn.addEventListener("click", function () {
  body.style.backgroundColor = "green";
});
