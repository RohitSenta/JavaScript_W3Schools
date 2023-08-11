
// Object Accessors In JavaScript
console.log("Object Accessors in JavaScript \n\n");
console.log("\n");

// JavaScript Getters And Setters - The get And set Keyword
console.log("JavaScript Getters And Setters - The get And set Keyword \n\n");
const student = {
    fname: "Rohit",
    lname: "Senta",
    age: 25,
    city: "Surat",

    get stuAge() {
        return this.age;
    },
    get home() {
        return this.city;
    },

    language: "",
    set lang(value) {
        this.language = value;
    },
    grade: "",
    set grd(gr) {
        this.grade = gr;
    }
};
student.lang = "Gujarati";
student.grd = "A+"; 

console.log("Student Info :", student);
console.log("Name =", student.fname);
console.log("Surname =", student.lname);
console.log("StuAge =", student.stuAge);
console.log("StuCity =", student.home);
console.log("Language =", student.language);
console.log("Grade =", student.grade);
console.log("\n\n");


//JavaScript Getters For Function
console.log("JavaScript Getters For Function \n\n");

const person = {
    fName: "Peter", 
    lName: "Parker", 
    get fullName() {
        return (person.fName + " " + person.lName).toUpperCase(); 
    }
};

console.log("Person FirstName :", person.fName);
console.log("Person LastName :", person.lName);
console.log("Person FullName :", person.fullName);
console.log("\n\n");


// Object.defineProperty() 
console.log("Object.defineProperty() \n\n");

const counter = {
    count: 0
};

Object.defineProperty(counter, "reset", {
    get: function() {
        this.count = 0;
    }
});
Object.defineProperty(counter, "increament", {
    get: function() {
        this.count++;
    }
});
Object.defineProperty(counter, "decreament", {
    get: function() {
        this.count--;
    }
});
Object.defineProperty(counter, "add", {
    set: function(value) {
        this.count += value;
    }
});
Object.defineProperty(counter, "subtract", {
    set: function(value) {
        this.count -= value;
    }
});

counter.reset;
counter.add = 5;
counter.subtract = 2;
counter.increament;
counter.decreament;

console.log("Counter =", counter.count);
console.log("\n\n");