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

