// Object Prototypes
console.log("Object Prototypes \n\n");
console.log("\n");


function cars(brand, name, color, seats, topSpeed){
    this.brandName = brand;
    this.carName = name;
    this.carColor = color;
    this.seatCap = seats;
    this.maxSpeed = topSpeed;
}

cars.prototype.originCountry = "America";

const mstg = new cars("Ford", "Mustang", "Black", 4, 300);
const ddge = new cars("Dodoge", "Charger", "Red", 4, 330);

console.log(mstg.brandName);
console.log(mstg.carName);
console.log(mstg.carColor);
console.log(mstg.seatCap);
console.log(mstg.maxSpeed);
console.log(mstg.originCountry);   
console.log("\n");

console.log(ddge.brandName);
console.log(ddge.carName);
console.log(ddge.carColor);
console.log(ddge.seatCap);
console.log(ddge.maxSpeed);
console.log(ddge.originCountry);   