// selection
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", function (e) {
  let li = document.createElement("li");

  li.innerText = inp.value;
  ul.appendChild(li);
  li.addEventListener("click", function (e) {
    // li.style.color = "red";
    li.remove();
  });

  inp.value = "";
});

// console.dir(ul);

// btn.onclick = function () {
//   console.log("hi");
// };
// ul.onclick = function () {
//   console.log("hi");
// };
