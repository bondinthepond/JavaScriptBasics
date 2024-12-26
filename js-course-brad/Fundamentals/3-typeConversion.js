// converting between different data types

let val;

val = 10;

console.log(val);
console.log(typeof val);
console.log(val.length); //undefined for number

//Number to String
val = String(10);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4 + 4);
console.log(val);
console.log(typeof val);
console.log(val.length);

let val2;

//Bool to string
val2 = String(true);

//Date to string
val2 = String(new Date());

//Array to String
val2 = String([1, 2, 3, 4]);
console.log(val2);
console.log(typeof val2);
console.log(val2.length);

// toString() method
val3 = (5).toString();

console.log(val3);
console.log(typeof val3);
console.log(val3.length);

//Similalary, toString() can be used on boolean as well
val4 = true.toString();

// String to number
val = Number("5");
val = Number(true); //returns 1
val = Number(false); //returns 0

val = Number(Null); //returns 0

val = Number("hello"); //return NaN - not a number
val = Number([1, 2, 3]); // returns NaN

val = parseInt("100.30");
val = parseFloat("100.30");

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2)); //add decimal points

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum); //return 56 - val1 is converted to string by JS - called type coersions
console.log(typeof sum); //returns String
