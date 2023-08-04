// Map Methods In JavaScript

console.log("Map Methods In JavaScript \n\n");
console.log("\n");


// The new Map Method
console.log("The new Map Method \n\n");
const cars1 = new Map([
    ["Ford", "Mustang"],
    ["Tata",  "Harrier"],
    ["Dodge", "Charger"],
]);
console.log("cars1 =", cars1);
console.log("==============================================");
console.log("\n\n");


// The Set Map Method
console.log("The Set Map Method \n\n");
const cars2 = new Map([
    ["Ford", "Mustang"],
    ["Tata",  "Harrier"],
    ["Dodge", "Charger"],
]);
cars2.set("BMW", "M5");
cars2.set("Volvo", "XC90");
cars2.set("Toyota", "Supra");

console.log("cars2 =", cars2);
console.log("==============================================");
console.log("\n\n");


// The Get Map Method
console.log("The Get Map Method \n\n");
const cars3 = new Map([
    ["Ford", "Mustang"],
    ["Tata",  "Harrier"],
    ["Dodge", "Charger"],
]);
cars3.set("BMW", "M5");
cars3.set("Volvo", "XC90");
cars3.set("Toyota", "Supra");

console.log("Tata =", cars3.get("Tata"));
console.log("Ford =", cars3.get("Ford"));
console.log("Dodge =", cars3.get("Dodge"));
console.log("BMW =", cars3.get("BMW"));
console.log("Volvo =", cars3.get("Volvo"));
console.log("Toyota =", cars3.get("Toyota"));
console.log("==============================================");
console.log("\n\n");


// The Size Property
console.log("The Size Property \n\n");
const cars4 = new Map([
    ["Ford", "Mustang"],
    ["Tata",  "Harrier"],
    ["Dodge", "Charger"],
]);
cars4.set("BMW", "M5");
cars4.set("Volvo", "XC90");
cars4.set("Toyota", "Supra");

console.log("Size of cars =", cars4.size);
console.log("==============================================");
console.log("\n\n");


// The Delete Method
console.log("The Delete Method \n\n");
const cars5 = new Map([
    ["Ford", "Mustang"],
    ["Tata",  "Harrier"],
    ["Dodge", "Charger"],
]);
cars5.set("BMW", "M5");
cars5.set("Volvo", "XC90");
cars5.set("Toyota", "Supra");
console.log("cars5 =", cars5);

cars5.delete("Volvo");
cars5.delete("Toyota");
console.log("cars5 =", cars5);
console.log("==============================================");
console.log("\n\n");


// The Has Method
console.log("The Has Method \n\n");

const cars6 = new Map([
    ["Ford", "Mustang"],
    ["Tata",  "Harrier"],
    ["Dodge", "Charger"],
]);
cars6.set("BMW", "M5");
cars6.set("Volvo", "XC90");
cars6.set("Toyota", "Supra");
console.log("cars6 =", cars6);

console.log("cars6 has a Volvo :", cars6.has("Volvo"));
console.log("cars6 has a BMW :", cars6.has("BMW"));
console.log("cars6 has a Jeep :", cars6.has("Jeep"));
console.log("==============================================");
console.log("\n\n");


// The forEach Method
console.log("The forEach Method \n\n");
const cars7 = new Map([
    ["Ford", "Mustang"],
    ["Tata",  "Harrier"],
    ["Dodge", "Charger"],
]);
cars7.set("BMW", "M5");
cars7.set("Volvo", "XC90");
cars7.set("Toyota", "Supra");
console.log("cars7 =", cars7);

cars7.forEach (function (value, key) {
    console.log(key, " = ", value);
});
console.log("==============================================");
console.log("\n\n");


// The Entries Method
console.log("The entries Method \n\n");
const cars8 = new Map([
    ["Ford", "Mustang"],
    ["Tata",  "Harrier"],
    ["Dodge", "Charger"],
]);
cars8.set("BMW", "M5");
cars8.set("Volvo", "XC90");
cars8.set("Toyota", "Supra");

for (const ele of cars8.entries()) {
    console.log("Element =", ele);
}
console.log("==============================================");
console.log("\n\n");