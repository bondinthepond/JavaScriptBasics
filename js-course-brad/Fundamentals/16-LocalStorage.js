// Local Storage - data stays untill it is cleared manually or programatically
// Local storage API - in the window object on browser
// values need to be stringified to store - storage stores only strings

// // set local storage
// localStorage.setItem("name", "aditya");

// // remove from storage
// localStorage.removeItem("name");

// // get value from storage
// console.log(localStorage.getItem("name"));

// localStorage.clear();

document
  .getElementById("practiceForm")
  .addEventListener("submit", eventHandler);

function eventHandler(e) {
  const fieldValue = document.getElementById("field1").value;
  console.log(fieldValue);

  let values;

  if (localStorage.getItem("values") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("values"));
  }

  values.push(fieldValue);

  localStorage.setItem("values", JSON.stringify(values));

  alert("value saved");
  e.preventDefault();
}

//The data that is pulled from the storage needs to be converted to string before processing

const values = JSON.parse(localStorage.getItem("values"));

values.forEach(function (value) {
  console.log(value);
});

// Session Storage - data stays untill the session is running
// Session storage API methods, similar to the local storage API methods

// sessionStorage.setItem("name", "Tridisha");
