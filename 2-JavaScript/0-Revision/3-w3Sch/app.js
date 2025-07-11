//JavaScript Object Methods

// Property	Value
// firstName	John
// lastName	Doe
// age	50
// eyeColor	blue
// fullName	function() {return this.firstName + " " + this.lastName;}

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };


// Accessing Object Methods.................
// name=person.fullName();
// console.log(name)
// name=person.fullName;
// console.log(name)

//Adding a Method to an Object.........................
// person.name = function () {
//   return this.firstName + " " + this.lastName;
// };

//Displaying Object Properties.........................
// const person = {
// name: "john",
// age: 39,
// city: "New York"
// };
// document.getElementById("demo").innerHTML = person;
// document.getElementById("demo").innerHTML = person.name + "," + person.age + "," + person.city;

//Displaying Properties in a Loop........................
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// };
// document.getElementById("demo").innerHTML = text;

//Using Object.values()..................................
//this will create an Array...
// const myArray = Object.values(person);
//this will display array...
// document.getElementById("demo").innerHTML = myArray;

//Using Object.entries().................................
// const fruits = {Banana:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "<br>";
// }

//Using JSON.stringify().................................
//creating string / stringify Object...
// let myString = JSON.stringify(person);

//Display string...
// document.getElementById("demo").innerHTML = myString;

//JavaScript Object Constructors........................

function changeText () {
    document.getElementById('demo').innerHTML = "Hello Java";
}