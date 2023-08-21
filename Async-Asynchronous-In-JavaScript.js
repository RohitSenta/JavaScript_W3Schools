
// Asynchronous In JavaScript
// setTimeout
console.log("Asynchronous in JavaScript \n\n");

setTimeout(myFunction, 2000);

function myFunction() {
    console.log("I am Rohit Senta \n\n");
}
console.log("Hello World !!!");
// console.log("\n\n");


// setTimeout
setTimeout(function() {myFunction2("Apna College")}, 3000);

function myFunction2(value) {
    console.log("Welcome to ! ", value, "\n\n");
}


// setTimeout 
setInterval(getTime, 4000);
// setInterval(getTime, 1000);

function getTime() {
    let date = new Date();
    let currTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(currTime);
}