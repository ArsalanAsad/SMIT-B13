// Output
// document.getElementById('demo').innerHTML = 5 + 6;
// document.write(5 + 6);
// alert(5 + 6);
// console.log(6 + 5);

// prompt and alert

// var martriculation = prompt("Enter your Martriculation Marks");
// var entryTest = prompt("Enter your entry test numbers")

// var number1 = +martriculation;
// var number2 = +entryTest;

// var avg = (number1 + number2) / 2;

// if (avg < 70) {
//     alert("you are not eligible");
// } else {
//     alert("you are eligible");
// }


// Convert prompt to number and strict check
// var a = prompt ("enter your number")
// a = Number(a);
// if (a === 10) {
//     alert ("Hello World");
// }


// Push, Pop, Unshift, Shift, Splice and Slice
// var a = 25
// var b = "enter your number"
// var c = ["one", 2, "three", "four"];
// console.log(c)
// c.push("Gul Khan", "Fareed") //push add at the last of array.
// console.log(c)
// c.pop(); //pop delete last value of array.
// console.log(c)
// c.unshift("huzaifa", "abdullah") //unshfit add value at the start of array
// console.log(c)
// c.shift() //shift remove vaule at start of the array
// console.log(c)
// c.splice(2, 0, "Jawed_nihari") // splice start at index number which is given 2 then delete which is 0 then add)
// console.log(c)
// var fruit = c.slice(1, 15); // slice create copy of array then extract given index number from array and start from next number.
// console.log(fruit, c);

// FOR LOOP
// let a = 20
// var arry = []
// for (var i=0 ; i < 10; i ++ ) {
//     console.log(i)
// }
// alert ('Hello')

// var arry = ["sami", "irfan", "rizwan", "abdullah"]
// for (var i = 0 ; i < arry.length; i++) {
//     console.log (arry[i])
// }
// alert ('this is for loop')


//operators
var firstNum = 5
var secondNum = 10

// firstNum = firstNum + secondNum
// console.log (firstNum)
// console.log (firstNum+5)
// console.log (firstNum, secondNum)  

// firstNum = firstNum + firstNum
// console.log(firstNum)
// console.log(secondNum)

// var subtraction = firstNum - secondNum
// console.log(subtraction, "subtraction")

// var multiplication = firstNum * secondNum
// console.log (multiplication, "multiplication")

// var division = firstNum / secondNum
// console.log(division, "division")

// var remainder = s % secondNum
// console.log(remainder, "remainder")

// firstNum = firstNum + 5
// firstNum += 5
// console.log(firstNum)

// firstNum = firstNum+1
// firstNum +=1
// console.log(firstNum)

// firstNum++
// console.log(firstNum)
// console.log(++firstNum)
// console.log(firstNum)

// console.log(++firstNum)
// console.log(firstNum--) //no effect
// console.log(--firstNum)

// BODMAS
// var result = 2 + (22 + 6) / 4 * 2
// console.log(result) 

//add and concatinate
// var a = 1 + 1
// var b = 'one' + 'one'
// console.log(a, b)

//javascript would perform matahematics on operators which assign to number like value except +
// var a = "1" - 2
// console.log(a)
// var age = "26"
// var userAge = prompt ("Enter your age", "26")
// console.log(typeof userAge)

//contatenate
// var age = prompt ("enter your age")
// var addedAge = age + 2
// console.log(addedAge)

var a = 1
var b = 2

// CONDITION CHECKS
// console.log(a === b)
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)

// var mySalary = 50000
// var newSalary = '50000'
// data , value 

//  console.log(newSalary !== mySalary, "salary")

var result = a > b

// var role = prompt ("enter your role")

// var teacherRole = "teacher"
// var studentRole = "student"

// if (role === teacherRole) {
//     console.log("Password is abcdef")
// } else if(role === studentRole) {
//     console.log("Password ghijkl")
// } else {
//     console.log("Access denied")
// }

// var result = true
// if (result) {
// console.log("running")
// } else {
//     console.log("running in else")
// }

// if //keyword
// () //data type boolean
//{} // run if return in true

// var a = 6
// var condition = true
// console.log(condition, "===condition")

// if (true) {
//     console.log("Value of a = 6")
// } else {
//     console.log("value of a !=6")
// }

// var dahiHai = false
// var doodhHai = false
// var andeHai = true
// var malaiWaliDahi = false

// if (dahiHai) {
//     if (malaiWaliDahi) {
//         console.log("dahi le awo")
//     } else {
//         console.log("Khali hath ajao")
//     }
// } else if (doodhHai) {
//     console.log("doodh le awo")
// } else if (andeHai) {
//     console.log("ande le awo")
// } else {
//     console.log("khali hath ajao")
// }

var age = prompt("enter your age")
if (age >= 20) {
    var isMarried = prompt ("aap shdi shuda hai?")
    if (isMarried === "yes") {
        var isChildren = prompt ("aap k bache hen")
        if (isChildren === "yes") {
            console.log("shadi na karein")
        } else {
            console.log("ek or karlein")
        }
    } else {
        console.log("shadi karlein")
    } 
} else {
    console.log("shadi nakarein")
}