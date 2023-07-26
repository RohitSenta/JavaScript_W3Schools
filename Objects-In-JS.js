// Object In JavaScript

console.log("Object In JavaScript \n\n");
console.log("Object is a sets of values in the form of name:vlaue pairs");
console.log("\n");


const myCar = {
    brand: "Ford",
    modal: "Mustang",
    color: "black",
    topSpeed: 300,
    seats: 2
};
console.log("My Car Details: ");
console.log(myCar);
console.log(myCar.brand);
console.log(myCar.modal);
console.log(myCar.color);
console.log(myCar.topSpeed);
console.log(myCar.seats);
console.log("\n");


const student = {
    name: "Rohit",
    surname: "Senta",
    age: 26,
    passYear: 2018,
    grade: "A+",
    fullname: function() {
        return this.name + " " + this.surname;
    }
};
console.log("Student Details: ");
console.log(student);
console.log(student.name);
console.log(student.surname);
console.log(student.age);
console.log(student.passYear);
console.log(student.grade);
console.log("Full Name :", student.fullname());

console.log(`${student.name} ${student.surname}'s age is ${student.age}, and he is passed in ${student.passYear} with ${student.grade} grade.`);
console.log("\n\n");
