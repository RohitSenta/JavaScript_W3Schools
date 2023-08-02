// Dates In JavaScript

console.log("Dates In JavaScript \n\n");
console.log("\n");


// Date
console.log("Date");
const date1 = new Date();
console.log("Date is :", date1);
console.log("\n");

// Date(0)
console.log("Date(0)");
const date0 = new Date(0);
console.log("Date0 is :", date0);
console.log("\n");  

// New Date String
console.log("New Date String");
const date2 = new Date("2023-08-27");
console.log("My Next Birthdate is :", date2);
console.log("\n");

// Date - Year / Month
console.log("Date - Year / Month");
const date3 = new Date(2022, 5);
console.log("New Date :", date3);
console.log("\n");

// Date - Year / Month / Day
console.log("Date - Year / Month / Day");
const date4 = new Date(2020, 3, 22);
console.log("New Date :", date4);
console.log("\n");

// Date - Year / Month / Day / Hours
console.log("Date - Year / Month / Day / Hours");
const date5 = new Date(2020, 3, 22, 10);
console.log("New Date :", date5);
console.log("\n");

// Date - Year / Month / Day / Hours / Minutes
console.log("Date - Year / Month / Day / Hours / Minutes");
const date6 = new Date(2020, 3, 22, 10, 35);
console.log("New Date :", date6);
console.log("\n");

// Date - Year / Month / Day / Hours / Minutes / Seconds
console.log("Date - Year / Month / Day / Hours / Minutes / Seconds");
const date7 = new Date(2020, 3, 22, 10, 35, 50);
console.log("New Date :", date7);
console.log("\n");

// Date - Year / Month / Day / Hours / Minutes / Seconds / Milliseconds
console.log("Date - Year / Month / Day / Hours / Minutes / Seconds / Miliseconds");
const date8 = new Date(2020, 3, 22, 10, 35, 50, 1050);
console.log("New Date :", date8);
console.log("\n");

// Date - toString
console.log("Date - toString");
const date9 = new Date();
console.log("Date toString :", date9.toString());
console.log("\n");

// Date - toDateString
console.log("Date - toDateString");
const date10 = new Date();
console.log("Date toDateString :", date9.toDateString());
console.log("\n");

// Date - toUTCString
console.log("Date - toUTCString");
const date11 = new Date();
console.log("Date toUTCString :", date9.toUTCString());
console.log("\n");

// Date - toISOString
console.log("Date - toISOString");
const date12 = new Date();
console.log("Date toISOString :", date9.toISOString());
console.log("\n\n\n");



// Date Formet In JavaScript
console.log("Date Formet In JavaScript \n\n");
console.log("\n");

// Date ISO Formet
console.log("Date ISO Formet");
const df1 = new Date("2015-03-25");
console.log("Date ISO Formet :", df1);
console.log("\n");

// Date - ISO Year / Month
console.log("Date - ISO Year / Month");
const df2 = new Date("2015-03");
console.log("ISO Year / Month :", df2);
console.log("\n");

// Date - ISO Year / Month
console.log("Date - ISO Year");
const df3 = new Date("2015");
console.log("ISO Year :", df3);
console.log("\n");

// Date - ISO Date / Time
console.log("Date - ISO Date / Time");
const df4 = new Date("2015-03-25T12:00:00Z");
console.log("ISO Date / Time :", df4);
console.log("\n");

// Long Date 
console.log("Long Date");
const ld1 = new Date("Mar 25 2015");
console.log("Long Date :", ld1);
console.log("\n");

// Long Date 
console.log("Long Date");
const ld2 = new Date("25 Mar 2015");
console.log("Long Date :", ld2);
console.log("\n");

// Long Date 
console.log("Long Date");
const ld3 = new Date("25 January 2015");
console.log("Long Date :", ld3);
console.log("\n");

// Date Imput - Parsing Date
console.log("Long Date");
const purseDate1 = Date.parse("March 25 2015");
console.log("Long Date :", purseDate1);
console.log("\n\n\n");




// Date Get Methods
console.log("Date Get Methods \n\n");
console.log("\n");


// getFullYear
console.log("getFullYear");
const gm1 = new Date("2021-03-25");
console.log("getFullYear :", gm1.getFullYear());
console.log("\n");

// getMonth
console.log("getMonth");
const gm2 = new Date("2021-03-25");
console.log("getMonth :", gm2.getMonth());
console.log("\n");

// getMonth
console.log("getMonth");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const gm22 = new Date("2021-03-25");
console.log("getMonth :", months[gm22.getMonth()]);
console.log("\n");

// getDate
console.log("getDate");
const gm3 = new Date("2021-03-25");
console.log("getDate :", gm3.getDate());
console.log("\n");

// getHours
console.log("getHours");
const gm4 = new Date("2021-03-25");
console.log("getHours:", gm4.getHours());
console.log("\n");

// getMinutes
console.log("getMinutes");
const gm5 = new Date("2021-03-25");
console.log("getMinutes:", gm5.getMinutes());
console.log("\n");

// getSeconds
console.log("getSeconds");
const gm6 = new Date("2021-03-25");
console.log("getSeconds:", gm6.getSeconds());
console.log("\n");

// getDay
console.log("getDay");
const gm7 = new Date();
console.log("getDay:", gm7.getDay());
console.log("\n");

// getDay
console.log("getDay");
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const gm77 = new Date();
console.log("getDay:", days[gm7.getDay()]);
console.log("\n");

// getTime
console.log("getTime");
const gt1 = new Date("1970-01-01");
console.log("getTime:", gt1.getTime());
console.log("\n");

// getTime
console.log("getTime");
const gt2 = new Date("2021-03-25");
console.log("getTime:", gt2.getTime());
console.log("\n");

// getTime
console.log("getTime");
const gt3 = new Date();
console.log("getTime:", gt3.getTime());
console.log("\n\n\n");



// Date Set Methods
console.log("Date Set Methods \n\n");
console.log("\n");

// setFullYear
console.log("setFullYear");
const sm1 = new Date();
sm1.setFullYear(2020);
console.log("setFullYear :", sm1);
console.log("\n");

// setFullYear
console.log("setFullYear");
const sm11 = new Date();
sm1.setFullYear(2020, 11, 3);
console.log("setFullYear :", sm1);
console.log("\n");

// setMonth
console.log("setMonth");
const sm2 = new Date();
sm2.setMonth(11);
console.log("setMonth :", sm1);
console.log("\n");

// setMonth
console.log("setDate");
const sm3 = new Date();
sm3.setDate(15);
console.log("setDate :", sm3);
console.log("\n");

// setHours
console.log("setHours");
const sm4 = new Date();
sm4.setHours(22);
console.log("setHours :", sm4);
console.log("\n");

// setMinutes
console.log("setMinutes");
const sm5 = new Date();
sm5.setMinutes(22);
console.log("setMinutes :", sm5);
console.log("\n");

// setSeconds
console.log("setSeconds");
const sm6 = new Date();
sm6.setSeconds(44);
console.log("setSeconds :", sm6);
console.log("\n");
