// function sam() {}

// console.log(sam());

// -----------

// constructor functions -> new call -> create objects

// constructor functions
// function Sam() {}

// let out = new sam(); //objects
// console.log(out);

// -------------
//constructor
// function Person() {
//   this.naam = "samarth";
//   this.favColor = "black";
//   this.isMale = true;
//   this.age = 33;
// }

// let obj1 = new Person();
// console.log(obj1);

// ----------------

// function User(naam, umar, sahi) {
//   this.name = naam;
//   this.age = umar;
//   this.isMale = sahi;
// }

// let person1 = new User("Ronny", 25, true);
// console.log(person1); //object

// ---------------

// function User(naam, umar, sahi) {
//   this.name = naam;
//   this.age = umar;
//   this.isMale = sahi;
//   this.dance = function () {
//     console.log("pappu cant dance saala");
//   };
// }

// let person1 = new User("Ronny", 25, true);
// let person2 = new User("Renuka", 35, false);
// console.log(person1); //object
// console.log(person2);
// // ---
// // console.log(person2.name);
// // console.log(person2.age);
// // console.log(person2.dance());

// let obj = {}; //Object.prototype
// new obj(); // User.prototype = parent

// -------------

function User(naam, umar, sahi) {
  this.name = naam;
  this.age = umar;
  this.isMale = sahi;
}

User.prototype.dance = function () {
  console.log("pappu cant dance saala");
};

let person1 = new User("Ronny", 25, true);
person1.dance();
