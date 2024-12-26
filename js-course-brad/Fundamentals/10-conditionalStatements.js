const id = "100";

// if (id == 101) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// if (id != 101) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// if (id === 100) {
//   // === check type and value (this is recommended for use)
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// if (id !== 100) {
//   // === check type and value (this is recommended for use)
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// testing if an object or a variable is defined

// if (id) {
//   console.log(`id exists - value : ${id}`);
// } else {
//   console.log("NO ID");
// }
// this will not work, becauase of id does not exist, error will be thrown - id not defined
// instead use the below to test if undefiened

// if (typeof id !== "undefined") {
//   console.log(`id exists - value : ${id}`);
// } else {
//   console.log("NO ID");
// }

// if (id > 100) {
//   console.log("Greater");
// } else {
//   console.log("Lesser");
// }
// >, < operators
// else if statements

// logical operators  - && - and , || - or

//ternary operators
console.log(id === "100" ? "CORRECT" : "INCORRECT");

//switch case statements

const color = "red";
switch (color) {
  case "red":
    console.log("Colour is red");
    break;
  case "blue":
    console.log("Colour is blue");
    break;
  default:
    console.log("Everything is white");
    break;
}

//Use switch case instead of if else if too many conditions
