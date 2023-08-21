
// Acync - Callbacks In JavaScript
console.log("Acync - Callbacks In JavaScript \n\n");
console.log("\n");

function myDisplayer(func){
    console.log(func);
}

function myFirst() {
    myDisplayer("Hello World!");
}

function mySecond() {
    myDisplayer("Apna Collage");
}

myFirst();
mySecond();
console.log("\n\n");


// Sequence Control Function
console.log("Sequence Control \n\n");

function finalAns(ans) {
    console.log("Ans =", ans);
}

function myCalc(n1, n2) {
    let sum = n1 + n2;
    // return sum;
    finalAns(sum);
}

// let result = myCalc(10, 5);
// finalAns(result);
myCalc(10, 5);
console.log("\n\n");


// JavaScript Callback Functions 
console.log("JavaScript Callback Functions \n\n");

function finalResult(res) {
    console.log("Final Result =", res);
}

function clacSum(n1, n2, myCallback){
    let sum = n1 + n2;
    myCallback(sum);
}

clacSum(5, 5, finalResult);
console.log("\n\n");


