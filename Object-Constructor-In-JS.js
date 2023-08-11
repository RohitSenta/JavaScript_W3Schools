// Object Constructor In JavaScript

console.log("Constructor In JavaScript \n\n");
console.log("\n");


function cars(brand, model, color, speed, cap, lancYear){
    this.brandName = brand;
    this.modelName = model;
    this.carColor = color;;
    this.topSpeed = speed;
    this.seatCapacity = cap;
    this.launchYear = lancYear;
    this.carType = "Muscle Car";
}

const Car1 = new cars("Ford", "Mustang", "Rad", 300, 4, 1965);
const Car2 = new cars("Dodge", "Charger", "Lime", 330, 4, 1966);
const Car3 = new cars("Dodge", "Challenger", "Black", 300, 4, 1969);
const Car4 = new cars("Toyota", "Supra", "Orange", 280, 2, 1978);

Car1.originCountry = "America";
Car2.originCountry = "America";
Car3.originCountry = "America";
Car4.originCountry = "Japan";

console.log(`Car1 => ${Car1.brandName} ${Car1.modelName}, Car Type: ${Car1.carType}, Color: ${Car1.carColor}, Its Top Speed: ${Car1.topSpeed}, Seating Capacity: ${Car1.seatCapacity}, Launched In: ${Car1.launchYear} And Origin Country: ${Car1.originCountry}.`);
console.log("\n");

console.log(`Car2 => ${Car2.brandName} ${Car2.modelName}, Car Type: ${Car2.carType}, Color: ${Car2.carColor}, Its Top Speed: ${Car2.topSpeed}, Seating Capacity: ${Car2.seatCapacity}, Launched In: ${Car2.launchYear} And Origin Country: ${Car2.originCountry}.`);
console.log("\n");

console.log(`Car3 => ${Car3.brandName} ${Car3.modelName}, Car Type: ${Car3.carType}, Color: ${Car3.carColor}, Its Top Speed: ${Car3.topSpeed}, Seating Capacity: ${Car3.seatCapacity},Launched In: ${Car3.launchYear} And Origin Country: ${Car3.originCountry}.`);
console.log("\n");

console.log(`Car4 => ${Car4.brandName} ${Car4.modelName}, Car Type: ${Car4.carType}, Color: ${Car4.carColor}, Its Top Speed: ${Car4.topSpeed}, Seating Capacity: ${Car4.seatCapacity}, Launched In: ${Car4.launchYear} And Origin Country: ${Car4.originCountry}.`);
console.log("\n");