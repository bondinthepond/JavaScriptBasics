//Hoisting in variables


console.log(one)   //Will work - a var gets hoisted - but will throw undefined
// console.log(two)    // will throw reference error - cannot access before initialization
// console.log(three)  // will throw reference error - cannot access before initialization



var one = 'Aditya'
let two = 'Mallela'
const three = "Aditri"


console.log(one)
console.log(two)
console.log(three)



// Hoisting in functions

console.log(add_funcDecl(1, 2))
// console.log(add_funcExpr(2, 3))   // Error thrown - not a function - since var is hoisted but undefined
// console.log(add_arrowFunc(3, 4))  //Error thrown - not a function

function add_funcDecl(a , b){
	return a+b;
}

var add_funcExpr = function(a, b){
	return a + b;
}

var add_arrowFunc = (a,b) => a+b


//Hoisting in functions 2

console.log(add_funcDecl1(1, 2))
// console.log(add_arrowFunc2(1, 2))  //Cannot access 'add_arrowFunc2' before initialization - for both const and let
// console.log(add_funcExpr2(1, 2))  //Same as for arrow function
function add_funcDecl1(a , b){
	return a+b;
}

let add_funcExpr2 = function(a, b){
	return a + b;
}

const add_arrowFunc2 = (a,b) => a+b