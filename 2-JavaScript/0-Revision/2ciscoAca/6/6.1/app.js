//6.1.1 A few more details about JavaScript errors and exceptions........................................

// "use strict";
// iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
//     console.log("true");
// }

//let a = b; // -> Uncaught ReferenceError: b is not defined

// fun(); // -> Uncaught ReferenceError: fun is not defined

// const someConstValue = 5;
// someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

// let someNumber = 10;
// someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function

//RangeError.........

let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);

