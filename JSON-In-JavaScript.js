// JSON In JavaScript

console.log("JSON In JavaScript \n\n");
console.log("\n");

// JSON-Object and Its JS-Object Format
console.log("JSON-Object and Its JS-Object Format");
let carJsonObj = JSON.parse ('{ "Ford": "Mustang", "Toyota": "Supra", "Dodger": "Charger", "BMW": "M5 Compitition" }');
console.log(carJsonObj);
console.log(JSON.stringify(carJsonObj));
console.log("\n\n");

// JSON-Array and Its JS-Array Format
console.log("JSON-Array and Its JS-Array Format");
let carArr = JSON.parse('["Mustang", "Supra", "Charger", "Challenger", "BMW M5"]');
console.log(carArr);
console.log("\n\n");

// Parsing Dates
console.log("Parsing Dates");
const person = '{"name": "Rohit", "age": "26", "DOB": "1997-08-27"}';
const dateObj = JSON.parse(person);
console.log(dateObj);
dateObj.DOB = new Date(dateObj.DOB);
console.log(dateObj);
console.log("\n\n"); 

// Parsing Function 
console.log("Parsing Function");
const person2 = '{"fname": "Peter", "lname": "Parker", "age": "function() { return 45; }", "city": "New York" }';
const funcOnj = JSON.parse(person2);
funcOnj.age = eval("(" + funcOnj.age + ")");
console.log(funcOnj);
console.log("Age =", funcOnj.age());
console.log("\n\n\n");



// JSON Stringify
console.log("JSON Stringify \n\n");
console.log("JS-Object And JSON-Object Format");
let obj1 = {
    name: "Rohit",
    surname: "Senta",
    number: 45, 
    age: 26
}
console.log(obj1);
console.log(JSON.stringify(obj1));
console.log("\n\n");

console.log("JS-Array And JSON-Array Format");
let cars = ["Mustang", "Supra", "Charger", "Challenger", "BMW M5"];
const carsArray = JSON.stringify(cars);
console.log("Cars JSON Array =", carsArray);
console.log("\n\n");

// Storing Data
console.log("Storing Data \n\n");
const myObj = {
    name: "Rohit", 
    city: "Surat",
    age: 26,
    number: 45,
}
const myJsonObj = JSON.stringify(myObj);
localStorage.setItem("myNewObj", myJsonObj);
console.log("My JSON Data =", myJsonObj);

let myData = localStorage.getItem("myNewObj");
let dataObj = JSON.parse(myData);
console.log("My Object Data =", dataObj);
console.log("\n\n");

// Stringifying Dates
console.log("Stringifying Dates");
const obj = {name: "John", today: new Date(), city : "New York"};
const myObj1 = JSON.stringify(obj1);
console.log(myObj1);
console.log("\n\n");

// Stringifying Functions
console.log("Stringifying Dates");
const obj2 = {name: "John", age: function () {return 30;}, city: "New York"};
obj2.age = obj2.age.toString();
const myObj2 = JSON.stringify(obj2);
console.log(myObj2);
console.log("\n\n");
