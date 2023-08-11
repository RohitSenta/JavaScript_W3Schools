// Math Function In JavaScript

console.log("Math Function In JavaScript \n\n");
console.log("\n");

// Math Round Method
console.log("Math.round() Method \n\n");
let num1 = 5.2;
console.log("round(5.2) =", Math.round(num1));
num1 = 5.5;
console.log("round(5.5) =", Math.round(num1));
num1 = 5.8;
console.log("round(5.8) =", Math.round(num1));
num1 = -5.8;
console.log("round(-5.8) =", Math.round(num1));
console.log("===============================================");
console.log("\n\n");


// Math ceil method
console.log("Math.ceil() Method \n\n");
let num2 = 5.2;
console.log("ceil(5.2) =", Math.ceil(num2)); 
num2 = 5.5;
console.log("ceil(5.5) =", Math.ceil(num2)); 
num2 = 5.8;
console.log("ceil(5.8) =", Math.ceil(num2)); 
num2 = -5.8;
console.log("ceil(-5.8) =", Math.ceil(num2)); 
console.log("===============================================");
console.log("\n\n");


// Math floor method
console.log("Math.floor() Method \n\n");
let num3 = 5.2;
console.log("floor(5.2) =", Math.floor(num3));
num3 = 5.5;
console.log("floor(5.5) =", Math.floor(num3));
num3 = 5.8;
console.log("floor(5.8) =", Math.floor(num3));
num3 = -5.8;
console.log("floor(-5.8) =", Math.floor(num3));
console.log("===============================================");
console.log("\n\n");


// Math Trunc Method
console.log("Math.trunc() Method \n\n");
let num4 = 5.2;
console.log("trunc(5.2) =", Math.trunc(num4));
num4 = 5.5;
console.log("trunc(5.5) =", Math.trunc(num4));
num4 = 5.8;
console.log("trunc(5.8) =", Math.trunc(num4));
num4 = -5.8;
console.log("trunc(-5.8) =", Math.trunc(num4));
console.log("===============================================");
console.log("\n\n");


// Math Sign Method
console.log("Math.sign() Method \n\n");
let num5 = 5;
console.log("sign(5) =", Math.sign(num5));
num5 = 0;
console.log("sign(0) =", Math.sign(num5));
num5 = -5;
console.log("sign(-5) =", Math.sign(num5));
console.log("===============================================");
console.log("\n\n");


// Math Power Method
console.log("Math.power() Method \n\n");
let num6 = 5;
let num66 = 2;
console.log("pow(5, 2) =", Math.pow(num6, num66));
console.log("===============================================");
console.log("\n\n");


// Math SquareRoot Method
console.log("Math SquareRoot Method \n\n");
let num7 = 25;
console.log("Sqrt(25) =", Math.sqrt(num7));
num7 = 64;
console.log("Sqrt(64) =", Math.sqrt(num7));
console.log("===============================================");
console.log("\n\n");


// Math Absolute Value Method
console.log("Math.absolute() Method \n\n");
let num8 = -5.60;
console.log("abs(-5.60) =", Math.abs(num8));
num8 = -0.60;
console.log("abs(-0.60) =", Math.abs(num8));
console.log("===============================================");
console.log("\n\n");


// Math Min And Max Method
console.log("Math.min() Method \n\n");
let nums = [20, 34, 25, 75, 65, 45];
console.log("Arr =", nums);
console.log("min(arr) =", Math.min(20, 34, 25, 75, 65, 45));
console.log("max(arr) =", Math.max(20, 34, 25, 75, 65, 45));
console.log("===============================================");
console.log("\n\n");


// Math Random Method
console.log("Math.random() Method \n\n");
let num9 = Math.random() + 1;
console.log("random(num9) =", num9);

num9 = Math.floor(Math.random() * 10);
console.log("random integer number from 0 to 9 :", num9);
num9 = Math.floor(Math.random() * 11);
console.log("random integer number from 0 to 10 :", num9);
num9 = Math.floor(Math.random() * 101);
console.log("random integer number from 0 to 100 :", num9);
num9 = Math.floor(Math.random() * 10) + 1;
console.log("random integer number from 1 to 10 :", num9);
num9 = Math.floor(Math.random() * 100) + 1;
console.log("random integer number from 1 to 100 :", num9);

function getRandNum(min, max) {
    num9 = Math.floor(Math.random() * (max - min)) + min;
}
getRandNum(6, 11);
console.log("random integer number 5(min) to 10(max) :", num9);
function getRandNum2(min, max) {
    num9 = Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandNum2(5, 10);
console.log("random integer number 5(min) to 10(max) :", num9);
console.log("===============================================");
console.log("\n\n");


// Math Log Method
console.log("Math Log Method \n\n");
let num10 = 1;
console.log("log(num10) =", Math.log(num10));
num10 = 10;
console.log("log(num10) =", Math.log(num10));
num10 = 100;
console.log("log(num10) =", Math.log(num10));
num10 = 100;
console.log("log2(num10) =", Math.log2(num10));
num10 = 100;
console.log("log10(num10) =", Math.log10(num10));
num10 = 1000;
console.log("log10(num10) =", Math.log10(num10));
console.log("===============================================");
console.log("\n\n");