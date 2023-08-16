// Object Map Methods
console.log("Object Map \n\n");
console.log("\n\n");


// Create New Map 
console.log("Create New Map \n\n");
const fruits = new Map([
    ["Apples", 500],
    ["Bananas", 300],
    ["Oranges", 200]
]);

console.log(fruits);
console.log("Type of Fruits :", typeof fruits);
console.log(fruits.get("Apples"));
console.log(fruits.get("Bananas"));
console.log(fruits.get("Oranges"));
console.log("\n\n");


// Map Set And Get Method
console.log("Map Set And Get Method \n\n");
const cars = new Map();
cars.set("Ford", "Mustang");
cars.set("Dodge", "Charger");
cars.set("Toyota", "Supra");
cars.set("BMW", "M5 Compitition");

console.log(cars.get("Ford"));
console.log(cars.get("Dodge"));
console.log(cars.get("Toyota"));
console.log(cars.get("BMW"));
console.log(cars);
console.log("\n\n");


// Map Size
console.log("Map Size\n\n");
const cars2 = new Map();
cars2.set("Ford", "Mustang");
cars2.set("Dodge", "Charger");
cars2.set("Toyota", "Supra");
cars2.set("BMW", "M5 Compitition");

console.log(cars2);
console.log("Size of cars :", cars.size);
console.log("\n\n");


// Map Delete
console.log("Map Delete\n\n");
const cars3 = new Map([
    ["Tata", "Harrier"],
    ["Mahindra", "Thar"],
    ["Volvo", "XC40"],
    ["Ford", "Mustang"],
    ["Dodge", "Charger"],
    ["Toyota", "Supra"]
]);
console.log(cars3.get("Tata"));
console.log(cars3.get("Mahindra"));
console.log(cars3.get("Volvo"));
console.log(cars3.get("Ford"));
console.log(cars3.get("Dodge"));
console.log(cars3.get("Toyota"));

cars3.delete("Mahindra");
cars3.delete("Volvo");
console.log(cars3);
console.log("\n\n");


// Map Clear
console.log("Map Clear\n\n");
const cars4 = new Map([
    ["Tata", "Harrier"],
    ["Mahindra", "Thar"],
    ["Volvo", "XC40"],
    ["Ford", "Mustang"],
    ["Dodge", "Charger"],
    ["Toyota", "Supra"]
]);
console.log("Size of cars4 =", cars4.size);
cars4.clear();
console.log("Size of cars4 =", cars4.size);
console.log("\n\n");


// Map Has
console.log("Map Has \n\n");
const cars5 = new Map([
    ["Tata", "Harrier"],
    ["Mahindra", "Thar"],
    ["Volvo", "XC40"],
    ["Ford", "Mustang"],
    ["Dodge", "Charger"],
    ["Toyota", "Supra"]
]);
console.log(cars5);
console.log("Has Volvo =", cars5.has("Volvo"));
console.log("Has Ford =", cars5.has("Ford"));
console.log("Has Tata =", cars5.has("Tata"));
cars5.delete("Mahindra");
cars5.delete("Volvo");
console.log("Has Mahindra =", cars5.has("Mahindra"));
console.log("Has Volvo =", cars5.has("Volvo"));
console.log("\n\n");


// Map forEach
console.log("Map forEach \n\n");
const cars6 = new Map([
    ["Tata", "Harrier"],
    ["Mahindra", "Thar"],
    ["Volvo", "XC40"],
    ["Ford", "Mustang"],
    ["Dodge", "Charger"],
    ["Toyota", "Supra"]
]);
cars6.forEach(function(value, key){
    console.log(value + " = " + key);
})
console.log("\n\n");


// Map Entries
console.log("Map Entries \n\n");
const cars7 = new Map([
    ["Tata", "Harrier"],
    ["Mahindra", "Thar"],
    ["Volvo", "XC40"],
    ["Ford", "Mustang"],
    ["Dodge", "Charger"],
    ["Toyota", "Supra"]
]);
for(let x of cars7.entries()) {
    console.log(x);
}
console.log("\n\n");


// Map Keys
console.log("Map Keys \n\n");
const cars8 = new Map([
    ["Tata", "Harrier"],
    ["Mahindra", "Thar"],
    ["Volvo", "XC40"],
    ["Ford", "Mustang"],
    ["Dodge", "Charger"],
    ["Toyota", "Supra"]
]);
for(let x of cars8.keys()) {
    console.log(x);
}
console.log("\n\n");


// Map Values
console.log("Map Values \n\n");
const cars9 = new Map([
    ["Tata", "Harrier"],
    ["Mahindra", "Thar"],
    ["Volvo", "XC40"],
    ["Ford", "Mustang"],
    ["Dodge", "Charger"],
    ["Toyota", "Supra"]
]);
for(let x of cars9.values()) {
    console.log(x);
}
console.log("\n\n");
