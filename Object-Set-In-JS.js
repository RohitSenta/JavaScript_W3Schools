// Object Set 
console.log("Object Set \n\n");
console.log("\n");


const letters1 = new Set(['a', 'b', 'c']);
console.log("Size Of letters1 :", letters1.size);
console.log("\n\n");


// add Method
console.log("add Method \n\n");
const letters2 = new Set();

const a = 'a';
const b = 'b';
const c = 'c';
const d = 'd';

console.log(letters2.add(a));
console.log(letters2.add(b));
console.log(letters2.add(c));
console.log(letters2.add(c));
console.log(letters2.add(c));
console.log(letters2.add(d));
console.log("Size of letters2 :", letters2.size);
console.log("\n\n");


// forEach Method
console.log("forEach Method \n\n");
const letters3 = (['a', 'b', 'c', 'd', 'e', 'f']);
letters3.forEach(function(value){
    console.log(value);
});
console.log("\n\n");


// values() Method
console.log("values() Method \n\n");
const letters4 = (['a', 'b', 'c', 'd', 'e', 'f']);
console.log(letters4.values());
for(const x of letters4.values()){
    console.log(x);
}
console.log("\n\n");


// keys() Method 
console.log("keys() Method \n\n");
const letters5 = (['a', 'b', 'c', 'd', 'e', 'f']);
console.log("keys =", letters5.keys());
console.log("\n\n");


// entries() Method
console.log("entries() Method \n\n");
const letters6 = (['a', 'b', 'c', 'd', 'e', 'f']);
const iterator = letters6.entries();
for(const entry of iterator){
    console.log(entry);
}
console.log("\n\n");


// Sets are Objects 
console.log("Sets are Objects \n\n");
const letters7 = (['a', 'b', 'c', 'd', 'e', 'f']);
console.log(typeof letters7);
console.log("\n\n");