// DOM Change CSS And Animation

console.log("Change CSS and Animation \n\n");

let para2 = document.querySelector('.para2');
para2.style.color = "red";
para2.style.backgroundColor = "yellow";
para2.style.fontSize = "30px";
para2.style.fontFamily = "verdana";

function changeColor() {
    document.querySelector('#h3').style.color = "blue";
    document.querySelector('#h3').style.backgroundColor = "#abc";  
}


// Animation

function myMove() {
    let id = null;
    const element = document.querySelector(".animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if(pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            element.style.top = pos + "px";
            element.style.left = pos + "px";
        }
    }
}

