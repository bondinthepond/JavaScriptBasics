// CONST & LET
// let name = 'John';
let test;

name = 'Jack';

const person = {
  name: 'John',
  age: 33
};

person.name = 'Jack';

// const nums = [1, 2, 3, 4];
nums.push(5);


//const and let created for block level scoping
//const cannot be reassigned - TypeError - Assignment to constant
//const has to be initialized with a value
//let can be initialize and value can be assigned later

//use const - for objects, functions, arrays,


// ARROW FUNCTIONS - big part of react

function sayHello() {
  console.log('Hello');
}

const sayHello = name => console.log(`Hello ${name}`);    //cleaner looking
//prettier removes paranthesis if only 1 param is present
//${} - template literals - basically variable

sayHello(); //calling a function

const fruits = ['Apples', 'Oranges', 'Grapes'];

//Higher order array methods - FOREACH, MAP, FILTER

// FOREACH
fruits.forEach((fruit, index) => console.log(fruit));  

// MAP
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());  
//works similar to foreach - changes each element in array and returns the modified array
//slice is like substring in JAVA
//Map used to loop through lists

// FILTER

//used in state managers in redux and contetAPI

const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharon' }
];

//in react state is immutable

//removes id 2 and return the array - filter it out
const people2 = people.filter(person => person.id !== 2);


// SPREAD

//allows us to spread the values inside another array, object
//makes it possible to unpack variables

const arr = [1, 2, 3];

const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];  //arr3 = 1, 3

// const person1 = {
//   name: 'Brad',
//   age: 36
// };

//creating person2 with person1 - by spearding person1
// const person2 = {
//   ...person1,
//   email: 'brad@gmail.com'
// };

//we can mix spread opeartor with filter to use specific values

// DESTRUCTURING

const profile = {
  name: 'John Doe',
  address: {
    street: '40 Main st',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};

//ability to pull require values out of the object
const { name1, address, hobbies } = profile;
const { street, city } = profile.address;


//useful to pull state.profile or props.name

// CLASSES

//classes will have properties and methods

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person('John', 33);
const person2 = new Person('Sara', 28);

// console.log(person1.greet());

// SUBCLASSES

//class Customer extends React.app

class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);

// MODULES

// file 1 (file1.js)
export const name = 'Jeff';
export const nums = [1, 2, 3];
export default Person;

// // file 2 (file2.js)
import { name, nums } from './file1';
import Person from './file1';
