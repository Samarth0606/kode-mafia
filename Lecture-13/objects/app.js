// let person = {}

// let person = {
//   // properties -> key : value
//   naam: "Pulkit bhaiya",
//   umar: 16,
//   favColor: "Orange",
//   salary: 10000000,
//   isMarried: "aneeko se",
// };

// console.log(person);

// dot operator
// console.log(person.umar);
// console.log(person.naam);

// console.log(person["naam"]);
// console.log(person["umar"]);

// --------------------

let person = {
  naam: "Pulkit bhaiya",
  umar: 16,
  favColor: "Orange",
  salary: 10000000,
};

console.log(person);

Object.freeze(person); //method

person.umar = 20;
person.isMarried = false;
delete person.umar;

console.log(person);
