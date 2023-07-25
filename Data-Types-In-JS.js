// Data Types In JavaScript
console.log("Data Types In JavaScript \n\n");

console.log("JavaScript has a 8 Datatyps \n\n");
console.log("String");
console.log("Number");
console.log("An Array")
console.log("An Object");
console.log("An Date");
console.log("Bigint");
console.log("Boolean");
console.log("Undefined");
console.log("Null");
console.log("Symbol");
console.log("Object");
console.log("\n\n");

// Number Data Types
console.log("Number Data Types \n\n");
let Age = 26;
let Number = 45;
let Year = 2023;
console.log("Age: ", Age);
console.log("Number: ", Number);
console.log("Year: ", Year);
console.log("\n\n");

// String Data Types
console.log("String Data Types \n\n");
let Name = "Rohit_Senta";
let City = "Surat";
let Day = "Friday";
console.log("Name: ", Name);
console.log("City: ", City);
console.log("Day: ", Day);
console.log("\n\n");

// String + Number Data Types
console.log("String + Number Data Types \n\n");
let NameNum = "Hello" + "World!" + 45;
console.log(NameNum);
console.log("Type Of NameNum: " ,typeof NameNum);  

let Ro45 = "Rohit" + 45 + "_" + 264;
console.log(Ro45);
console.log("Type Of Ro45: ", typeof Ro45);
console.log("\n\n");

// Array Data Types
console.log("Array Data Type \n\n");
let Cars = ["Charger", "Challanger", "Mustang", "Supra"];
console.log(Cars);
console.log(Cars[0]);
console.log(Cars[1]);
console.log(Cars[2]);
console.log(Cars[3]);
console.log("\n\n");

// Object Data Types 
console.log("Object Data Type \n\n");
const Students = {
    name: "Rohit",
    age: 26,
    rollNo: 45,
    grade: "A+",
    city: "Surat"
}
console.log(Students);
console.log(Students.name);
console.log(Students["age"]);
console.log(Students.rollNo);
console.log(Students["grade"]);
console.log(Students.city);
console.log("\n\n");

// Booleans Data Types
console.log("Boolean Data Type \n\n");
let x = 5;
let y = 6;
console.log("Result 0f x == y In Boolean: ", x == y);
console.log("Result 0f x < y In Boolean: ", x < y);
console.log("Result 0f x > y In Boolean: ", x > y);
console.log("\n\n");

// Empty, Null And Undefined Data Types
console.log("Empty And Undefined Data Type \n\n");
let Car = "";
console.log("Car : ", Car);
console.log("Type of Car : ", typeof Car);
console.log("Typeof Car is sring and it is empty string");
console.log("\n");

let A;
console.log("Value of A : ", A);
console.log("Type of A : ", typeof A);
console.log("A is only declared value is not assigned so A is undefined");
console.log("\n");

let Nl = null;
console.log("Value of Nl : ", Nl);
console.log("Type of Nl : ", typeof Nl);
console.log("Nl is declared and assigned a null value so Nl is null and Type of Nl is Object");
console.log("\n\n");
