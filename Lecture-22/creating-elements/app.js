let divv = document.querySelector("div");

let h3 = document.createElement("h3");
let h4 = document.createElement("h4");
h3.innerText = "mai hu gian";
h4.innerText = "i am h4";

// appendChild
// divv.appendChild(h3);
// divv.appendChild(h4);
// ------
//1 element at a time
// divv.appendChild(h3, h4); //wrong ❌

// ---------------------
//multiple elements => at the last

// divv.append(h3);
// divv.append(h4);
// divv.append(h3, h4);

// ----------------------

// prepend => multi => start

// divv.prepend(h3, h4);

// before ,  after
