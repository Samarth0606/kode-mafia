let btn = document.querySelector("button");

function boss() {
  console.log("chaanta marunga");
}

function slap() {
  console.log("laal krdia");
}
// btn.onclick = boss;
// btn.onclick = slap;

// -----------------------------

btn.addEventListener("click", boss);
btn.addEventListener("click", slap);
