let btns = document.querySelectorAll("button");
let inpEL = document.querySelector("input");

for (let item of btns) {
  item.addEventListener("click", function (e) {
    let btnText = e.target.innerText;
    if (btnText === "AC") {
      inpEL.value = "";
    } else if (btnText === "=") {
      try {
        inpEL.value = eval(inpEL.value);
      } catch (e) {
        // console.log(e);
        inpEL.value = "GIAN HAI AAP";
      }
    } else {
      inpEL.value += btnText;
    }
  });
}

// ------------------

// let inpEl = document.querySelector("input");
// let ul = document.querySelector("ul");

// inpEl.addEventListener("keydown", function (e) {
//   let li = document.createElement("li");
//   li.innerHTML = inpEl.value;
//   if (e.which === 72) {
//     console.log("i am H");
//     // ul.append(li);
//   }
// });
