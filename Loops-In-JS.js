// Loops In JavaScript

console.log("Loops In JavaScript \n\n");
console.log("\n");


// For Loop
console.log("For Loop \n\n");
let arr1 = [ 1, 2, 3, 4, 5 ];
console.log("arr1 :", arr1);
for (let i = 0; i <arr1.length; i++){
    console.log("arr1[i] =", arr1[i]);
}
console.log("================================================");
console.log("\n\n");


// While Loop
console.log("While Loop \n\n");
let arr2 = [ 1, 2, 3, 4, 5 ];
console.log("arr2 :", arr2);
let i = 0;
while(i < arr2.length){
    console.log("arr2[i] =", arr2[i]);
    i++;
}
console.log("================================================");
console.log("\n\n");


// Do-While loop 
console.log("Do-While Loop \n\n");
let arr3 = [ 1, 2, 3, 4, 5 ];
console.log("arr3 :", arr3);
i = 0;
do{
    console.log("arr3[i] =", arr3[i]);
    i++;
} while ( i < arr3.length);
console.log("================================================");
console.log("\n\n");


// For In Loop 
console.log("For In Loop \n\n");
let Cars = [ "Ford", "Tata", "Mahindra", "Toyota", "BMW", "Dodge" ];
console.log("Cars :", Cars);
for(let car in Cars){
    console.log(`Car ${car} :`, Cars[car]);
}
console.log("\n");
let carBrand = {
    Tata : "Harrier",
    Mahindra : "XUV700",
    Ford: "Mustang",
    Toyota: "Camry",
    BMW : "M5-Conpitition",
    Dodge: "Charger",
};
for(let car in carBrand){
    console.log(`Car of ${car} :`, carBrand[car]);
}
console.log("================================================");
console.log("\n\n");


// For Of Loop
console.log("For Of Loop \n\n");
let Cars2 = [ "Ford", "Tata", "Mahindra", "Toyota", "BMW", "Dodge" ];
console.log("Cars2 :", Cars2);
for(let car of Cars2){
    console.log("Car =", car);
}
console.log("================================================");
console.log("\n\n");