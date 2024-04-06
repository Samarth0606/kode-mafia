// let person = {}
// let person = {
//   naam: "salman khan",
//   umar: 55,
//   //   methods
//   dance: function () {
//     console.log("mai hu dancer");
//   },
// };

// console.log(person.naam);
// console.log(person.umar);
// console.log(person.dance);
// console.log(person.dance());
// console.log(person.sallu()); //wronng
// console.log(sallu()); //wrong

// -----------------------

// let marks = {
//   web: 100,
//   dsa: 19,
//   python: 50,

//   total: function () {
//     console.log(marks.web + marks.dsa + marks.python);
//     return marks.web + marks.dsa + marks.python;
//   },
// };

// let out = marks.total();
// console.log(out);

// -----------------

let marks = {
  web: 100,
  dsa: 19,
  python: 50,

  total: function () {
    console.log(this);
    return this.web + this.dsa + this.python;
  },
};

let out = marks.total();
console.log(out);
