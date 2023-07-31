// Array Iteration in JavaScript

console.log("Array Iteration in JavaScript \n\n");
console.log("\n");


// forEach method
console.log("forEach method \n\n");
const nums1 = [ 11, 25, 43, 84, 65, 72, 94 ];
console.log("nums1: " + nums1);

let text = "";
nums1.forEach(myFunction);
function myFunction(el) {
    text += el + "\n";
}
console.log("nums1 :\n");
console.log(text);
console.log("================================================");
console.log("\n\n");


// map Method
console.log("map method \n\n");
const nums2 = [ 5, 7, 1, 3, 8, 2, 4, 6, 9];
console.log("nums2: ", nums2);
let newNums2 = nums2.map(function(el) {
    return el * 2;
});

// let newNums2 = nums2.map(myMapFunc);
// function myMapFunc(el) {
//     return el * 2;
// }
// myMapFunc(nums2);
console.log("Array * 2 by Map Mathod =", newNums2);
console.log("================================================");
console.log("\n\n");

// flatMap method
console.log("flatMap method \n\n");
const nums3 = [ 5, 7, 1, 3, 8, 2, 4, 6, 9];
console.log("nums3: ", nums3);
let newNums3 = nums3.flatMap((el) => el * 2);
console.log("Array * 2 by flatMap Mathod =", newNums3);
console.log("================================================");
console.log("\n\n");


// Array filter method
console.log("Array filter method \n\n");
let nums4 = [ 21, 54, 76, 16, 98, 42 ];
console.log("nums4: ", nums4);
let newNums4 = nums4.filter(function(el) {
    return el > 50;
});
console.log("newNums4 After Filter of > 50 =", newNums4);
console.log("================================================");
console.log("\n\n");


// Array reduce Method
console.log("Array reduce Method \n\n");
let nums5 = [ 21, 54, 76, 16, 98, 42 ];
console.log("nums5: ", nums5);
let newNums5 = nums5.reduce(function(el, res) {
    return el + res;
});
console.log("newNums5 After Reduced (Sum of Array Elements):", newNums5);
console.log("================================================");
console.log("\n\n");


// Find Maximum And Minimum Numbers in Array Using Reduce Method
console.log("Find Maximum And Minimum Numbers In Array Usinf Reduce Mathod \n\n");
let nums6 = [ 21, 54, 76, 16, 98, 42 ];
console.log("nums6: ", nums6);
let maxNum6a = nums6.reduce(function(res, el) {
    if(el < res){
        return res;
    } else {
        return el;
    }
});
console.log("Maximum Number In Array :", maxNum6a);
let maxNum6b = nums6.reduce(function(res, el) {
    if(el > res){
        return res;
    } else {
        return el;
    }
});
console.log("Minimum Number In Array :", maxNum6b);
console.log("================================================");
console.log("\n\n");


// Array Every Method
console.log("Array Every Method \n\n");
let nums7 = [ 21, 54, 76, 16, 98, 42 ];
console.log("nums7: ", nums7);
let evenNum = nums7.every((el) => {
    return el % 2 == 0;
});
console.log("Every Method For Check All Elements Are Even Or Not =", evenNum);
let over10 = nums7.every((el) => {
    return el > 10;
});
console.log("Every Method For Check All Elements Are Above > 10 =", over10);
console.log("================================================");
console.log("\n\n");


// Array Some Method
console.log("Array Some Method \n\n");
let nums8 = [ 21, 54, 76, 16, 98, 42 ];
console.log("nums8: ", nums8);
let oddNum = nums8.some((el) => {
    return el % 2 == 0;
});
console.log("Some Method For Check Some Elements Are Odd Or Not =", oddNum);
let below50 = nums8.some((el) => {
    return el < 50;
});
console.log("Some Method For Check Some Elements Are Below < 50 =", below50);
let over100 = nums8.some((el) => {
    return el > 100;
});
console.log("Some Method For Check Some Elements Are Above > 100 =", over100);
console.log("================================================");
console.log("\n\n");


// Array indexOf Method
console.log("Array indexOf And lastIndexOf Method \n\n");
let cars1 = [ "Tata", "Mahindra", "Honda", "Ford", "Toyota", "BMW", "Dodge", "Audi", "BMW", "Lexus", "BMW", "Volvo" ];
console.log("car1 = ", cars1);
let carBMW = cars1.indexOf("BMW");
console.log("Position of car BMW is at =", carBMW);
carBMW = cars1.indexOf("BMW", 6);
console.log("Position of car BMW After 5 is at =", carBMW);
carBMW = cars1.lastIndexOf("BMW");
console.log("Last Position of car BMW is at =", carBMW);
console.log("================================================");
console.log("\n\n");


// Array Find of Method
console.log("Array Find Method \n\n");
let nums9 = [ 21, 54, 76, 16, 98, 42 ];
console.log("nums9: ", nums9);
let first = nums9.find(function (el) {
    return el > 30;
});
console.log("Find First Number After 30 is =", first);
console.log("================================================");
console.log("\n\n");


// Array Includes Method \n\n");
let cars2 = [ "Tata", "Mahindra", "Honda", "Ford", "Toyota", "BMW", "Dodge", "Audi", "Lexus", "Volvo" ];
console.log("car1 = ", cars1);
let incl = cars2.includes("Ford");
console.log("Ford is Includes In cars1 =", incl);
incl = cars2.includes("BMW");
console.log("BMW is Includes In cars1 =", incl);
incl = cars2.includes("Jeep");
console.log("Jeep is Includes In cars1 =", incl);
console.log("================================================");
console.log("\n\n");


// Array Spread Method
console.log("Array Spread Method \n\n");
let Q1 = [ "January", "Fabruary", "March" ];
let Q2 = [  "April", "May", "June" ];
let Q3 = [ "July", "August", "September" ];
let Q4 = [ "October", "November", "December" ];
console.log("Q1 =", Q1);
console.log("Q2 =", Q2);
console.log("Q3 =", Q3);
console.log("Q4 =", Q4);

let Year = [ ...Q1, ...Q2, ...Q3, ...Q4];
console.log("Spread Quarter in Year =", Year);
