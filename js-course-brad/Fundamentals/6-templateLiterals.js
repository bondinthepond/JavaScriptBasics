//template literal part of ES6

const name_1 = "John";
const age = 32;
const job = "Web Developer";
const city = "Miami";

let html;

// Without template strings (ES5)

// html =
//   "<ul><li>Name: " +
//   name_1 +
//   "</li><li>Age :" +
//   age +
//   "</li><li>Job :" +
//   job +
//   "</li></ul>";

function hello() {
  return "hello";
}

//With template strings (ES6) - use back ticket - under escape key
html = ` 
    <ul>
    <li>Name: ${name_1} </li>
    <li>Age: ${age} </li>
    <li>Job: ${job} </li>
    <li>City: ${city} </li>
    <li>${2 + 3}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li> 
    </ul>`;

document.body.innerHTML = html;
