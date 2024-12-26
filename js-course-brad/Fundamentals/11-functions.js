// Function Declerations

// function greet(firstName) {
//   return "Hello : " + firstName;
// }

// console.log(greet());

//defaults can be defined in the function signature since ES6

function greet(firstName = "Aditya") {
  return "Hello : " + firstName;
}

console.log(greet("Tridisha")); //the value declared here will over ride the default in the function

// FUNCTION EXPRESSIONS

const square = function(x) {
  return x * x;
};

console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTINO EXPRESSIONS - IIFEs
// Funciton that is declared and run at the same time

(function() {
  console.log("IFFE Ran...");
})();

(function(name) {
  console.log("Hello : " + name);
})("Brad"); //Declared and running at the same time
// Useful in module pattern

// Functions can be put inside objects - it will called as methods

const todo = {
  add: function() {
    console.log("Add todo..");
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.add();
todo.edit("Aditya");

todo.delete = function() {
  console.log("Delete todo ...");
};

todo.delete();
