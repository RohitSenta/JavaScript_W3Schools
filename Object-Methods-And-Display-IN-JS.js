// Object With Methods In JavaScript
console.log("Object With Methods In JavaScript \n\n");
console.log("\n");


const Student = {
    fname: "Rohit",
    lname: "Senta",
    age: 25,
    city: "Surat",
    fullName: function() {
        return this.fname + " " + this.lname;
    }   
};
console.log("Student Info:", Student);
console.log("Student FullName :", Student.fullName);
console.log("Student FullName : " + Student.fullName());
console.log("Student FullName :", Student.fullName().toUpperCase());
console.log("\n\n");


// Loop In Object
console.log("Loop in Object \n\n");
for(let x in Student){
    console.log(Student[x]);
}
console.log("\n\n");


// Object Value() Method
console.log("Object.value() Method \n\n");
console.log(Object.values(Student));
console.log("\n\n");


// Object Convert Into String(JSON Data) Using JSON.stringify() Method
console.log("Object Convert Into String(JSON Data) Using JSON.stringify() Method \n\n");
console.log("Student Object In String(JSON Data) :", JSON.stringify(Student));
console.log("\n\n");


// Stingify Dates
console.log("Stringify Dates \n\n");
const person = {
    name: "Peter",
    bDate: new Date(),
    city: "Delhi"
};
console.log("Person Object In String(JSON Data) :", JSON.stringify(person));
console.log("\n\n");


// Stingify Functions
console.log("Stringify Function \n\n");
const person1 = {
    name: "Sam",
    age: () => { return 25; },
    city: "London"
};
person1.age = person1.age.toString();
console.log("Person1 Object With Function in String(JSON Data) :", JSON.stringify(person1));
console.log("\n\n");


// Stingify Array
console.log("Stringify Array \n\n");
const cars = [ "Tata", "Ford", "BMW", "Toyota", "Dodge"];
console.log("cars Array In String(JSON Data) :", JSON.stringify(cars));
console.log("\n\n");
