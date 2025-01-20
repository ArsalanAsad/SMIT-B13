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
// var firstNum = 5
// var secondNum = 10

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

// var a = 1
// var b = 2

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

// var result = a > b

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

// var age = prompt("enter your age")
// if (age >= 20) {
//     var isMarried = prompt ("aap shdi shuda hai?")
//     if (isMarried === "yes") {
//         var isChildren = prompt ("aap k bache hen")
//         if (isChildren === "yes") {
//             console.log("shadi na karein")
//         } else {
//             console.log("ek or karlein")
//         }
//     } else {
//         console.log("shadi karlein")
//     } 
// } else {
//     console.log("shadi na karein")
// }

//  var classes = prompt("enter your classe")
//  var gender = prompt("enter your gender")

// if (classes >= 10) {
//     if (gender === "male") {
//         console.log("you are eligible for this course")
//     } else {
//         console.log("you are not eligible")
//     }
// } else {
//     console.log("you are not eleigible for this course")
// }

// EXACT MATCH OR BOTH CONDITIONS TRUE
// if (classes >= 10 && gender === "male") {
//     console.log("you are eligible for this course")
// } else {
//     console.log("you are not eligible")
// }

// var matricMarks = prompt ("enter your matric marks")
// var entryTest = prompt ("enter your entrytest marks")

// ATLEAST ONE CONDITION TRUE
// if (matricMarks >= 70 || entryTest >= 70) {
//     console.log("you are eligible for this course")
// } else {
//     console.log("you are not eligible")
// }

//ARRAY
// var students = ["Qurban", "Ali", "Arif"]
// console.log(students)
// console.log(students.length)

// console.log(students[2])
// students.push("Taha")
// console.log(students)

// console.log(students.length)
// console.log(students,students[3])

// students.unshift("Aarish")
// console.log(students, students[0])
// console.log(students.length)

// students.pop() // Remove last
// console.log(students)

// students.shift() // Remove first
// console.log(students)

// var students = []

//  var student1 = prompt("enter sutdent id")
//  students.unshift(student1)

//  var student2 = prompt("enter sutdent id")
//  students.unshift(student2)

//  var student3 = prompt("enter sutdent id")
//  students.unshift(student3)

//  var student4 = prompt("enter sutdent id")
//  students.unshift(student4)

//  var student5 = prompt("enter sutdent id")
//  students.unshift(student5)

//  var student6 = prompt("enter sutdent id")
//  students.unshift(student6)
//  console.log(students)

// students [1] = "newly"
// console.log(students[1]) 

// console.log(students)

//SLICE BREAK ARRAY AS START AND END POINT GIVEN AND COPY ARRAY (END NOT INCLUDE IN THE ARRAY)
// var newArray = [0, 1, 3, 4, 5, 6, 7, 8, 9]
// var slicedArr = newArray.slice (1, 9)
// console.log (newArray, slicedArr) 
// var slicedArr = newArray.slice(1, 6)
// console.log (newArray, slicedArr)

//SPLICE starts at staring given index number number then delete number of index as given then add
// newArray.splice(1, 0, "one", "two", 2.5)
// console.log(newArray)

// FOR LOOP

// for (var i = 0; i < 10; i += 2) {
//     var num = i * 2
//     console.log(i, num, "===loop")
// }

//  for (var i = 0; i <= 10; i += 2) { 
//      console.log(i, "===loop 2")
//  }

// var tableNumber = 2
// for (var i = 1; i <= 10; i++) {
//     var resultOfTable = i * tableNumber
//     var ex = "x"
//     var eq = "="
//     console.log(tableNumber, ex, i, eq, resultOfTable)
// }

// var tableNumber = prompt('enter number which table you want to print on console')
// for (var i = 1; i <= 10; i++) {
//     var resultOfTable = i * tableNumber
//     var ex = "x"
//     var eq = "="
//     console.log(tableNumber, ex, i, eq, resultOfTable)
// }

// var result = prompt ("enter your age")
// console.log(+result, typeof +result) // adding '-' and '+' plus can chnage type of string into number 
// var resultInNum = parseInt(result)
// console.log(resultInNum, typeof resultInNum) // convert string to number but cannot add decimal number
// var resultInNum = parseFloat(result)
// console.log(resultInNum, typeof resultInNum) // convert string to number with decimal
// var resultInNum = Number(result)
// console.log(resultInNum, typeof resultInNum) // can convert string to number with and without decimal

//....Use Case of FOR LOOPS
// var students = ["Nasir", "Jamshed", "Saeed", "Ajmal", "Kamran", "Gulam"]
//   var iteration = 0
//  console.log(students[iteration])

