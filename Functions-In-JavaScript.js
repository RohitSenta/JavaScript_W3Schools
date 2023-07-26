// Functions In JavaScript

console.log("Function In JavaScript \n\n");
console.log("Function is block of code that performs when it is called \n\n");
console.log("\n");


function Greeting() {
    console.log("Hello World !!!");
    console.log("Hello JavaScript !!!");
}
Greeting();
console.log("\n");

console.log("Oparation On Argument");
function myFunction(p1, p2){
    return p1 * p2;
}
let ans = (myFunction(5, 2));
console.log("Ans of p1 * p2 :", ans);
console.log("\n\n");


// fahrenheit to celsius conversation function
console.log("Fahrenheit to celsius conversation function");

function toCels(fahrenheit) {
    return 5/9 * (fahrenheit-32);
}
let clec = toCels(77);
console.log("Cels of fahrenheit :", clec);
console.log(toCels);
console.log("\n\n");