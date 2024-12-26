// DOM - document object is part of Window object
// for node js  - system is environment where it runs
// in client side js- it is browser
// node js and chrome uses V8 - ???
// browser has local storage, geo location, alerts etc

//WINDOW METHODS
// window.console.log(123);

// //Alert
// alert("hello world");

// //Prompt - takes an input
// const input = prompt();
// alert(input);

// //Confirm

// if (confirm("Are you usure")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// WINDOW PROPERTIES

let val;

outerHeight = window.outerHeight;
outerWidth = window.outerWidth;
console.log(outerHeight, outerHeight);

innerHeight = window.innerHeight; //overall height - console height + search bar height
innerWidth = window.innerWidth; //overall width - scroll bars
console.log(innerHeight, innerWidth);

//Scroll points
val = window.scrollY;
val = window.scrollX;

//Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;

// // redirect
// window.location.href = 'https://google.com';

// //reload
// window.location.reload();

//HISTORY OBJECT
window.history.go(-1);
val = window.history.length;

//Navigator Object
val = window.navigator; //contains geolocation, appVersion, userAgent, storage, platform

val = window.navigator.userAgent;
val = window.navigator.appVersion;
val = window.navigator.platform;
val = window.navigator.geolocation;
