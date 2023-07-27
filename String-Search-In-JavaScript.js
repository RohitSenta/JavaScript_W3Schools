// String Search In JavaScript

console.log("String Search In JavaScript \n\n");
console.log("\n");

// String IndexOf() Method
console.log("String IndexOf() \n\n");
let str1 = "Hello World! Hello JavaScript Hello EveryOne!";
console.log("String :", str1);
let index = str1.indexOf("JavaScript");
console.log("First Occurense of 'JavaScript' at: ", index);
index = str1.indexOf("Hello");
console.log("First Occurense of 'Hello' at: ", index);
index = str1.indexOf("Every");
console.log("First Occurense of 'Every' at: ", index);
index = str1.indexOf("hello");
console.log("First Occurense of 'hello' at: ", index);
index = str1.indexOf("Hello", 15);
console.log("First Occurense of Form 15 'Hello' at: ", index);
console.log("=========================================");
console.log("\n\n");    


// String LastIndexOf() Method
console.log("String LastIndexOf() \n\n");
let str2 = "Hello World! Hello JavaScript Hello EveryOne!";
console.log("String :", str2);
let index2 = str2.lastIndexOf("Hello");
console.log("Last Occurense of 'Hello' at: ", index2);
index2 = str2.lastIndexOf("JavaScript");
console.log("Last Occurense of 'JavaScript' at: ", index2);
index2 = str2.lastIndexOf("hello");
console.log("Last Occurense of 'hello' at: ", index2);
index2 = str2.lastIndexOf("Hello", 20);
console.log("Last Occurense of form 20  (Backwoord) 'Hello' at: ", index2);
console.log("=========================================");
console.log("\n\n");


// String Sreach() Method
console.log("String Sreach() Method \n\n");
let str3 = "Hello World! Hello JavaScript Hello EveryOne!";
console.log("String :", str3);
let index3 = str3.search("World");
console.log("First Occurense of String 'World'", index3);
index3 = str3.search("!");
console.log("First Occurense of String '!'", index3);
index3 = str3.search(/Java/);
console.log("First Occurense of String 'JAva'", index3);
console.log("=========================================");
console.log("\n\n");


// String Match() Method
console.log("String Match() Method \n\n");
let str4 = "The Rain in SPAIN stays mainly in plain and gain";
console.log("String :", str4);
let myArr = str4.match("ain");
console.log("Match Found :", myArr.length + " " + myArr);
myArr = str4.match(/ain/);
console.log("Match Found :", myArr.length + " " + myArr);
myArr = str4.match(/ain/g);
console.log("Match Found :", myArr.length + " " + myArr);
myArr = str4.match(/ain/gi);
console.log("Match Found :", myArr.length + " " + myArr);
console.log("=========================================");
console.log("\n\n");


// String MatchAll() Method
console.log("String MatchAll() Method \n\n");
let str5 = "The Rain in SPAIN stays mainly in plain and gain Ain";
console.log("String :", str5);
let myArr1 = str5.matchAll("ain");
console.log("Match Found :", Array.from(myArr1));
myArr1 = str5.matchAll(/ain/g);
console.log("Match Found :", Array.from(myArr1));
myArr1 = str5.matchAll(/ain/gi);
console.log("Match Found :", Array.from(myArr1));
console.log("=========================================");
console.log("\n\n");


// String Includes() Method 
console.log("String Includes() Method \n\n");
let str6 = "Hello World ! Hello JavaScript Hello Everyone !\n\n";
console.log("String : ", str6);
let ans = str6.includes("Hello");
console.log("Strins 'Hello' is Includes ? :", ans);
ans = str6.includes("Java");
console.log("Strins 'World' is Includes ? :", ans);
ans = str6.includes("hello");
console.log("Strins 'hello' is Includes ? :", ans);
ans = str6.includes("Senta");
console.log("Strins 'Senta' is Includes ? :", ans);
ans = str6.includes("Hello", 15);
console.log("Strins 'Hello' Form 15 is Includes ? :", ans);
ans = str6.includes("World", 15);
console.log("Strins 'World' Form 15 is Includes ? :", ans);
console.log("=========================================");
console.log("\n\n");


// String StartsWith() Method
console.log("String startWith() Method \n\n");
let str7 = "Hello World ! Hello JavaScript Hello Everyone !\n\n";
console.log("String : ", str7);
let ans2 = str7.startsWith("Hello");
console.log("Strins Starts With 'Hello' ? :", ans2);
ans2 = str7.startsWith("World");
console.log("Strins Starts With 'World' ? :", ans2);
ans2 = str7.startsWith("Hello", 14);
console.log("Strins Starts With 'Hello' ? :", ans2);
ans2 = str7.startsWith("World", 10);
console.log("Strins Starts With 'World' ? :", ans2);
console.log("=========================================");
console.log("\n\n");


// String EndsWith() Method
console.log("String endsWith() Method \n\n");
let str8 = "Hello World ! Hello JavaScript Hello Everyone !";
console.log("String : ", str8);
console.log("\n");
let ans3 = str8.endsWith("!");
console.log("String Ends With '!' ? :", ans3);
ans3 = str8.endsWith("Everyone");
console.log("String Ends With 'Everyone' ? :", ans3);
ans3 = str8.endsWith("World", 11);
console.log("String Ends With 'World' From 11 ? :", ans3);
ans3 = str8.endsWith("Script", 32);
console.log("String Ends With 'Script' From 32 ? :", ans3);
console.log("=========================================");
console.log("\n\n");