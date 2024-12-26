//Add Event Listener - event listener taken 2 arguments - an event and a function
//Function can be named or un-named
//Named function better than the un-named function - better organization

/*
document.querySelector('.clear-tasks').addEventListener('click', function(e){
console.log('Hello World');    

  //e.preventDefault();     //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
});
*/

/*

The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
Clicking on a "Submit" button, prevent it from submitting a form
Clicking on a link, prevent the link from following the URL

*/

// document.querySelector(".practiceForm").addEventListener("click", onClick);

// function onClick(e) {
//   //console.log('Clicked');

//   let val;

//   val = e; //Event object

//   //Event object has range of values - such as co-ordinates, timestamps, targets, className of the element etc etc

//   console.log(e);
//   // Event target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   // Event type
//   val = e.type;

//   // Timestamp
//   val = e.timeStamp;

//   // Coords event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   // Coords event relative to the element
//   val = e.offsetY;
//   val = e.offsetX;

//   //   console.log(val);
// }

/* ---------------------------------------------------------------------------------------------- */

// //Mouse Events

// //click
// document.querySelector(".practiceButton").addEventListener("click", runEvent);

// //doubleClick
// document
//   .querySelector(".practiceButton")
//   .addEventListener("dblclick", runEvent);

// //mouseDown - click and hold fires this event
// document
//   .querySelector(".practiceButton")
//   .addEventListener("mousedown", runEvent);

// //mouseup - click-hold-release - fires this event
// document.querySelector(".practiceButton").addEventListener("mouseup", runEvent);

// //mouse enter - move onto the elemet
// document
//   .querySelector(".practiceButton")
//   .addEventListener("mouseenter", runEvent);

// //mouseLeave - move onto the elemet and leave - like dragging kind of action in drap and drop
// document
//   .querySelector(".practiceButton")
//   .addEventListener("mouseleave", runEvent);

// //mouseover - move onto the elemet - different from mouse enter
// //mouseenter only triggers when the mouse enters the element on which it is set
// //mouseover triggers when the mouse enters the element or any of its children
// document
//   .querySelector(".practiceButton")
//   .addEventListener("mouseover", runEvent);

// //mouseout - similar to mouseLeave -
// //mouseout event triggers when the mouse pointer leaves any child elements as well the selected
// //mouseleave event is only triggered when the mouse pointer leaves the selected element.
// document
//   .querySelector(".practiceButton")
//   .addEventListener("mouseout", runEvent);

// //use mouseEnter and mouseleave

// //Mousemove - any movement inside the element is a mousemove - used in gaming and interactive UIs
// document
//   .querySelector(".practiceButton")
//   .addEventListener("mousemove", runEvent);

// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   document.querySelector(
//     "h5"
//   ).textContent = `MouseX : ${e.offsetX}  MouseY: ${e.offsetY}`; //Will show the X and Y co-ordinates of where the mouse pointer is on the element

//   document.body.style.backgroundColor = `rgb(${e.offsetX},1,  ${e.offsetY})`; //make r, g or b - as variable - background colour will change as the mouse pointer moves.
// }

/* ---------------------------------------------------------------------------------------------- */

// //Keyboard Events

// const field1 = document.getElementById("field1");
// const field2 = document.getElementById("field2");
// const field3 = document.getElementById("field3");

// //submit - will work when used on a form element only. It won't work on individual fields.
// document
//   .getElementById("practiceForm")
//   .addEventListener("submit", runEventKeyboard);

// //Keydown - as in key press event on the field
// field1.addEventListener("keydown", runEventKeyboard);

// //Keyup - gets fired when the key is released
// field2.addEventListener("keyup", runEventKeyboard);

// //Keypress - general key press
// field2.addEventListener("keypress", runEventKeyboard);

// //focus - click on a field to start typing - when the prompt become active
// field2.addEventListener("focus", runEventKeyboard);

// //blur - when you click away from the input field
// field2.addEventListener("blur", runEventKeyboard);

// //cut - right click cut, or cmd+x
// field1.addEventListener("cut", runEventKeyboard);

// //paste = cmd + v
// field1.addEventListener("paste", runEventKeyboard);

// //input - any action on input
// field1.addEventListener("input", runEventKeyboard);

// const selectField = document.getElementById("practiceSelect");

// //change - for drop downs
// selectField.addEventListener("change", runEventKeyboard);

// function runEventKeyboard(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   //   console.log(e.target.value);
//   //   //Get input values
//   //   console.log(field1.value);
//   //   console.log(field2.value);
//   //   console.log(field3.value);

//   //   //to clear the input value in the fields after submitting
//   //   field1.value = " ";
//   //   field2.value = " ";
//   //   field3.value = " ";

//   //   e.preventDefault();

//   //   document.querySelector("h5").innerText = e.target.value; // what ever is type in the input field will appear here, as we type
// }

/* ---------------------------------------------------------------------------------------------- */

//Event Bubbling

// //Events places on a particular element bubble up to its parent elements as well
// //When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// // Click on field1
// // event gets fired for field1
// // Then on the outer <form> - practiceFrom
// // And so on upwards - on body till the document object

// document.getElementById("field1").addEventListener("click", function () {
//   console.log("field 1");
// });

// document.getElementById("practiceForm").addEventListener("click", function () {
//   console.log("practiceForm");
// });

// document.getElementById("body").addEventListener("click", function () {
//   console.log("body");
// });

//Event Delegation

// document.querySelector(".practiceForm").addEventListener("click", eventHandler);

// function eventHandler(e) {
//   console.log("practiceForm");
// }

//The above won't work on all the element that have the class "practiceForm"
// This is when event delegation is needed
//ANother instance is when something is dynamically inserted into HTML using JS - like inserting a new item in shopping list

//To target specifically - put an event listener on a parent element
// Then target the event using e.target and corressponding className

// document.body.addEventListener("click", eventHandler);

// function eventHandler(e) {
//   if (e.target.className === "practiceButton") {
//     console.log("practiceButton");
//   }
//   //the above approach to pull an element using className might not work, if the element has more that one class
//   //Instead - check the classList and check if "practiceButton" is one of those in the list

//   if (e.target.classList.contains("practiceButton")) {
//     console.log("practiceButton");
//   }

//   // to remove an item - like in a list
//   if (e.target.classList.contains("practiceButton")) {
//     console.log("practiceButton");
//     e.target.remove();
//   }
// }

//Event Capturing

//Not all event bubble - example - focus

// You can focus on things over and over again, but the event callback will never run.
// There’s a trick you can use to capture the event, though. The last argument in addEventListener() is called useCapture. We almost always set it to false.
// For events that don’t bubble, set it to true to capture the event anyways.

// event delegation is the technique
// bubbling is what the event itself does, and
//capturing is a way of using event delegation on events that don’t bubble.
