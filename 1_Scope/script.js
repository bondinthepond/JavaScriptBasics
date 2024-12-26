'use strict';

function calcAge(birthYear) {
	const age = 2037 - birthYear;
	console.log(age);
	console.log(firstName);  // firstName is a global variable here
	return age;
}

const firstName = 'John';
calcAge(1991)

//if a variable that is not defined is referenced - ReferenceError comes


// Example 2

console.log('Example 2')
function calcAge2(birthYear) {
	const age = 2037 - birthYear;
	
	function printAge() {
		const output = `Your name is ${firstName2} and You are ${age}, born in ${birthYear}`;
		console.log(output);
	}
	//in PrintAge - age, birthYear, firstName2 not declared but it is accessible - but it is accessible in the inner
	// function
	// Scope of age variable is between the 2 { } - only in calcAge2 function
	
	printAge();
	
	return age;
}

const firstName2 = 'Aditya'
calcAge2(1988)

//printAge() cannot be called here - as it is an inner function
// Error - printAge() not defined.

// Example 3 -

// var variable is not block scoped - i.e a var variable declared inside a blcok can be accessed outside the block
// as well. Var is function scoped.


function calcAge3(birthYear) {
	const age = 2037 - birthYear;
	
	function printAge() {
		const output = `Your name is ${firstName3} and You are ${age}, born in ${birthYear}`;
		console.log(output);
	}
	
	if(birthYear >=1981 && birthYear <= 2037){
		var millennial = true;
		const str = `You are a millennial ${firstName3}`;
		console.log(str);
	}
	console.log(millennial)
}

const firstName3 = 'Tridisha'
calcAge3(1989)


//Similarly - functions are also block scoped - only in strict mode

//If you have 2 variables of the same name - the first variable that comes in the scope chain gets used
//However - WebStorm will throw error if ECMAScript specification is not followed in checked.

function calcAge4(birthYear) {
	const age4 = 2037 - birthYear;
	
	function printAge() {
		const output = `Your name is ${firstName4} and You are ${age}, born in ${birthYear}`;
		console.log(output);
	}
	
	if(birthYear >=1981 && birthYear <= 2037){
		var millennial = true;
		const firstName4 = 'Adisha'
		const str = `You are a millennial ${firstName4}`;
		console.log(str);
	}
	console.log(millennial)
}

const firstName4 = 'Aditri'
calcAge4(1989)

//In JS - variable and functions can have same name - as long as that scopes don't overlap

// Outer scope's variable can be reassigned in inner scope