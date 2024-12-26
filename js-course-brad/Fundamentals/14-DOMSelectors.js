// Single Element Selectors

/* document.getElementById()
console.log(document.getElementById('task-title'));
*/

/* Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);
*/

// Change styling

/*
const taskTitle = document.getElementById('task-title');
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'none';
*/

// Change content

/*
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';
*/

//Query Selector

/*
document.querySelector()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";
*/

/* ---------------------------------------------------------------------------------------------- */

//Multiple Element Selectors

/*
document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';
*/

// Query Selector

/*
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);
*/

// GetElementBy Tagname

/*
document.getElementsByTagName
let lis = document.getElementsByTagName('li');   //returns HTML Collection
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';
*/

// Convert HTML Collection into array

/*
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);
*/

// document.querySelectorAll

/*
const items = document.querySelectorAll("ul.collection li.collection-item");  //return Node List

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items);
*/

/* ---------------------------------------------------------------------------------------------- */

//DOM Traversal

/*
let list1, list2;
list1 = document.querySelector("form").childNodes; //returns NodeList, includes things like comments, text (or line breaks, new lines)
list2 = document.querySelector("form").children; //returns HTML Collection, includes on the HTML elements - no comments, no text

console.log(list1);
console.log(list2);
*/

/*

//Children or Children

let val3 = list2[3].children;
console.log(val3);

//firstchild
let val4 = document.querySelector("form").firstChild;

//firstElementChild
val4 = document.querySelector("form").firstElementChild;

//lastChild
val4 = document.querySelector("form").lastChild;

//lastELementChild
val4 = document.querySelector("form").lastElementChild;

//Count child elements -
val4 = document.querySelector("form").childElementCount;

//parentNode -
val4 = document.querySelector("form").parentNode;
val4 = document.querySelector("form").parentElement;
val4 = document.querySelector("form").parentElement.parentElement;

//Siblings
val4 = document.querySelector("form").nextSibling;
val4 = document.querySelector("form").nextElementSibling;
val4 = document.querySelector("form").nextElementSibling.nextElementSibling;

//Previous Siblings
val4 = document.querySelector("form").previousSibling;
val4 = document.querySelector("form").previousElementSibling;
val4 = document.querySelector("form").previousElementSibling.nextElementSibling;

*/

/* ---------------------------------------------------------------------------------------------- */

//Creating Elements

const li = document.createElement("li");
li.className = "colleciton-item";
li.id = "new-item";

li.setAttribute("title", "new-item");

li.appendChild(document.createTextNode("Hello World"));

console.log(li);

//apped the new element as a child to an old element
document.querySelector("#practiceForm").appendChild(li);

//Similarly other elements, and other tags can be appended
/*
Create element
Assign classNames, Id, setAttributes
Then append it as a child
For text - create Text Node and append it
*/

/* ---------------------------------------------------------------------------------------------- */

// Replacing Elements

// Create Element
const newHeading = document.createElement("h2");
// Add id
newHeading.id = "task-title";
// New text node
newHeading.appendChild(document.createTextNode("Task List"));
// Get the old heading
const oldHeading = document.getElementById("task-title");

// Use Replacechild for replacing - it needs to be run on the parent

//Parent
const cardAction = document.querySelector(".card-action");
// Replace
cardAction.replaceChild(newHeading, oldHeading);

/* ---------------------------------------------------------------------------------------------- */

//Removing Elements

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

/* ---------------------------------------------------------------------------------------------- */

// Manipulating CLASSES & ATTR
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// Classes
val = link.className; //returns all the class names
val = link.classList; //returns the class names as a list
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

// Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;
