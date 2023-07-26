// Strings In JavaScript 

console.log("Strings In JavaScript \n\n");

let str1 = "Helo World !";
console.log("First String :", str1);
console.log("\n");

let fname = "Rohit";
let lname = "Senta";
console.log("My Name is :", fname + " " + lname);
console.log("\n\n");

console.log("String Length");
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("String lenght of text :", text.length);
console.log("\n\n");

console.log("Escape Character");
let str2 = "Hello World \\ \
It\'s a string in" +
" " + "\"JavaScript\"";

console.log(str2);
console.log("\n\n");


console.log("Strings As Object");
let x = "Hello";
let y = new String("Hello");
let z = new String("Hello");
console.log("x =", x, "\ny =", y, "\nz =", z);  
console.log("\n");

console.log("Type of Strings :");
console.log("x =", typeof x, "\ny =", typeof y, "\nz =", typeof z);
console.log("\n");

console.log("Comparing Strings");
console.log("x == y :", x == y);
console.log("x === y :", x === y);
console.log("y == z :", y == z);
console.log("y === z :", y === z);
console.log("\n\n");