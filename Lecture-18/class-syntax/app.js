//constructor

// function Person(naam, umar, favRang) {
//   this.name = naam;
//   this.age = umar;
//   this.favColor = favRang;
//   this.greet = function () {
//     return `hello from ${this.name}`;
//   };
// }

// let p1 = new Person("samarth", 34, "black");
// let p2 = new Person("rahul", 32, "pink");
// console.log(p1, p2);
// // console.log(p1.greet());

// ------

// ----------extra--------

// let str1 = "samarth vohra";
// let str2 = "from delhi";

// let out = "hi i am " + str1 + str2;
// let res = `hi i am ${str1} ${str2}`;
// console.log(out);

// function Person(naam, umar, favRang) {
//   this.name = naam;
//   this.age = umar;
//   this.favColor = favRang;
// }

// Person.prototype.greet = function () {
//   return `hello from ${this.name}`;
// };

// let p1 = new Person("samarth", 34, "black");
// let p2 = new Person("rahul", 32, "pink");
// console.log(p1, p2);
// console.log(p1.greet());
// console.log(p2.greet());

// -------------------------------------------
//class
// class Person2 {
//   constructor(naam, umar, favRang) {
//     this.name = naam;
//     this.age = umar;
//     this.favColor = favRang;
//   }
//   greeting() {
//     console.log(`hello from ${this.name}`);
//   }
//   goodbye() {
//     return `jaate jaate yad rakhna mera fav color is ${this.favColor}`;
//   }
// }
// let p3 = new Person2("sarthak", 19, "blue");
// let p4 = new Person2("mim", 19, "dark blue");
// console.log(p3);
// console.log(p3.greeting());
// console.log(p4.goodbye());

// --------------------------------------

// class Kammoji {
//   constructor(yaade, bhool) {
//     this.yaad = yaade;
//     this.bhool = bhool;
//   }
//   kaisiLadhkiHaiApp() {
//     console.log("mai itni gambeer baat kr rha hu aur aap hass rhi hai");
//   }
//   kediDuniyaToAayiMainuDasJa() {
//     console.log("oohoo mere pyare");
//   }
// }

// let k1 = new Kammoji(
//   "ki baar aaundi hai teri yaad",
//   "hum das tenu kidda bhul java ni"
// );
// console.log(k1);

// ------------
//bad syntax ❌
// class KammojiKaAshiq {
//   constructor(yaade, bhool) {
//     this.yaad = yaade;
//     this.bhool = bhool;
//     this.yaar = "rahul ki deewani";
//   }
//   kaisiLadhkiHaiApp() {
//     console.log("mai itni gambeer baat kr rha hu aur aap hass rhi hai");
//   }
//   kediDuniyaToAayiMainuDasJa() {
//     console.log("oohoo mere pyare");
//   }
//   kyakarrhiho() {
//     console.log("kuch nhi");
//   }
// }
// ------------

// class KammojiKaAshiq extends Kammoji {
//   constructor(yaade, bhool, email) {
//     this.email = email;
//   }
//   callMe() {
//     return `9560780335`;
//   }
// }

// let k2 = new KammojiKaAshiq("sam", "vohra" , "sam@gmail.com");

// ----------------------------------------------

class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  greeting() {
    console.log(`good morning from ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, email, subject) {
    super(name, age, email);
    this.subject = subject;
  }
  goodbye() {
    console.log(`byee from ${this.name}`);
  }
  greeting() {
    console.log(`chala ja brother from ${this.name}`);
  }
}

let newStudent1 = new Student("sam", 32, "sam@gmail.com", "web");
newStudent1.goodbye();
newStudent1.greeting();

// -------------------
