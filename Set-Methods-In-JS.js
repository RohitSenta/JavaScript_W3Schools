// Set Methods In JavaScript
console.log("Set Methods In JavaScript \n\n");
console.log("\n");


// new Set() method
console.log("new Set() method \n\n");
const letters = new Set(['a', 'b', 'c', 'd']);
console.log(letters);
console.log("===============================================");
console.log("\n\n");


// add() method
console.log("add() method \n\n");
const letters2 = new Set(['a', 'b', 'c', 'd']);
console.log(letters2);
letters2.add('e');
letters2.add('f');
letters2.add('g');
console.log(letters2);
console.log("===============================================");
console.log("\n\n");


// forEach() method
console.log("forEach() method \n\n");
const letters3 = new Set(['a', 'b', 'c', 'd']);
console.log(letters3);
letters3.add('e');
letters3.add('f');
letters3.add('g');

letters3.forEach (function (letter) {
    console.log(letter);
});
console.log("===============================================");
console.log("\n\n");


// delete() method
console.log("delete() method \n\n");
const letters4 = new Set(['a', 'b', 'c', 'd']);
console.log(letters4);
letters4.add('e');
letters4.add('f');
letters4.add('g');
letters4.delete('d');
letters4.delete('e');
letters4.delete('c');
console.log(letters4);
console.log("===============================================");
console.log("\n\n");


// has() method
console.log("has() method \n\n");
const letters5 = new Set(['a', 'b', 'c', 'd']);
console.log(letters5);
console.log("letters has 'a'?", letters5.has('a'));
console.log("letters has 'f'?", letters5.has('f'));
console.log("letters has 'd'?", letters5.has('d'));
console.log("letters has 'e'?", letters5.has('e'));
console.log("===============================================");
console.log("\n\n");


// values() method
console.log("values() method \n\n");
console.log("delete() method \n\n");
const letters6 = new Set(['a', 'b', 'c', 'd']);
console.log(letters6);
letters6.add('e');
letters6.add('f');
letters6.add('g');
console.log(letters6);

for(let el of letters6.values()){
    console.log("value =", el);
}
console.log("===============================================");
console.log("\n\n");