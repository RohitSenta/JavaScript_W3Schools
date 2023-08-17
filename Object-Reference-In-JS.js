// Object Referene In JavaScript

console.log("Object Referene In JavaScript \n\n");
console.log("\n");


// Changing Property Value
console.log("Changing Property Value \n\n");
const Cars1 = {
    brand: "Ford",
    model: "Mustang",
    color: "Black",
    topSpeed: 330
};
console.log("Cars1 =", Cars1);
Object.defineProperty(Cars1, "color", {value: "Red"})
console.log("brand =", Cars1.brand);
console.log("Modal =", Cars1.model);
console.log("color =", Cars1.color);
console.log("topSpeed =", Cars1.topSpeed);
console.log("\n\n");


// Changing Meta Data
console.log("Changing Meta Data \n\n");
const Cars2 = {
    brand: "Ford",
    model: "Mustang",
    color: "Black",
    topSpeed: 330
};
console.log("Cars2 =", Cars2);
Object.defineProperty(Cars2, "color", {enumerable: false});
console.log(Object.keys(Cars2));
console.log("\n\n");


// Adding properties
console.log("Adding properties \n\n");
const Cars3 = {
    brand: "Ford",
    model: "Mustang",
    color: "Black",
    topSpeed: 330
};
console.log("Cars3 =", Cars3);
Object.defineProperty(Cars3, "seats", {value: 4});
Object.defineProperty(Cars3, "launchYear", {value: 1964});
console.log(Object.keys(Cars3));
console.log("brand =", Cars3.brand);
console.log("Modal =", Cars3.model);
console.log("color =", Cars3.color);
console.log("topSpeed =", Cars3.topSpeed);
console.log("seats =", Cars3.seats);
console.log("launchYear =", Cars3.launchYear);
console.log("\n\n");

