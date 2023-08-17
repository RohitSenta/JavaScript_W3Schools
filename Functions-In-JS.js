// Functions In JavaScript
console.log("Functions In JavaScript \n\n");
console.log("\n");

function mulFunc(a, b) {
    return a * b;
}
let ans = mulFunc(5, 3);
console.log("Multiplication Of 5 * 3 =", ans);
console.log("================================================");
console.log("\n\n");



// Arrow Functions
console.log("Arrow Functions In JavaScript \n\n");
let arrowFunc = function () {
    console.log("This is an Arrow Function \n\n");
}
arrowFunc();

let add = (x, y) => {
    return x + y;
}
console.log("Addition of 2 numbers :", add(5, 5));
console.log("================================================");
console.log("\n\n");



// Function Default Parameters
console.log("Default Parameters \n\n");
function myFunction1 (a, b) {
    if(b === undefined){
        b = 5;
    }
    return a * b;
}
console.log("Ans (a * b) =", myFunction1(5));
console.log("================================================");
console.log("\n\n");



// Function Rest Parameters
console.log("Function Rest Parameters \n\n");
function sum(...args){
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
}
let x = sum(4, 5 ,8, 10, 12, 15);
console.log("sum of array :", x);
console.log("================================================");
console.log("\n\n");



// Function To Find Max Number
console.log("Function To Find Max Number \n\n");
function findMax(arr) {
    let max = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let arr = [5, 4, 9, 3, 2, 1, 0, 8, 7, 6];
console.log("Max Number :", findMax(arr));
console.log("================================================");
console.log("\n\n");



// Global Variables
console.log("Global Variables \n\n");
function Func1() {
    return this
}
let x1 = new Func1();
console.log("Global Variable - this :", x1);
console.log("================================================");
console.log("\n\n");


// Invoking functions as a method
console.log("Invoking functions as a method \n\n");
const obj = {
    firstName: "Rohit",
    lastName: "Senta",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(obj.fullName());
console.log("================================================");
console.log("\n\n");


const obj2 = {
    firstName: "Rohit",
    lastName: "Senta",
    fullName: function () {
        return this;
    }
}
console.log(obj2.fullName());
console.log("================================================");
console.log("\n\n");


// Invoking a Function with Function Constructor
console.log("Invoking a Function with Function Constructor \n\n");
function myName(arg1, arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}
const myObj = new myName("Rohit", "Senta");

console.log(myObj.firstName);
console.log(myObj.lastName);
console.log("================================================");
console.log("\n\n");



// Function call() Method
console.log("Function call() Method \n\n");

const Person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const Person1 = {
    firstName: "Rohit",
    lastName: "Senta"
}
const Person2 = {
    firstName: "Apna",
    lastName: "College"
}
console.log("Person1 =", Person.fullName.call(Person1));
console.log("Person2 =", Person.fullName.call(Person2));
console.log("\n\n");


// Function Call() Method With Arguments
const newPerson = {
    fullName: function(city, state) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + state;  
    }
}
const PersonA = {
    firstName: "Vishwa",
    lastName: "Patel"
}
const PersonB = {
    firstName: "Mamta",
    lastName: "Bholani"
}

let p1 = newPerson.fullName.call(PersonA, "Ahmedabad", "Gujarat");
console.log("Person A =", p1);
let p2 = newPerson.fullName.call(PersonB, "Bhavnagar", "Gujarat");
console.log("Person B =", p2);
console.log("================================================");
console.log("\n\n");



// Fuction apply() Method
console.log("Fuction apply() Method \n\n");

const personNew1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const PersonN1 = {
    firstName: "Rohit",
    lastName: "Senta"
}
const PersonN2 = {
    firstName: "Apna",
    lastName: "College"
}
console.log("PersonN1 =", Person.fullName.apply(Person1));
console.log("PersonN2 =", Person.fullName.apply(Person2));
console.log("\n\n");

// Function Apply() Method With Arguments
const newPerson1 = {
    fullName: function(city, state) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + state;  
    }
}
const PersonNa = {
    firstName: "Vishwa",
    lastName: "Patel"
}
const PersonNb = {
    firstName: "Mamta",
    lastName: "Bholani"
}

let p1N = newPerson.fullName.apply(PersonNa, ["Ahmedabad", "Gujarat"]);
console.log("Person A =", p1N);
let p2N = newPerson.fullName.apply(PersonNb, ["Bhavnagar", "Gujarat"]);
console.log("Person B =", p2N);
console.log("================================================");
console.log("\n\n");



// Function Borrowing bind() Method
console.log("Function Borrowing bind() Method \n\n");
const pNew1 = {
    firstName: "Rohit",
    lastName: "Senta",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const pNew2 = {
    firstName: "Vishwa",
    lastName: "Patel"
}
// const pNew3 = {
//     firstName: "Mamta",
//     lastName: "Bholani"
// }
console.log("FullName =", pNew1.fullName());
let fullName = pNew1.fullName.bind(pNew2);
console.log("FullName =", fullName());
console.log("================================================");
console.log("\n\n");



// Function Used As A Callback - Preserving this
console.log("Function Used As A Callback - Preserving this \n\n");
const Person11 = {
    firstName: "Rohit",
    lastName: "Senta",
    fullName: function() {
        console.log("FullName =", this.firstName + " " + this.lastName);
    }
}
let display = Person11.fullName.bind(Person11);
setTimeout(display, 2000);
let end = () => {
    console.log("================================================");
    console.log("\n\n");
}
setTimeout(end, 3000);