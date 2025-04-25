// Declaring and initializing variables for the contacts
// let name1 = "Maxwell Wright";
// let phone1 = "(0191) 719 6495";
// let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

// let name2 = "Raja Villarreal";
// let phone2 = "0866 398 2895";
// let email2 = "posuere.vulputate@sed.com";

// let name3 = "Helen Richards";
// let phone3 = "0800 1111";
// let email3 = "libero@convallis.edu";

// Display the first and last contact info
// console.log(`${name1} / ${phone1} / ${email1}`);
// console.log(`${name3} / ${phone3} / ${email3}`);

// let str = "java  script  language";

// console.log(str.length);  //  ->  20
// console.log('test'.length);  //  ->  4

// console.log(str.charAt(0));  //  ->  'j'
// console.log('abc'.charAt(1));  //  ->  'b'

// console.log(str.slice(0, 4));  //  ->  'java'
// console.log('test'.slice(1, 3));  //  ->  'es'

// console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
// console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']

// let str = "text";
// let strStr = String(str);
// console.log(`${typeof str}  :  ${str}`);  //  ->  string  :  text
// console.log(`${typeof strStr}  :  ${strStr}`);  //  ->  string  :  text

// let nr = 42;
// let strNr = String(nr);
// console.log(`${typeof nr}  :  ${nr}`);  //  ->  number  :  42
// console.log(`${typeof strNr}  :  ${strNr}`);  //  ->  string  :  42

// let bl = true;
// let strBl = String(bl);
// console.log(`${typeof bl}  :  ${bl}`);  //  ->  boolean  :  true
// console.log(`${typeof strBl}  :  ${strBl}`);  //  ->  string  :  true

// let bnr = 123n;
// let strBnr = String(bnr);
// console.log(`${typeof bnr}  :  ${bnr}`);  //  ->  bigint  :  123
// console.log(`${typeof strBnr}  :  ${strBnr}`);  //  ->  string  :  123

// let un = undefined;
// let strUn = String(un);
// console.log(`${typeof un}  :  ${un}`);  //  ->  undefined  :  undefined
// console.log(`${typeof strUn}  :  ${strUn}`);  //  ->  string  :  undefined

// let n = null;
// let strN = String(n);
// console.log(`${typeof n}  :  ${n}`);  //  ->  object  :  null
// console.log(`${typeof strN}  :  ${strN}`);  //  ->  string  :  null

/// Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.

// let b1 = true;
// let b2 = Boolean(true);

// let n1 = 100;
// let n2 = Number(200);

// let bi1 = 100n;
// let bi2 = BigInt(200);

// let s1 = "Hello";
// let s2 = String("Hello");

// let u1 = undefined;

//Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].

// console.log(`${b1} [${typeof b1}]`);
// console.log(`${b2} [${typeof b2}]`);
// console.log(`${n1} [${typeof n1}]`);
// console.log(`${n2} [${typeof n2}]`);
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
// console.log(`${s1} [${typeof s1}]`);
// console.log(`${s2} [${typeof s2}]`);
// console.log(`${u1} [${typeof u1}]`);

// Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

// let b = Boolean( BigInt(Number("1234")));
// console.log(`${b} [${typeof b}]`);

// or

// let s = "1234";
// let n = Number(s);
// let bi = BigInt(n);
// let b = Boolean(bi);
// console.log(`${b} [${typeof b}]`);

// Try adding two values of different types and check the results.

let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

//Try adding two values of different types and check the results.

console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]

//Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1

const str1 = 42 + +"1";
console.log(str1)