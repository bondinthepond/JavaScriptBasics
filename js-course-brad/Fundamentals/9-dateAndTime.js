let val;

const today = new Date(); //typeOf today is Object

val = today.toDateString(); //returns only date and day
val = today.toTimeString(); // returns time, in hh:mm:ss along with time zone

let birtday = new Date("29-11-1988"); // throws invalid date

let birthday = new Date("11/29/1988 12:02:30"); //US format - else invalid

val = birthday;

val = today;
val = today.getDate();
val = today.getMonth();

val = today.getTime(); // give timeStamp - time passed since Jan 1st 1970

birthday.setMinutes(3); // to modify date object
val = birthday;
console.log(val);
