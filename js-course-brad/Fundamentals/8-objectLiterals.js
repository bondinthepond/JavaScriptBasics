const person = {
  firstName: "Mahendra",
  middleName: "Singh",
  lastName: "Dhoni",
  DOB: " 7th July",
  Work: "Wicketkeeping",
  hobbies: ["cricket", "football"],
  address: {
    city: "Ranchi",
    state: "Jharkhand"
  },
  getOccupation: function() {
    return "Cricket " + this.Work; //to use an attribute of the object inside the object, use this keyword
  }
};
let val;
val = person;
val = person.lastName;
val = person["lastName"];

val = person.hobbies[1];

val = person.address;
val = person.address.city;

val = person.getOccupation();

console.log(val);
