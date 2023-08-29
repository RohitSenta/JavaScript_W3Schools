 // API - From Api

 console.log("API - From Api \n\n");
 console.log("\n");

// Check Validity - DOM Method
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', validateFunc);

function validateFunc() {
    const inpObj = document.querySelector("#id1");
    let output = document.querySelector("#output1");
    if(inpObj.checkValidity()) {
        output.innerHTML = "Input Is OK";
    } else {
        output.innerHTML = inpObj.validationMessage;
    }
}

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', validateFunc2);

function validateFunc2() {
    let text;
    let input2 = document.querySelector("#id2");
    if(input2.validity.rangeOverflow) {
        text = "Input Is Too Large";
    } else {
        text = "Input Is OK";
    }
    let output2 = document.querySelector("#output2");
    output2.innerText = text;
} 

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', validateFunc3);

function validateFunc3() {
    let text;
    let input3 = document.querySelector("#id3");
    if(input3.validity.rangeUnderflow) {
        text = "Input Is Too Small";
    } else {
        text = "Input Is OK";
    }
    let output2 = document.querySelector("#output3");
    output2.innerText = text;
} 


// History API

let btn4 = document.querySelector('#btn4');
btn4.addEventListener("click", goBack());
let btn4a = document.querySelector('#btn4a');
btn4.addEventListener("click", goBack2());
let btn4b = document.querySelector('#btn4b');
btn4.addEventListener("click", goForword());

function goBack() {
    window.history.back();
}
function goBack2() {
    window.history.go(-1);
}
function goForword() {
    window.history.forward();
}


// Storage API
localStorage.setItem("name", "Rohit Senta");
// localStorage.setItem("name", "Apna College");
let p4 = document.querySelector("#p4");
p4.innerText = localStorage.getItem("name");

sessionStorage.setItem("name", "Hello World!");
let p5 = document.querySelector("#p5");
p5.innerText = sessionStorage.getItem("name");


// Web Worker API 
let btn5a = document.querySelector("#btn5a");
btn5a.addEventListener("click", startWorker);
let btn5b = document.querySelector("#btn5b");
btn5b.addEventListener("click", stopWorker);

let w;
function startWorker() {
    if(typeof(w) == "undefined") {
        w = new Worker("API-Web-Worker-File.js");
    }
    w.onmessage = function(event) {
        let result = document.querySelector("#ans");
        result.innerText = event.data;
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}


// Fatch API
let link = "https://catfact.ninja/fact";
let finlaAns = document.querySelector("#cat");

fetch(link)
.then(x => x.text())
.then(y => finlaAns.innerText = "Fact 1 = " + JSON.parse(y).fact);


let catFact2 = document.querySelector("#catFact2");
async function catFacts(link) {
    let myObject = await fetch(link);
    let myText = await myObject.text();
    catFact2.innerText = "Fact 2 = " + JSON.parse(myText).fact;
}
catFacts(link);


// GeoLocation API

let getLoc = document.querySelector("#getLoc");
getLoc.addEventListener("click", getLocation);
const locate = document.querySelector("#locate");

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        locate.innerText = "GeoLocation Is Not Supported By this browser";
    }
}

function showPosition(position) {
    locate.innerText = "Latitude : " + position.coords.latitude + 
    "\nLongitube : " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locate.innerText = "User denied the request for GoeLocation";
            break;
        case error.POSITION_UNAVAILABLE:
            locate.innerText = "Location information is unavailable";
            break;
        case error.TIMEOUT:
            locate.innerText = "The request to get user location timed out";
            break;
        case error.UNKNOWN_ERROR:
            locate.innerText = "An unknown error occurred";
            break;
    }
}