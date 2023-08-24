// Form Validation
console.log('Form Validation \n\n');

function validateForm(){
    let fname = document.forms["myForm"]["fname"].value;
    if (fname == "") {
        alert("Please Enter Your Name First!");
    }

    let lname = document.forms["myForm"]["lname"].value;
    if (lname == "") {
        alert("Please Enter Your Surname Second!");
    }

    let contNum = document.forms["myForm"]["number"].value;
    if (contNum == "") {
        alert("Please Enter Your Number");
    } else if (isNaN(contNum) || contNum < 1 || contNum > 50){
        alert("Please Enter Valid Number!");
    } else {
        alert("Your Form Is Submitted");
    }
}