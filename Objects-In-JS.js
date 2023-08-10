// Object In JavaScript

console.log("Object In JavaScript \n\n");
console.log("Object is a sets of values in the form of name:value pairs");
console.log("\n");


// Car Detail Object
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


// Student Information Object
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


// Create Object With New Keyword
let car = new Object();
car.brand = "Dodge";
car.name = "Charger";
car.type = "Muscle Car";
car.color = "Green";
car.topSpeed = 330;
car.lunchYear = 1966;

const newCar = car;
newCar.color = "Red";   

console.log("Created Object with new key \n\n");
console.log("Car Details :", car);
console.log("\n");
console.log(`This is a ${car.brand} ${car.name}, And it is ${car.type} with color ${car.color}, it's top speed is ${car.topSpeed} & it is launced in ${car.lunchYear}.\n\n`);
console.log("Car Name :", car["brand"] + "-" + car["name"] + "\n\n");
for(let x in car) {
    console.log(car[x]);
}
console.log("\n\n");


// Adding And Deleting Properties
console.log("Adding & Deleting Properties \n\n");
const person = {
    fname: "Rohit",
    lname: "Sharma",
    age: 35,
    jerseyNo: 45,
}
person.namtionlity = "Indian";
person.highestScore = 264;
person.IPLteam = "Mumbai Indians";
for(let key in person){
    console.log(person[key]);
}
console.log("\n\n");    

delete person.age;
delete person.namtionlity;
for(let key in person){
    console.log(person[key]);
}
console.log("\n\n");


// Nested Objects
console.log("Nested Objects \n\n");
let favCars=  {
    Tata: "Harrier", 
    Mahindra: "XUV700",
    BMW: "M Series",
    Dodge: {
        car1: "Charger",
        car2: "Challenger"
    },
    Ford: "Mustang",
    Toyota: {
        car1: "Supra",
        car2: "Camry",
        car3: "Land Cruiser"
    }
};

console.log("Tata =>", favCars.Tata);
console.log("BMW =>", favCars["BMW"]);
console.log("Ford =>", favCars.Ford);
console.log("Dodge =>", favCars.Dodge.car1);
console.log("Dodge =>", favCars["Dodge"]["car2"]);
console.log("Toyota =>", favCars.Toyota.car1);
console.log("Toyota =>", favCars["Toyota"]["car3"]);
console.log("\n\n");