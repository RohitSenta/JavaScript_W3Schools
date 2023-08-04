// Type Coversions In JavaScript

console.log("Type Coversions In JavaScript \n\n");
console.log("\n");


// Convertion Strings To Numbers
console.log("Conversion Strings To Number \n\n");
console.log("3.14 in Number :", Number(3.14));
console.log("Math.PI in Number :", Number(Math.PI));
console.log("Empty Strong in Number :", Number("   "));
console.log("Empty Strong in Number :", Number(""));
console.log("99 88 in Number :", Number("99 88"));
console.log("John in Number :", Number("John"));
console.log("==============================================");
console.log("\n\n");


// Unary + Operator
console.log("Unary + Operator \n\n");
let x = "5";
let y = + x; 
console.log("Type of x =", x , typeof x);
console.log("Type of y =", y , typeof y);

x = "John";
y = + x;
console.log("Type of x =", x , typeof x);
console.log("Type of y =", y , typeof y);
console.log("==============================================");
console.log("\n\n");


// Convert Numbers To Strings
console.log("Convert Numbers To Strings \n\n");
x = 123;
y = 27 + x;
console.log("Number x to Strings :", x, String(x));
console.log("Number y to Strings :", y, String(y));
console.log("==============================================");
console.log("\n\n");


// Convert Boolean To Strings
console.log("Convert Boolean To Strings \n\n");
console.log("Booleans false to Strings :", String(true));
console.log("Booleans true to Strings :", String(false));
console.log("==============================================");
console.log("\n\n");


// Automatic Type Conversion
console.log("Automatic Type Conversion \n\n");
console.log("Automatic Convert 5 + null :", 5 + null);
console.log("Automatic Convert '5' + null :", '5' + null);
console.log("Automatic Convert '5' + 2 :", '5' + 2);
console.log("Automatic Convert '5' * '2' :", '5' * '2');
console.log("Automatic Convert '5' / '2' :", '5' / '2');
console.log("==============================================");
console.log("\n\n");


