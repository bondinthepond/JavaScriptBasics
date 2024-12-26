// for loops, while loops, do while loops
// for each loops - for looping through array
//map, for in - for looping through objects

// //for loop
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     continue;
//   } // use continue to skip the loop

//   if (i === 5) {
//     break;
//   } //use break to exit the loop
//   console.log(i);
// }

// for loop when number if iteration required is clear, while if unclear

//WHILE loop

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

//DO WHILE - will run atleast once - no matter what

// let i = 11;

// do {
//   console.log(i);
// } while (i < 10);

//The above will lead to infite loop and browser stops working

//Looping through arrays

const cars = ["Ford", "Hyundai", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// FOR EACH
// cars.forEach(function(car, i, cars) {
//   console.log(car, i, cars);
// });
// For each is a function in js, unlike in Java
// Its a callback function (what is callback ?)
// Accepts 3 parameters, variable name - singluar version of the array
// or index or the entire array itself

//MAPS
const users = [
  { id: 1, name: "Superman" },
  { id: 2, name: "Batman" },
  { id: 3, name: "Ironman" },
  { id: 4, name: "Spiderman" },
  { id: 5, name: "Captain America" },
];

const user_map = users.map(function (user) {
  return user.name;
});

console.log(user_map);

//FOR IN - used to loop through an object

const user = {
  firstName: "Anthony",
  lastName: "Stark",
  age: 56,
};

for (x in user) {
  console.log(x, user[x]);
}
