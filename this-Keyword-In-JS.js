// this Keyword In JavaScript   
console.log("Keyword In JavaScript \n\n");
console.log("\n");

let a = "Apple";
let x = this;
const person = {
    fname: 'Rohit',
    lname: 'Senta',
    city: 'surat',
    age: 26,
    car1: 'Mustang',
    car2: 'BMW',
    fullName: function() {
        return this.fname + ' ' + this.lname;
    },
    myCar: function() {
        return this.car1 + ' And ' + this.car2;
    },
    Other : function() {
        return this;
    },
};

const cars = {
    car1 : 'Charger',
    car2 : 'Supra',
    favCar : this.car1 + ' And ' + this.car2,
}

function myFunc() {
    let x = 45;
    return this;    
}


console.log(person.fullName());
console.log(person.myCar());
console.log(person);
console.log(cars.favCar);
console.log(cars);

console.log(this);  
console.log(x);
console.log(myFunc());

