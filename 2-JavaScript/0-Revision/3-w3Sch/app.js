//JavaScript Object Methods

// Property	Value
// firstName	John
// lastName	Doe
// age	50
// eyeColor	blue
// fullName	function() {return this.firstName + " " + this.lastName;}

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
    //console.log(fullName)
  }
};

// console.log(person.fullName())
// console.log(name = person.fullName());

console.log(name = person.fullName);