const firstName = "Mahendra Singh";
const lastName = "Dhoni";

let val;

val = firstName + lastName;

//Concatenation
val = firstName + " " + lastName;

// Append
val = "Virat";
val += " Kohli";

val = "Top rated batsman " + lastName;

//Escapnig
val = "tht's aweomse";
//or
val = "tht's awesome"; //adding an back slash

val = firstName.length;

val = firstName.concat(lastName);
val = firstName.concat(" ", lastName);

val = lastName.toUpperCase();
val = lastName.toLowerCase();

val = lastName[0];
val = lastName.indexOf("o");
val = firstName.lastIndexOf("h");
val = firstName.indexOf("h");

val = firstName.charAt(21); //return empty
val = firstName.charAt(2);

val = firstName.charAt(firstName.length - 1);

val = firstName.substring(0, 8);

val = firstName.slice(8);
val = firstName.slice(-3); //returns slice of last 3 chars

val = firstName.split(" "); //returns array; string is split based on the char passed

val = lastName.replace("i", "I");

val = lastName.includes("a"); // return true or false

console.log(val);
