//Creating arrays
const numbers = [2, 4, 5, 6, 8, 10, 12, 14, 15, 17];
const numbers2 = new Array(2, 4, 5, 6, 8, 10, 12, 14, 15, 17);

const frutis = ["Apple", "Grapes", "Bananas", "Pine Apple"];
const mixed = [22, "Apple", new Date(), undefined, false, null, { a: 1, b: 1 }];

let val;

val = numbers.length;

val = Array.isArray(frutis); //checks if an object is array
val = Array.isArray("hello"); //returns false, while you can deal with a string as an array

val = numbers[5]; //array 0 based

numbers[5] = 9; //replaces number at position 5

val = numbers.indexOf(12);
val = numbers.indexOf(36); //return -1 is not present in array

numbers.push(20); //add at back
numbers.unshift(1); //add in front
numbers.pop(); // remove from back
numbers.shift(); // remove from front

// numbers.splice(5);
// numbers.splice(2, 3);

// numbers.splice(3, 3); //remove the selection from the array and return the remaning

numbers.reverse();

val = numbers.concat(numbers2);
val = frutis.sort();
val = numbers.sort(); //sorts as string, rather than as a number - returns [12, 14, 15, 17, 2, 4, 5, 6, 8, 9]

// use the "compare function"
val = numbers.sort(function (x, y) {
  return x - y;
}); // for ascending order

val = numbers.sort(function (x, y) {
  return y - x;
}); // for descedning order

//Find
function under10(num) {
  return num < 10;
}

val = numbers.find(under10);

console.log(val);
console.log(numbers);
