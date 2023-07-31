// Array Sort In JavaScript
console.log("Array Sort In JavaScript \n\n")
console.log("\n");


// Sort() An Array Alphabetically
console.log("Sort() An Array Alphabetically \n\n");
let cars1 = [ "Tata", "Mahindra", "Honda", "Ford", "Toyota", "BMW", "Dodge", "Audi", "Lexus", "Volvo" ];
console.log("cars1 =", cars1);
cars1.sort();
console.log("cars1 After Sort Alphabetically =", cars1);
console.log("===========================================================");
console.log("\n\n");


// Sort() An Array In Reverse Order() - Alphabetically
console.log("Sort() An Array In Reverse Order() Alphabetically \n\n");
let cars2 = [ "Tata", "Mahindra", "Honda", "Ford", "Toyota", "BMW", "Dodge", "Audi", "Lexus", "Volvo" ];
console.log("cars2 =", cars2);
cars2.sort();
cars2.reverse();
console.log("cars1 After Reverse Sort Alphabetically =", cars2);
console.log("===========================================================");
console.log("\n\n");


// Sort() Numbar Array Alphabetically 
console.log("Sort() Numbar Array Alphabetically \n\n");
let nums1 = [ 40, 10, 55, 78, 5, 100, 85, 2, 25];
console.log("Nums1 =", nums1);
nums1.sort();
console.log("nums1 Array After Alphabatical Sort() =", nums1);
console.log("===========================================================");
console.log("\n\n");


// Numeric Asceending Sort()
console.log("Numeric Sort() \n\n");
let nums2 = [ 40, 10, 55, 78, 5, 100, 85, 2, 25];
console.log("Nums2 =", nums2);
nums2.sort(function(a, b) {
    return a - b;
});
console.log("nums2 After Numaric Ascending Order Sort =", nums2);
console.log("===========================================================");
console.log("\n\n");


// Numeric Descending Sort()
console.log("Numeric Sort() \n\n");
let nums3 = [ 40, 10, 55, 78, 5, 100, 85, 2, 25];
console.log("Nums3 =", nums3);
nums3.sort(function(a, b) {
    return b - a;
});
console.log("nums3 After Numaric Descending Order Sort =", nums3);
console.log("===========================================================");
console.log("\n\n");


// Fisher Yates Random Sort() Method
console.log("Fisher Yates Random Sort() \n\n");
let nums4 = [ 40, 10, 55, 78, 5, 100, 85, 2, 25];
console.log("Nums4 =", nums4);
for (let i = 0; i < nums4.length; i++) {
    let j = Math.floor(Math.random() * (i+1));
    let k = nums4[i];
    nums4[i] = nums4[j];
    nums4[j] = k; 
}
console.log("Nums4 After Random Sort() =", nums4);
console.log("===========================================================");
console.log("\n\n")


// Find Highest And Lowest Number Of Array Using Sort() Method
console.log("Find Highest And Lowest Number Of Array Using Sort() Method \n\n");
let nums5 = [ 40, 10, 55, 78, 5, 100, 85, 2, 25];
console.log("Nums5 =", nums5);
nums5.sort(function(a, b) { return b - a});
console.log("Highest Number Of An Array =", nums5[0]);
nums5.sort(function(a, b) { return a - b});
console.log("Lowest Number Of An Array =", nums5[0])
console.log("===========================================================");
console.log("\n\n")


// Find Maximum And Minimum Using Math.max And Math.min in Array
console.log("Find Maximum and Minimum Using Math.max And Math.min in Array \n\n");
let nums6 = [ 40, 10, 55, 78, 5, 100, 85, 2, 25];
console.log("Nums6 =", nums6);
function myMax(arr) {
    return Math.max.apply(null, arr);
}
console.log("Maximum Number Of Array =", myMax(nums6));
function myMin(arr) {
    return Math.min.apply(null, arr);
}
console.log("Minimum Number Of Array =", myMin(nums6));
console.log("===========================================================");
console.log("\n\n")
