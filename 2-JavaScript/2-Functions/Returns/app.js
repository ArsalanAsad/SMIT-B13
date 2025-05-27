// let x = myFunction (4, 3)
// console.log(x);
// document.getElementById("demo").innerHTML = x;
// function myFunction(a, b) {
//     return a * b;
// };

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius(77);
// document.getElementById("demo").innerHTML = value;
// console.log(value);

// function toCelsius(f) {
//   return (5/9) * (f-32);
// }

// let value = toCelsius();
// document.getElementById("demo").innerHTML = value;
// console.log(value)

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// // let value = toCelsius;
// // console.log(value);

// let x = toCelsius(77);
// // let text = "The temperature is " + x + " Celsius";
// console.log(x);
// // console.log(text);

// let text = "The temperature is " + toCelsius(77) + " Celsius";
// console.log(text);

// code here can NOT use carName

// function myFunction() {
//   let carName = "Volvo";
//   // code here CAN use carName
//   console.log(carName)
// }
// myFunction();

// let carName = "alto"
// console.log(carName)

// const user = { id: 42, name: "Alice" };
// const { name: username } = user;
// console.log(username)

// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`);
// });

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged);

// const person = { name: "Bob", age: 40 };
// for (let value of person) {
//   console.log(value);
// }

// const obj = { val: 1 };

// function modify(o) {
//   o.val = 5;
//   o = { val: 10 };
// }

// modify(obj);
// console.log(obj.val);

// const config = { theme: "dark" };
// const { theme, layout = "grid" } = config;

// console.log(theme, layout);

const obj = {
  "3": "three",
  "1": "one",
  "2": "two",
  a: "A",
  b: "B"
};

console.log(Object.keys(obj));
