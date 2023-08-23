
// Async And Await In JavaScript
console.log("Async And Await In JavaScript \n\n");

// console.log("Function With Async In JavaScript \n\n");
function Hello(some) {
    console.log(some);
}
async function myFunction() {
    return "Hello World! \n\n";
}

myFunction().then(
    function(value) {
        Hello(value);
    },
    function(error) {
        Hello(error);
    }
);



// Function With Await In JavaScript
// console.log("Function With Await In JavaScript \n\n");

async function myFunc() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("This is a Function With Async And Await In JavaScript !!! \n\n");
    });
    let Ans = await myPromise;
    console.log(Ans);
}
myFunc();



// Async/Await Function With Timeout

async function myTime() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("This is a Async/Await Function With setTimeout Function !!!");
        }, 2000);
    });
    // let Ans = await myPromise;
    console.log(await myPromise);
}
myTime();
