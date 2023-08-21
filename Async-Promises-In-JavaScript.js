// Promises In JavaScript

console.log("Promises In JavaScript \n\n");

let myPromise = new Promise(function (Resolve, Reject){
    let x = 0;

    if (x == 0) {
        Resolve("Promise Resolved!!!");
    }
    else {
        Reject("Promise Rejected!!!");
    }
});

myPromise.then(
    function(value){
        myDisplay(value);  
    },
    function(error){
        myDisplay(error);
    }
);

function myDisplay(result) {
    console.log(result);
}