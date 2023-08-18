// Classes In JavaScript
console.log("Classes In JavaScript \n\n");
console.log("\n");


class myCars {
    constructor(brand, name, color, seats) {
        this.brand = brand;
        this.name = name;
        this.color = color;
        this.seats = seats;
    }
}
const car1 = new myCars("Ford", "Mustang", "Black",  4);
const car2 = new myCars("Dodge", "Charger", "Black",  4);
const car3 = new myCars("Toyota", "Supra", "White",  2);

console.log("Car1 :", car1.brand + " " + car1.name + " " + car1.color + " " + car1.seats);
console.log("Car2 :", car2.brand + " " + car2.name + " " + car2.color + " " + car2.seats);
console.log("Car3 :", car3.brand + " " + car3.name + " " + car3.color + " " + car3.seats);
console.log("================================================");
console.log("\n\n");



// Class With Methods
console.log("Class With Methods \n\n");
class myAge {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const person = new myAge("Rohit", 1997);
console.log("My Name is :", person.name, "& My Age is :", person.age());
console.log("================================================");
console.log("\n\n\n");



// Class With Inharitance 
console.log("Class With Inheritance \n\n");
class Car {
    constructor(brand) {
        this.carName = brand;
    }
    present() {
        return 'I Have a ' + this.carName;
    }
}

class Model extends Car {
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ", And It is a " + this.model;
    }
}

const myFavCar = new Model("Ford", "Mustang");
console.log(myFavCar.show());   
console.log("================================================");
console.log("\n\n");


// Class With Getters And Setters Methods
console.log("Class With Getters And Setters Methods \n\n");
class NewCar {
    constructor(brand) {
        this.carName1 = brand;
    }
    get cnme() {
        return this.carName1;
    }
    set cnme(value) {
        this.carName1 = value;
    }
}

const MyCar = new NewCar("Charger");
console.log("Car Name =", MyCar.cnme);
console.log("================================================");
console.log("\n\n\n");



// Class With Static Method 
console.log("Class With Static Method \n\n");
class CarS {
    constructor(name) {
        this.name = name;
    } 
    static Hello(x) {
        return "Hello ! " + x.name;
    }
}

const MyCarStatic = new CarS("Supra");
console.log("FavCar =", MyCarStatic.name);
// console.log(CarStatic.Hello());
console.log(CarS.Hello(MyCarStatic));
console.log("================================================");
console.log("\n\n");
