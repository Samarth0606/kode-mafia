// let h1 = document.getElementsByTagName("h1"); //array
// console.log(h1);

// -------------

// let dom = document.getElementById("dom"); //single
// console.log(dom);

// --------------

// let classes = document.getElementsByClassName("divv"); //array
// console.log(classes);

// -----------

// console.log(document.querySelector("h1")); //single
// console.log(document.querySelector(".divv")); //single
// console.log(document.querySelector("#dom")); //single

// -----

// console.log(document.querySelectorAll("h1")); //array
// console.log(document.querySelectorAll(".divv")); //array
// console.log(document.querySelectorAll("#dom")); //array

// ---------------------

// let h1 = document.getElementsByTagName("h1"); //array

// h1[0].style.color = "red";
// h1[1].style.color = "orange";

// // -----

// for (let item of h1) {
//   item.style.fontSize = "100px";
// }

// -----------------

// let idd = document.getElementById("dom"); //single
// idd.style.backgroundColor = "yellow";

// -------------

let classes = document.getElementsByClassName("divv");

// classes[0].style.color = "aqua";

// for (let item of classes) {
//   item.style.fontSize = "80px";
//   item.style.color = "red";
// }

// for (let item of classes) {
//   item.style.cssText = `
//   color:red;
//   font-size:50px;
//   background-color:yellow
//   `;
// }
// --------------------------

// let el = document.querySelector("h1");
//getters
// console.log(el.innerText, "h1"); //brainful
// console.log(el.textContent, "h2"); //brainless
// console.log(el.innerHTML, "h3"); //brainless

//setters
// el.innerText = "sam";
// el.textContent = "samarth vohra";

// -----

//setters
// el.innerText = "<h1>sam</h1>";
// el.textContent = "<h1>samarth vohra</h1>";
// el.innerHTML = "<i>vohra</i>";

// ------------------------

let an = document.querySelector("a");

//getter
// console.log(an.getAttribute("href"));
//setter ❌
// an.getAttribute("href", "http://reddit.com");

// ------

an.setAttribute("href", "http://reddit.com");