// iteration++
// console.log(students[iteration])

// iteration++
// console.log(students[iteration])

// iteration++
// console.log(students[iteration])

// console.log(students[2])
// console.log(students[3])
// console.log(students[4])

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

// var numbers = [5, 4, 5, 9, 1, 0, 5, 6, 1, 7, 3, 4]

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] == 0) {
//         console.log(i, "=number found")
//         break; //......stop find numbers where it found given value for searching
//     }
//      console.log(numbers[i])
// }

// var shops = ["gulkhan", "Allahwali", "jawednihari", "motiwala", "nagori"]
// var pocketMoney = 0

//  for (var i = 0; i < shops.length; i++) {
//      if (shops[i] == "jawednihari") {
//          continue; //... continue after skip specific value in the array.
//      }
//      pocketMoney += 50;
//     //   console.log(shops[i], pocketMoney)
//  }
//   console.log ( pocketMoney, "==pocket money");


//.....NESTED LOOP
// for (var i = 0; i < 5; i++) {
//     console.log("outer", i)
//      for (var j = 0; j < 3; j++) {
//         console.log("inner", "j:", j, "i:", i);
//     }
// }


//.....To Lower and Upper Case
// var isMarried = prompt("enter yes or no")
// var isMarriedInLower = isMarried.toLowerCase()
// var isMarriedInUpper = isMarried.toUpperCase()

// if (isMarriedInLower === "yes" || isMarriedInLower === "no") {
// console.log(isMarried, isMarriedInLower, "Welcome")
// }

// var answer = "hELLO"
//  console.log(answer, answer.toLowerCase())
//  console.log(answer, answer.toUpperCase())

//..... VAR, LET, CONST
//  var a = 1
//  var b = 2
//  var a = 3

//  let c = 1
//  let g = 2
//  c = 3

//  const d = 1
//  const e = 2

//  console.log(c)

// var : re-declare, re-assign
// let : not re-declare, re-assign
// const : not re-declare, not re-assign

// let country = "Pakistan"
// console.log(country.slice(2,5))
// console.log(country.length, "==length")
// console.log(country[0],"==length")
// console.log(country.charAt(0), "===charAt")
// console.log(country.indexOf("z"), "==Index")
// console.log(country.lastIndexOf("a"), "==lastIndex")

//....LAST CHAR OF STRING
// const lastIndex = country.length - 1
// console.log(lastIndex)
// const lastElement = country.charAt(lastIndex)
// console.log(lastElement)

//.....REPLACE AND REPLACE ALL
// country = country.replace("P", "I")
// console.log(country)

// country = country.replace("a", "b")
// console.log(country)

// country = country.replaceAll("a", "c")
// console.log(country)

// country = country.replaceAll("i", "j")
// console.log(country)
// console.clear()

//....BILL CALCULATION
// const bill = 12.33333333333333333
//const roundedBill = Math.round(bill)
//console.log(roundedBill)
// const cieledBill = Math.ceil(bill)
// console.log(cieledBill)
// const floorbill = Math.floor(bill)
// console.log(floorbill)
// const randomeNumber = Math.random()
// console.log (randomeNumber)
// const ourNumber = randomeNumber * 100
// console.log(ourNumber)
// console.log(Math.floor(ourNumber), randomeNumber.toFixed(2))
// console.log(randomeNumber, randomeNumber.toFixed(2))

//.. DATE
//  const date = new Date()
//  document.write(date)
//  console.log(date, "===date")

   // const date = new Date()
// console.log(Date.now()) //calculate milliseconds

// console.log (date, "===date")
// console.log (date.getDay(), "===day")
// console.log (date.getMonth(), "===month")
// console.log (date.getDate(), "===date")
// console.log (date.getFullYear(), "===year")
// console.log (date.getHours(), "===hours")
// console.log (date.getMinutes(), "===minutes")
// console.log (date.getSeconds(), "===seconds")
// console.log (date.getMilliseconds(), "====milliseconds")
// console.log (date.getTime(), "===miliseconds")
// console.log (date.getDate(), "===date of the day")
// console.log (date.toDateString(), "===give name month and dsy")
// console.log (date.toTimeString(), "give time in readable manner")
// console.log (date.toString(), "give date and time together in readable manner")
// console.log (Date.now(), "===date")

//CALCULATIONS FOR NUMBER OF DAYS.
// const newDate = new Date("October 07, 2035")
// const currentDate = new Date ()
// console.log(parseInt((newDate.getTime()-currentDate.getTime())/1000/60/60/24),"===newDate")

//CALCULATION FOR GETTING FUTURE OR PAST DATE ON SPECIFIC DAY AND AT SPECIFIC TIME
// const newDate = new Date()
// newDate.setFullYear(2029)
// newDate.setMonth(2)
// newDate.setDate(1)
// console.log(newDate)


// const myObj = {
//     name: "Ahmed",
//     age: 25,
//     gender: "male",
// }

// console.log(myObj)
// console.log(myObj.name)
// console.log(myObj["name"])
// console.log(myObj.age)
// console.log(myObj.gender)


//FUNCTION CREATION
//  function greet () {
//      let num1 = 0;
//      const name = prompt("enter your name");
//      const greet = "Welcome" + name;
//      console.log(greet);
//      num1++;
//      console.log(num1);
//  }
// greet()

// const consoles = {
//      log: function () {
//          console.log("Hi")
//      }
// }
// consoles.log()

// function fareed (firstNum, secondNum) {
//     const result = firstNum * secondNum
   // console.log(result)
    //return result
    // console.log(result)
//}
// fareed()

// const one = 1
// const sumResult = fareed (one, 3)
// const sumResult1 = fareed (5, 9)
// const sum3 = fareed (0, 0)
// console.log(sumResult, sumResult1, sum3, "===result" )

//  const myArr = [0, 1, 2, 4, 6]
//  const returned = myArr.pop()
//  const newReturned = myArr.push(8)
//  const consoleLog = console.log (
//      "abc"
//  )
//  console.log(myArr, returned, newReturned, consoleLog)

// // const myFunc = function () { }
// IIFE
// (function(){
//     console.log("run");
// })()

//  function foo(a, b, c, ...d) {
//      console.log(a, b, c);
//     for (let i = 0; i < d.length; i++) {
//          console.log(d[i]);
//      }
//      return 1
//    }
//    const one = foo(1, 2, 3, 4)
//    foo(1, 2, 3, 4, 5, 6)
//    console.log ([1,2].splice(1, 1, "a", "b", "c"))

// var a = 1
// function myfoo () {
//    var a = 2
//    console.log(a);
// }
// function myfoo2() {
//    console.log(a)
// }
// myfoo();
// myfoo2();

// function foo () {
//    const b = 2
//    if (b === 2) {
//       var a = 1
//       console.log(a)
//    }
//    console.log(a)
// }
// function foo2 () { 
//    const b = 2
//    if (b === 2) {
//       let a = 1
//       console.log(a)
//    }
//    console.log(a)
// }
// foo ();
// foo2 ();

// var a = 1 
// function fooScope () {
//    var bScope = 1
//    if (bScope === 1) {
//       var b = 5
//    }
//    console.log(b)
// }
// fooScope ();
// console.log(a);
// console.log(bScope);

// function blockScoped () {
//    let b = 2
//    if (b === 2) {
//       let c = 1
//    }
//    console.log(c);
// }
// blockScoped ();

//  let num = 1
//  const day = +prompt("Enter Day", num)
//  const excercise = ["Chest", "Back", "Shoulder", "Biceps", "Abs", "Legs", "Rest"]
// // //console.log(excercise [day - num]);

// if (day === 1) {
// } else if (day === 2) {
// } else if (day === 3) {
// } else if (day === 4) {
// } else if (day === 5) {
// } else if (day === 6) {
// } else if (day === 7) {
// }
// console.log(excercise[day-num])

// switch (day) {
//    case 1:
//       console.log("Chest")
//       break
//    case 2:
//       console.log("Back")
//       break
//    case 3:
//       console.log("Shoulder")
//       break
//    case 4:
//       console.log("Biceps")
//       break
//    case 5:
//       console.log("Abs")
//       break
//    case 6:
//       console.log("Legs")
//       break
//    case 7: 
//       console.log("Rest")
//       break
//    default:
//       console.log("Cardio")
//       break
// }

// let condition = true
// let a = 1
// condition = a > 10
// while (condition) {
//    console.log("running")
//    condition =  false
// }

// do {
//    console.log("runnning")
//    condition = a > 10
// } while (condition)

// function showName () {
//    alert ("Hi, what's your name?")
// }
// showName()

// splice (index,numberOfElements,...insertElements)

// arr = [0, 1, 2, 3, 4]
// console.log(arr)
// for (let i = 0; i<3; i++) {
//    arr.pop()
//    console.log(arr)
// }

// const pakElement = document.getElementById('pak')
// console.log(pakElement.innerHTML) 

// pakElement.innerHTML = "Ind"
// pakElement.style.backgroundColor = "red"
// pakElement.style.display= "none"

// const myObj = {a:1}
// myObj.a = 2

let fName = Hafeez
let lName = Akbar
function clickMe (fName, lName) {
   console.log("my name is", fName,lName)
}
clickMe()