// Arrow Function In JavaScript

console.log("Arrow Function In JavaScript \n\n");
console.log("\n");


// Normal Function
console.log("Normal Function");
let hello = function greet() {
    return ("Hello World !");  
}
console.log(hello());
console.log("\n\n");


// Arrow Function
console.log("Arrow Function");
let hello2 = () => {
    return ("Namaste World !");
}
console.log(hello2());
console.log("\n\n");


// Arrow Function Without Return Keyword
console.log("Arrow Function Without Return Keyword");
let myFunc1 = () => "This is Arrow Function without parenthesis !";
console.log(myFunc1());
console.log("\n\n");


// Arrow Function With Arugument 
console.log("Arrow Function With Arugument"); 
let myFunc2 = (arg) => {
    return "Apna " + arg;
}
console.log(myFunc2("College"));
console.log("\n\n");


// Arrow Function With Arugument 
console.log("Arrow Function With Arugument"); 
let myFunc3 = (a, b) => a * b;
console.log("a * b =", myFunc3(5, 20));
console.log("\n\n");