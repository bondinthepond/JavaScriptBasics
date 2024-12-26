// 3 types of variables
//var, let, const - var oldest, const - from ES6
//let, const - useful to handle block level scopes

// var name = "Aditya";
// console.log(name);
// name = "Virat Kohli";
// console.log(name);
// // i.e, var can be modified after declaring

// var naam;
// console.log(naam);   //this is undefinied
// naam = "M S Dhoni";
// console.log(naam);
// Initializing a variable

// Conventions -
// var can contain letters, numbers, _, $
// cannot start with number - thrown Syntax Error: Invalid or unexpected Token
// Use $variableName when JQuery is being used
// Use _ for private variable
// use camel case
// use Pascal case for consturctor name and class name

// let is similar to var
// let name = "Aditya";
// console.log(name);
// name = "Virat Kohli";
// console.log(name);

// let naam;
// console.log(naam); //this is undefinied
// naam = "M S Dhoni";
// console.log(naam);

// const - cannot be reassigned

// const name = "Aditya";
// console.log(name);
// name = "Virat Kohli";  // reassignment not allowed with const - throws 'Assignment to constant variable error'
// console.log(name);

// // const need to be initialized
// const naam;
// console.log(naam) // throws - Missing initializer in const declaration

// Using const with objects
const person = {
  name: "John",
  age: 30,
};
console.log(person);

person.name = "Virat Kohli";
console.log(person);
// Data inside the object can be change, but the object cannot be reassigned
//this is not allowed - throws 'Assignment to constant variable error'
person = {
  name: " M S Dhoni",
  ge: 37,
};

//Similalry Arrays, values inside array can be changed

//Block scopes of let and const

//Global Scope
//these variables have global scpe
var a = 1;
let b = 2;
const c = 3;

function test() {
  //these have function scope
  var a = 4; //same vari
  let b = 5;
  const c = 6;
  console.log("Function Scope: ", a, b, c);
}

console.log("Global Scope: ", a, b, c);

test();

if (true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Block Scope: ", a, b, c);
}

console.log("Global Scope: ", a, b, c);
