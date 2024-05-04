let el = document.querySelector("div");

// el.classList.add("sam");
// el.classList.add("kanak");
// el.classList.add("rahul");
// el.classList.add("swimming");
// el.classList.add("ac");
// -------------------------------

el.classList.add("sam", "kanak", "rahul", "swimming", "ac");

// ------------------------------
el.classList.remove("kanak", "sam", "swimming");

// ------------------------------
el.classList.toggle("sam");
// ------------------------------

console.log(el.classList.contains("sam"));
console.log(el.classList.contains("kanak"));
