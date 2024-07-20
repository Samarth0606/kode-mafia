"use strict";
// let a = 10; //inference
// let a:number = 10; 
// class Sam implements X{
class Sam {
    constructor(mail, umar) {
        this.email = mail;
        this.age = umar;
    }
    greet(phrase) {
        console.log(`${phrase} from ${this.email}`);
    }
}
let p1 = new Sam('sam@gmail.com', 5);
p1.greet('namaste');
class Person extends Sam {
}
