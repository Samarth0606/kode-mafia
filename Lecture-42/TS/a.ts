
// let a = 10; //inference
// let a:number = 10; 

// a = false ❌
// a = 20 ✅

// ---------------

// let b:string = "true"
// b= "lol"

// --------------

// tuples

// let tup:[number , string , number] = [19,"sam",19];
// let tup2:[number , string , number] = ["sam",109,19]; //❌

// --------------

// function sam(a:number,b:number){
//     return a+b
// }

// sam(10,20)

// --------------

// function sam(a:number,b:number):number{
//     return a+b
// }

// sam(10,20)

// ---------------


// function a(fn: ()=>string ):boolean{
//     console.log("inside a");
//     return true
// }

// function b():string{
//     console.log('i am b')
//     return "10"
// }

// a(b)

// ---------------

// let arr:number[] = [10,40,50];
// let arr2:string[] = ['10','40','50'];


// ---------------

// let user = {
//     name:"sam",
//     age:5,
//     isMale:true,
//     // email:'sam@gmail.com'
// }

// interface User{
//     name:string,
//     age:number,
//     isMale:boolean,
//     email?:string
// }

// function sam(user : User ):boolean{
//     if(user.age>=18){
//         return true
//     }else{
//         return false
//     }
// }
// sam(user)

// -----------------
// interface
// interface X{
//     email?:string,
//     age:number
// }
// interface Y extends X{
//     greet(phrase:string):void
// }

// // class Sam implements X{
// class Sam implements Y{
//     email:string;
//     age:number;
//     constructor(mail:string , umar:number){
//         this.email = mail;
//         this.age = umar;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.email}`)
//     }
// }
// let p1 = new Sam('sam@gmail.com' , 5);
// p1.greet('namaste')

// class Person extends Sam{}

// --------------------------------

// let user = {
//     name:"sam",
//     age:5,
//     isMale:true,
//     email:'sam@gmail.com'
// }
// type  User = {
//     name:string,
//     age:number,
//     isMale?:boolean,
//     email:string
// }
// function sam(user : User ):boolean{
//     if(user.age>=18){
//         return true
//     }else{
//         return false
//     }
// }
// sam(user)



// interface X{}
// interface Y extends X{}

// type X = {}
// type Y = X & {}


// interface X{}
// type Y = X & {} //intersection
// type Y = X | {} //intersection

// type X = {}
// interface Y extends X {}

// --------------------------

type X = {
    email?:string,
    age:number
}
// type Y =  X | { //reason for failure
type Y =  X & {
    greet(phrase:string):void
}

// class Sam implements X{
class Sam implements Y{
    email:string;
    age:number;
    constructor(mail:string , umar:number){
        this.email = mail;
        this.age = umar;
    }
    greet(phrase:string){
        console.log(`${phrase} from ${this.email}`)
    }
}
let p1 = new Sam('sam@gmail.com' , 5);
p1.greet('namaste')

class Person extends Sam{}



