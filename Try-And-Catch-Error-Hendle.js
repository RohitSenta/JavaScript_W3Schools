// Try And Catch Error Handle

console.log("Try And Catch Error Handle \n\n");
console.log("\n");

let x = "Hello World !";
try {
    // abc.abc();
    console.log(x);
} 
catch (err) {
    console.log("An Error Occured :", err);
}

console.log("\n\n");

let num = Math.floor(Math.random() * 10) + 10;
let guessNum = prompt("Enter your guess number between 10 to 20 :");

try {
    // let num = Math.floor(Math.random() * 5) + 1;
    // let guessNum = prompt("Enter your guess number between 10 to 20 :");
    if(guessNum == num) {
        throw `You guessed right number : ${guessNum}`
    } else if(guessNum > num) {
        throw `Your guess is greater than number : ${guessNum}`;
    } else if(guessNum < num) {
        throw `Your guess is lesser than number : ${guessNum}` ;
    } else {
        throw `Your guess is not a number : ${guessNum}`;
    }
} catch(err) {
    console.log(err);
} finally {
    console.log("Number is :", num);
}

console.log("\n");

// {
//     var number = 5;
//     console.log("number = ", number);
// }
// console.log("number = ", number);