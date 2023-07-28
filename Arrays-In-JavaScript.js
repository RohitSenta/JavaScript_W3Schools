// Array In JavaScript

console.log("Arrays in JavaScript \n\n");

console.log("Cars Array :");
const Cars = ["Honda", "Ford", "BMW", "Dodge", "Toyota"];
console.log("Array Of Car Brands :", Cars);
console.log("Array[0] =", Cars[0]);
console.log("Array[0] =", Cars[1]);
console.log("Array[0] =", Cars[2]);
console.log("Array[0] =", Cars[3]);
console.log("Array[0] =", Cars[4]);

Cars[0] = "Tata";
Cars.push("Mahindra");
console.log("Cars Array :", Cars);
console.log("Length of Cars Array :", Cars.length);
console.log("\n\n");

console.log("Numbers Array :");
let nums = [1, 2, 3, 4, 5];
console.log("Numbers Array :", nums);
for (let i = 0; i < nums.length; i++) {
    console.log(`Number ${i} : `, nums[i]);
}
console.log("Length of Number Array :", nums.length);
console.log("\n\n");

console.log("Array Are Objects :");
const Student = {
    fname: "Peter",
    lname: "Parker",
    age: 22,
    city: "London",
    GPA: 8.5,
};
console.log("Array Student Info :", Student);

console.log("First Name :", Student.fname);
console.log("Last Name :", Student.lname);
console.log("Age :", Student.age);
console.log("City :", Student.city);
console.log("GPA :", Student.GPA);
console.log("\n\n");
