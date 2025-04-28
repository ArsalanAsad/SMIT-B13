//const name = "Alice";
//console.log(name); // -> Alice

//let year = 2050;
//let newYear = year = 2051;

//let year = 2050;
// year = 2051;
// let newYear = year;

// console.log(2 + 2 * 2); // -> 6
// console.log(2 + (2 * 2)); // -> 6
//console.log((2 + 2) * 2); // -> 8

// const x = 5;
// const y = 2;
 
// console.log("addition: ", x + y); // -> 7
// console.log("subtraction: ", x - y); // -> 3
// console.log("multiplication: ", x * y); // -> 10
// console.log("division: ", x / y); // -> 2.5
// console.log("division remainder :", x % y); // -> 1
// console.log("exponent: ", x ** y); // -> 25

//let str = "123";
// let n1 = +str;
// let n2 = -str;
// let n3 = -n2;
// let n4 = +"abcd";
 
// console.log(`${str} : ${typeof str}`); // -> 123 : string
// console.log(`${n1} : ${typeof n1}`); // -> 123 : number
// console.log(`${n2} : ${typeof n2}`); // -> -123 : number
// console.log(`${n3} : ${typeof n3}`); // -> 123 : number
// console.log(`${n4} : ${typeof n4}`); // -> NaN : number

// let n1 = 10;
// let n2 = 10;

// console.log(n1); // -> 10
// console.log(n1++); // -> 10
// console.log(n1); // -> 11

// console.log(n2); // -> 10
// console.log(++n2); // -> 11
// console.log(n2); // -> 11

// let n3 = 20;
// let n4 = 20;

// console.log(n3); // -> 20
// console.log(n3--); // -> 20
// console.log(n3); // -> 19

// console.log(n4); // -> 20
// console.log(--n4); // -> 19
// console.log(n4); // -> 19

//Compound Assignment Operators
// let x = 100
// x += 100;
// x = x + 100;

// let x = 10;
 
// x += 2;
// console.log(x); // -> 12
// x -= 4;
// console.log(x); // -> 8
// x *= 3;
// console.log(x); // -> 24
// x /= 6;
// console.log(x); // -> 4
// x **= 3;
// console.log(x); // -> 64
// x %= 10;
// console.log(x); // -> 4


//3.07 Logical Operators
// console.log(true && true); // -> true
// console.log(true && false); // -> false
// console.log(false && true); // -> false
// console.log(false && false); // -> false

// console.log(true || true); // -> true
// console.log(true || false); // -> true
// console.log(false || true); // -> true
// console.log(false || false); // -> false

// console.log(!true); // -> false
// console.log(!false); // -> true

// const a = false;
// const b = true;
// const c = false;
// const d = true;
 
// console.log(a && b && c || d); // -> true
// console.log(a && b && (c || d)); // -> false

//Logical operators and non-Boolean values
// let nr = 0;
// let year = 1970;
// let name = "Alice";
// let empty = "";
 
// console.log(!nr); // -> true
// console.log(!year); // -> false
// console.log(!name); // -> false
// console.log(!empty); // -> true
 
// console.log(!!nr); // -> false
// console.log(!!name); // -> true

// console.log(true && 1991); // -> 1991
// console.log(false && 1991); // -> false
// console.log(2 && 5); // -> 5
// console.log(0 && 5); // -> 0
// console.log("Alice" && "Bob"); // -> Bob
// console.log("" && "Bob"); // -> empty string
 
// console.log(true || 1991); // -> true
// console.log(false || 1991); // -> 1991
// console.log(2 || 5); // -> 2
// console.log(0 || 5); // -> 5
// console.log("Alice" || "Bob"); // -> Alice
// console.log("" || "Bob"); // -> Bob

// let x = 0;
// let y = 0;
// console.log(x++ && y++); // -> 0
// console.log(x); // -> 1
// console.log(y); // -> y == 0

//3.0.9 Compound Assignment Operators
//let a = true;
//console.log(a); // -> true
//a &&= false;
//console.log(a); // -> false

//let b = false;
//console.log(b); // -> false
//b ||= true;
//console.log(b); // -> true

//3.0.10 SECTION PRACTICE
//example01
//console.log(2 _ 3 _ 1);      // expected 7  
//console.log(2 _ 4);          // expected 16  
//console.log(5 _ 1);          // expected 5  
//console.log(8 _ 2 _ 5 _ 2);   // expected 39
console.log(2 * 3 + 1);
console.log(2 ** 4);
console.log(5 * 1); 
console.log(8 ** 2 - 5 ** 2);

//example02
// console.log(4 * 5 _ 20);
// console.log(6 * 5 _ "30");
// console.log(-17 _ 0);
// console.log(25 _ 1);
// console.log(2 + 2 * 2 _ 4);
console.log(4 * 5 === 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);  
console.log(25 > 1);  
console.log(2 + 2 * 2 != 4);

//example03
// console.log(true _ false);
// console.log(false _ false);
// console.log(false _ false _ true);
// console.log(true _ false _ false && true);
console.log(true || false);  
console.log(false || ! false);  
console.log(false || false || true);  
console.log(true || false && false && true);