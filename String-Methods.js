// String Methods
console.log("String Methods \n\n");
console.log("\n");


// String Length Method
console.log("String Length Method \n\n");
let str1 = "Hello World";
console.log("str1 :", str1);
console.log("Length of str1: ", str1.length);
console.log("=====================================");
console.log("\n\n");


// String Slice Method
console.log("String Slice Method \n\n");
let str2 = "Hello JavaScript !";
console.log("str2 :", str2);
console.log("Length of str2: ", str2.length);
console.log("Slice - from 6 to 10 :", str2.slice(6, 10));
console.log("Slice - from 6 :", str2.slice(6));
console.log("Slice - from -8 :", str2.slice(-8));
console.log("=====================================");
console.log("\n\n");


// String Substring Method
console.log("String Substring Method \n\n");
let str3 = "I Am Rohit Senta !!";
console.log("str3 :", str3);
console.log("Length of str3: ", str3.length);
console.log("Substring - from 5 to 10 :", str3.substring(5, 10));
console.log("Substring - from -5 to 10 :", str3.substring(-5, 10));
console.log("Substring - from -3 :", str3.substring(-3));
console.log("=====================================");
console.log("\n\n");


// String SubStr Method
console.log("String SubStr Method \n\n");
let str4 = "I Am Learning JavaScript !";
console.log("str4 :", str4);
console.log("Length of str3: ", str4.length);
console.log("subStr - from 5 to +13 :", str4.substr(5, 13));
console.log("subStr - from 5 :", str4.substr(5));
console.log("subStr - from -8 :", str4.substr(-8));
console.log("=====================================");
console.log("\n\n");


// String Replace Method
console.log("String Replace Method \n\n");
let str5 = "Please Visit Gujarat !";
console.log("str5 :", str5);
let newStr5 = str5.replace("Gujarat", "Saurastra");
console.log("New Str5 :", newStr5);
console.log("=====================================");
console.log("\n\n");


// String Replace All Method
console.log("String Replace All Method \n\n");
let str6 = "Hello World! Hello JavaScript! Hello Everyone!";
console.log("str6 :", str6);
let newStr6 = str6.replaceAll("Hello", "Hiii");
console.log("New Str6 :", newStr6);
console.log("=====================================");
console.log("\n\n");


// String Converting to Upper Case Method
console.log("String Converting t Upper Case Method \n\n");
let str7 = "Hello World !";
console.log("str7 :", str7);
let newStr7 = str7.toUpperCase();
console.log("str7 with Upper Case :", newStr7);
console.log("=====================================");
console.log("\n\n");


// String Converting to Lower Case Method
console.log("String Converting t Lower Case Method \n\n");
let str8 = "Hello World !";
console.log("str8 :", str8);
let newStr8 = str8.toLowerCase();
console.log("str8 with Lower Case :", newStr8);
console.log("=====================================");
console.log("\n\n");


// String Concatenation Method
console.log("String Concatenation Method \n\n");
let str9a = "Hello";
let str9b = "World !";
console.log("str9a :", str9a, "\nstr9b :", str9b);
let str9 = str9a + " " + str9b;
console.log("Str9 :", str9);
let newStr9 = str9a.concat(" ", str9b);
console.log("new Str9 :", newStr9);
console.log("=====================================");
console.log("\n\n");


// String Trim Method
console.log("String Trim Method \n\n");
let str10 = "     Hello World !     ";
console.log("str10 :", str10);
let newStr10 = str10.trim();
console.log("new Str10 :", newStr10);
console.log("=====================================");
console.log("\n\n");


// String Trim-Start And Trim-End Method
console.log("String Trim-Start And Trim-End Method \n\n");
let str11 = "     Hello World !     ";
console.log("str11 :", str11);
let startStr10 = str11.trimStart();
console.log("startStr10 :", startStr10);
let endStr10 = str11.trimEnd();
console.log("endStr10 :", endStr10);
let bothStr10 = str11.trimStart().trimEnd();
console.log("bothStr10 :", bothStr10);
console.log("=====================================");
console.log("\n\n");


// String Padding padStart And padEnd Method
console.log("String Padding padStart And padEnd Method \n\n");
let str12 = "Hi";
console.log("str12 :", str12);
let startStr12 = str12.padStart(5, "0");
console.log("startStr12 :", startStr12);
startStr12 = str12.padStart(4, "*");
console.log("startStr12 :", startStr12);
startStr12 = str12.padEnd(5, "0");
console.log("EndStr12 :", startStr12);
startStr12 = str12.padEnd(4, "*");
console.log("EndStr12 :", startStr12);
console.log("=====================================");
console.log("\n\n");


// String charAt And charCodeAt Method
console.log("String charAt And charCodeAt Method \n\n");
let str13 = "Hello World !";
console.log("str13 :", str13);
let char = str13.charAt(6);
let charCode = str13.charCodeAt(6);
console.log("Char At 6 :", char, "and It's CharCode :", charCode);
char = str13.charAt(10);
charCode = str13.charCodeAt(10);
console.log("Char At 6 :", char, "and It's CharCode :", charCode);
console.log("=====================================");
console.log("\n\n");


// String Property Access Method
console.log("String Property Access Method \n\n");
let str14 = "Hello World !";
console.log("str14 :", str14);
let char1 = str14[0];
console.log("Char at 0 :", char1);
char1 = str14[6];
console.log("Char at 6 :", char1);
char1 = str14[10];
console.log("Char at 10 :", char1);
console.log("=====================================");
console.log("\n\n");


// String Split Method
console.log("String Split Method \n\n");
let str15 = "HELLO WORLD !";
console.log("str15 :", str15);
let Arr = str15.split("");
str15 = "";
for (let i = 0; i < Arr.length; i++) {
    str15 += Arr[i] + "\n"; 
}
console.log("str15 :\n", str15);
console.log("=====================================");
console.log("\n\n");