
// DOM Events
// Change Text 
function changeText(text){
    text.innerText = "Oooops! Text Changed"; 
}

// Display Date And Time
function displayDate() {
    let date = document.querySelector(".date");
    date.innerText = Date();
}

// Onchange Event
function upperCase() {
    const x = document.querySelector("#fname");
    x.value = x.value.toUpperCase();
}

// OnMouseOver And OnMouseOut event
function mOver(obj) {
    obj.innerText = "Thank you !!!";
}
function mOut(obj) {
    obj.innerText = "Again Mouse Over Me !!!";
}

// OnMouseDown And OnMouseUp event
function mDown(obj) {
    obj.style.backgroundColor = "blue";
    obj.innerText = "Release Me !!!";
}
function mUp(obj) {
    obj.style.backgroundColor = "brown";
    obj.innerText = "Thank You !!!";
}


// DOM EventListener
// Click Event
let btn1  = document.querySelector(".btn1");
btn1.addEventListener("click", function() {
    alert("Hello World! - You Clicked Button");
});
btn1.addEventListener("click", secondAlert);
function secondAlert() {
    alert("You Clicked Button Again!!!");
}


// MouseOver MouseOut MouseClick Event
let box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "purple";
    // alert("Your Mouse Over The Box !!!");
})
box.addEventListener("mousedown", () => {
    box.style.backgroundColor = "blue";
    // alert("You Clicked On The Box !!!");
})
box.addEventListener("mouseup", () => {
    box.style.backgroundColor = "purple";
    // alert("You Clicked On The Box !!!");
})
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "green";
    // alert("Your Mouse Out Of The Box !!!");
})

// Add Event Handler To Window Object
window.addEventListener("resize", changeNum);
function changeNum() {
    // let randNum = Math.floor(Math.random());
    // console.log(randNum);
    let num = document.querySelector("#num");
    num.innerText = "Random Number : " + Math.random();
}
let removeBtn = document.querySelector(".remove");
removeBtn.addEventListener("click", myRemove)
function myRemove() {
    window.removeEventListener("resize", changeNum);
}
removeBtn.addEventListener("dblclick", myAdd)
function myAdd() {
    window.addEventListener("resize", changeNum);
}


// Event-Bubbling And Event-Capturing 
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let myp1 = document.querySelector(".myp1");
let myp2 = document.querySelector(".myp2");

myp1.addEventListener("click", () => {
    alert("Event Bubbling - You clicked the white element!");
}, false);
div1.addEventListener("click", () => {
    alert("Event Bubbling - You clicked the orange element!");
}, false);

myp2.addEventListener("click", () => {
    alert("Event Capturing - You clicked the white element!");
}, true);
div2.addEventListener("click", () => {
    alert("Event Capturing - You clicked the orange element!");
}, true);


