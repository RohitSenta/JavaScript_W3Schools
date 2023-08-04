// Reguler Extensions In JavaScript

console.log("Reguler Extensions In JavaScript \n\n");
console.log("\n");


// Reguler Expressions With search()
console.log("Search With String search()");
let text = "Hello World! Hello JavaScript!";
console.log("text :", text);
console.log("Search of W :", text.search('W'));
console.log("Search of d :", text.search('d'));
console.log("Search of 'JavaScript' :", text.search('JavaScript'));
console.log("\n");

console.log("Search With Reguler Expressions search()");
console.log("Search of W :", text.search(/W/i));
console.log("Search of d :", text.search(/d/i));
console.log("Search of 'Hello' :", text.search(/Hello/i));

console.log("================================================");
console.log("\n\n");


// Reguler Expressions With search()
console.log("Replace With String replace()");
let text2 = "Hello World! Hello JavaScript!";
console.log("text2 :", text2);
console.log("\n");

let newText2 = text2.replace('JavaScript', 'Everyone');
console.log("String Replace 'JavaScript' with 'Everyone': \n=>", newText2);
console.log("\n");
newText2 = text2.replace('Hello', 'Hi');
console.log("String Replace 'Hello' with 'Hi' : \n=>", newText2);
console.log("--------------------------------");
console.log("\n\n");


console.log("Replace With Reguler Expressions replace()");

newText2 = text2.replace(/javascript/i, 'Everyone');
console.log("Replace 'javascript' with 'Everyone': \n=>", newText2);
console.log("\n");
newText2 = text2.replace(/Hello/i, 'Hi');
console.log("Replace 'Hello' with 'Hi': \n=>", newText2);
console.log("\n");
newText2 = text2.replace(/Hello/g, 'Hi');
console.log("Replace 'Hello' with 'Hi': \n=>", newText2);
console.log("\n");

text2 =  "Hello World! Hello JavaScript! Hello Everyone! \n Hello World! Hello JavaScript! Hello Everyone! \n Hello World! Hello JavaScript! Hello Everyone! \n ";
newText2 = text2.replace(/Hello/gm, 'Hi');
console.log("Replace 'Hello' with 'Hi': \n=>", newText2);
console.log("\n");

console.log("================================================");
console.log("\n\n");