// DOM Manipulaion In JavaScript

console.log("DOM Manipulation In javaScirpt - Find Element \n\n");
console.log("\n");   


let para1 = document.getElementById('p1');
console.log(para1.innerText);
console.log("\n\n");


let para2 = document.getElementsByTagName("p");
console.log(para2[1].innerText);
console.log("\n\n");


let para3 = document.getElementsByClassName("p3");
console.log(para3[0].innerText);
console.log("\n\n");


let para4 = document.querySelector("p.p3");
console.log(para4.innerText);
console.log("\n\n");


let para5 = document.querySelectorAll("p");
console.log(para5[1].innerText + " " + para5[2].innerText);
console.log("\n\n");