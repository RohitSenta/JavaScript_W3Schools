console.log("Oparators In JavaScript\n\n");

// Arithmetic Oparator
console.log("Arithmetic Oparator");
let a = 10;
let b = 5;
let c = a + b;
console.log("Value of c is =", c);
console.log("Addition: a + b =", a + b);
console.log("Subtraction: a - b =", a - b);
console.log("Mutliplication: a * b =", a * b);
console.log("Division: a / b =", a / b);
console.log("Modulo: a % b =", a % b);
console.log("Power-of: a ** b =", a ** b);
console.log("Unary: a-- :", a--);
console.log("Unary: --a :", --a);
console.log("Unary: --a + b :", --a + b);
console.log("Unary: --a + --b :", --a + --b);
console.log("Unary: b++ :", b++);
console.log("Unary: a++ + b++ :", a++ + b++);
console.log("Unary: a + b :", a + b);
console.log("\n\n");

// Assignment Oparator
console.log("Assingnment Oparator");
let x = 20;
let y = 10;
let z = x + y;
console.log("z = x + y =", z);
console.log("x+=10: x =", x+=10);
console.log("x-=5: x =", x-=5);
console.log("y*=2: y =", y*=2);
console.log("y/=2: y =", y/=2);
console.log("x%y =", x%y);
console.log("x/=5 & y/=2 =", x/=5, y/=2);
console.log("x**y =", x**y);
console.log("\n\n");

// comparison Oparator
let n = 5;
let m = 8;
console.log("Comparison Oparator");
console.log("Equal to:", n == m);
console.log("Equal value and equal type to:", n === m);
console.log("Not equal to:", n != m);
console.log("Not equal value not and equal type to:", n !== m);
console.log("Greater than:", n > m);
console.log("Less than:", n < m);
console.log("Greater than or equal to:", n <= m);
console.log("Less than or equal to:", n >= m);
console.log("\n\n");

// Logical Oparator
console.log("Logical Oparator");
let num1 = 10;
let num2 = 15;
console.log("Logical AND && Oparator : ", ((num1 < num2) && (num1+5 < num2)));
console.log("Logical AND && Oparator : ", ((num1 < num2) && (num1+5 <= num2)));
console.log("Logical OR || Oparator : ", ((num1 > num2) || (num1 < num2)));
console.log("Logical OR || Oparator : ", ((num1 > num2) || (num2 < num1)));
console.log("Logical NOT ! Oparator : ", (!(num1 < num2)));
console.log("Logical NOT ! Oparator : ", (!(num2 < num1)));
console.log("\n\n");