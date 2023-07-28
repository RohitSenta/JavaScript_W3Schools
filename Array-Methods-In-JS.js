// Array Methods In JavaScript

console.log("Array Methods In JavaScript \n\n");
console.log("\n");


// Array .length Method
console.log("Array .length Method \n\n");
const arr1 = [1, 2, 3, 4, 5];
console.log("Numbers Array :", arr1);
console.log("Length Of Numbers Array :", arr1.length);
console.log("Number At Array.length Index :", arr1[arr1.length] = 6);
console.log("Array After Changes At Array.length Index :", arr1);
console.log("==========================================");
console.log("\n\n");


// Array toString() Method
console.log("Array toString() Method \n\n");
const cars = ["Tata", "Mahindra", "Honda", "Ford", "Toyota", "BMW", "Dodge"];
console.log("Cars Array :", cars);
console.log("Cars Array As A String :", cars.toString());
console.log("==========================================");
console.log("\n\n");


// Array join() Method
console.log("Array join() Method \n\n");
const cars2 = ["Tata", "Mahindra", "Honda", "Ford", "Toyota", "BMW", "Dodge"];
console.log("Car2 Array :", cars2);
console.log("Cars Array As A String With Saparator - :", cars.join(" - "));
console.log("==========================================");
console.log("\n\n");


// Array Pop() Method
console.log("Array Pop() Method \n\n");
const fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Fruits Array :", fruits);
console.log("Fruits Array With Pop() Method :", fruits.pop());
console.log("Fruits Array After Pop() Method :", fruits);
console.log("==========================================");
console.log("\n\n");


// Array Push() Method
console.log("Array Push() Method \n\n");
const fruits2 = ["Apple", "Banana", "Mango", "Orange"];
console.log("Fruits2 Array :", fruits2);
console.log("Fruits2 Array With Push() Method :", fruits2.push("Kiwi"));
console.log("Fruits2 Array After Pudh() Method :", fruits2);
console.log("==========================================");
console.log("\n\n");


// Array Shift() Method
console.log("Array Shift() Method \n\n");
const fruits3 = ["Apple", "Banana", "Mango", "Orange"];
console.log("Fruits 3 Array :", fruits3);
console.log("Fruits Array With Shift() Method :", fruits3.shift());
console.log("Fruits Array After Shift() Method :", fruits3);
console.log("==========================================");
console.log("\n\n");


// Array UnShift() Method
console.log("Array UnShift() Method \n\n");
const fruits4 = ["Apple", "Banana", "Mango", "Orange"];
console.log("Fruits 4 Array :", fruits4);
console.log("Fruits Array With Unshift() Method :", fruits4.unshift("Lemon"));
console.log("Fruits Array After Unshift() Method :", fruits4);
console.log("==========================================");
console.log("\n\n");


// Changing Elements
console.log("Changing Elements \n\n");
const cars3 = ["Maruti Suzuki", "Honda", "Ford", "Toyota", "BMW", "Dodge"];
console.log("Cars3 Array :", cars3);
console.log("Cars3 Array Changing Elements :", cars3[0] = "Tata", cars3[1] = "Mahindra");
// cars3[0] = "Tata";
// cars3[1] = "Mahindra";
console.log("Cars3 Array After Changing Elements :", cars3);
console.log("==========================================");
console.log("\n\n");


// Array Delete() Methods
console.log("Array Delete Method \n\n");
const cars4 = ["Maruti Suzuki", "Honda", "Ford", "Toyota", "BMW", "Dodge"];
console.log("Cars4 Array :", cars4);
console.log("Cars4 Array Deleting Elements :", delete cars4[0], delete cars4[1]);
console.log("Cars4 Array After Delete Elements :", cars4);
console.log("==========================================");
console.log("\n\n");
