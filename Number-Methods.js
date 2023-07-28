// Number Methods 
console.log("Number Methods \n\n");
console.log("\n");


console.log("toString() Method");
let n1 = 1234;
console.log("n1 =", n1);
let newN1 = n1.toString();
console.log("newN1 =", newN1);
newN1 = (1234).toString();
console.log("newN1 =", newN1);
newN1 = (1200 + 34).toString();
console.log("newN1 =", newN1);
console.log("\n\n");


console.log("toExponencial() Method");
let n2 = 7.55;
console.log("n2 =", n2);
let newN2 = n2.toExponential();
console.log("newN2 =", newN2);
newN2 = n2.toExponential(2);
console.log("newN2 =", newN2);
newN2 = n2.toExponential(4);
console.log("newN2 =", newN2);
newN2 = n2.toExponential(6);
console.log("newN2 =", newN2);
console.log("\n\n");


console.log("toFixed() Method");
let n3 = 9.237;
console.log("n3 =", n3);
let newN3 = n3.toFixed(0);
console.log("newN3 =", newN3);
newN3 = n3.toFixed(2);
console.log("newN3 =", newN3);
newN3 = n3.toFixed(4);
console.log("newN3 =", newN3);
newN3 = n3.toFixed(6);
console.log("newN3 =", newN3);
console.log("\n\n");


console.log("toPrecision() Method");
let n4 = 8.674;
console.log("n4 =", n4);
let newN4 = n4.toPrecision();
console.log("newN4 =", newN4);
newN4 = n4.toPrecision(2);
console.log("newN4 =", newN4);
newN4 = n4.toPrecision(4);
console.log("newN4 =", newN4);
newN4 = n4.toPrecision(6);
console.log("newN4 =", newN4);
console.log("\n\n");


console.log("valueOf() Method");
let n5 = 155;
console.log("n5 =", n5);
let newN5 = n5.valueOf();
console.log("newN5 =", newN5);
newN5 = n5.valueOf(155);
console.log("newN5 =", newN5);
newN5 = n5.valueOf(100+55);
console.log("newN5 =", newN5);
console.log("\n\n");


console.log("Number() Method");
let n6 = 155;
console.log("n6 =", n6);
console.log("Number n6 =", Number(n6));
console.log("Number n6 =", Number(true));
console.log("Number n6 =", Number(false));
console.log("Number n6 =", Number("10"));
console.log("Number n6 =", Number("  10"));
console.log("Number n6 =", Number("10  "));
console.log("Number n6 =", Number("   10  "));
console.log("Number n6 =", Number("10.33"));
console.log("Number n6 =", Number("10,33"));
console.log("Number n6 =", Number("10 33"));
console.log("Number n6 =", Number("Hello"));
console.log("\n\n");


console.log("Date() Method");
let n7 = new Date("2023-07-28");
console.log("Number Date n7 =", n7);
console.log("Number Date n7 =", Number(n7));
n7 = new Date("2022-05-10");
console.log("Number Date n7 =", n7);
console.log("Number Date n7 =", Number(n7));
console.log("\n\n");


console.log("parsrInt() Method");
let n8 = 10.33;
console.log("n8 =", n8);
console.log("parseInt n8 =", parseInt(n8));
console.log("parseInt 10 =", parseInt("10"));
console.log("parseInt -10 =", parseInt("-10"));
console.log("parseInt -10.33 =", parseInt("-10"));
console.log("parseInt 10 33 =", parseInt("10 30"));
console.log("parseInt 10 Years =", parseInt("10 Years"));
console.log("parseInt Years 10 =", parseInt("Years 10"));
console.log("\n\n");


console.log("parsrFloat() Method");
let n9 = 10.33;
console.log("n9 =", n9);
console.log("parseFloat n9 =", parseFloat(n9));
console.log("parseFloat 10 =", parseFloat("10"));
console.log("parseFloat 10.33 =", parseFloat("10.33"));
console.log("parseFloat -10 =", parseFloat("-10"));
console.log("parseFloat -10.33 =", parseFloat("-10.33"));
console.log("parseFloat 10 5 =", parseFloat("10 5"));
console.log("parseFloat 10 Years =", parseFloat("10 Years"));
console.log("parseFloat Years 10 =", parseFloat("Years 10"));
console.log("\n\n");


console.log("isInteger() Method");
let n10 = 10;
console.log("n10 =", n10);
console.log("isInteger n10 =", Number.isInteger(n10));
console.log("isInteger 10.33 =", Number.isInteger(10.33));
console.log("isInteger -10 =", Number.isInteger(-10));
console.log("isInteger -10.33 =", Number.isInteger(-10.33));


console.log("isSafeInteger() Method");
let n11 = 10;
console.log("n11 =", n11);
console.log("isInteger n10 =", Number.isSafeInteger(n11));
console.log("isInteger 10.33 =", Number.isSafeInteger(10.33));
console.log("isInteger -10 =", Number.isSafeInteger(-10));
console.log("isInteger -10.33 =", Number.isSafeInteger(-10.33));
console.log("isInteger 999999999999999 =", Number.isSafeInteger(999999999999999));
console.log("isInteger 9999999999999999 =", Number.isSafeInteger(9999999999999999));
console.log("\n\n");
