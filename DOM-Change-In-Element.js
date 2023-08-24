// Change In Element
console.log("Change In Element \n\n");

let p1 = document.getElementById("p1");
p1.innerText = "Hello World! - This is Paragraph 1 And Changes by DOM";

let para2 = document.querySelector(".para2");
para2.innerText = "Hello World! - This is also Changed Paragraph 2 And Changes by DOM";
console.log(para2.innerText);

let p3 = document.querySelector("#date");
p3.innerText = "Date : " + Date();

document.write("Hello World! - This text write by write() method");
