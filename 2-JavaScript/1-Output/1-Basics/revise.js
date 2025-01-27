// let a = 25
// let b = 50
// let c = ['one', '2', 'three', 'four']

// console.log(c)
// c.push('gulkhan', 'fareed')
// console.log(c)
// c.pop()
// console.log(c)
// c.unshift('huzaifa', 'abdullah')
// console.log(c)
// c.shift()
// console.log(c)
// c.splice(2, 2, 'jawednihar')
// console.log(c)
// let fruit = c.slice(1, 15)
// console.log(c, fruit)

// let a = 20
// var arry = []
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// alert ('hello world')

// var arry = ['Mubeen', 'Alam', 'Zohaib', 'Adam', 'Mansoor']
// for (var i = 0; i < arry.length; ++i) {
//     console.log(arry[i])
// }

// slice, charAt, indexOf, lastIndexOf, replace, replaceAll
// Math .random, .ceil, .floor, .round

// let city = 'afganistan'

// console.log(city.slice(0, 3))
// console.log(city.charAt(5))
// console.log([6])
// console.log(city.indexOf('t'))
// console.log(city.lastIndexOf('a'))
// console.log(city.replace('A', 'a'))
// console.log(city.replaceAll('a', 'A'))


// MATCH, ROUND, CEIL, FLOOR
// let bill = 15.7766666
// let newBill = Math.round(bill)
// console.log(newBill)

// let newBill1 = Math.ceil(bill)
// console.log(newBill1)

// let newBill2 = Math.floor(bill)
// console.log(newBill2)


//RANDOM NUMBER GENERATION
// let random = Math.random()
// console.log(random.toFixed(2))
// console.log(random)

// let highest = Math.random()*10
// let lowest = 0.0000000000000001 * 2
// console.log(Math.round(highest))
// console.log(lowest)

// DATE
// let date = new Date()

// console.log(typeof date.toTimeString())
// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getMilliseconds())
// console.log(date.getSeconds())
// console.log(date.getMinutes())
// console.log(date.getHours())

// const bdDate = new Date("6 Dec 2025");
// bdDate.setFullYear("2026");
// bdDate.setMonth("");

// console.log(bdDate)

// console.log(date.getHours());
// console.log(date.getMilliseconds());

// console.log(typeof date);

// scope
// block-scope vs function scope
// while loop
// do-while loop
// swith case

// const studentMarks = prompt('enter your number') 
// switch (+studentMarks) {
//     case 50:
//         console.log("fail") 
//         break
//     case 70:
//         console.log("promoted")
//         break
//     case 100:
//         console.log("top")
//         break
//     default:
//         console.log("not eligible")
// }

// let age = 24
// console.log(age);

// function Name() {
//     let age = 24
//     console.log(age)
//     console.log(age)
//     let sum = 20
//     console.log(sum)
//     if (true) {
//         var One = "fareed"
//     }
//     console.log(One)
// }
// Name()
// console.log(One)

// let f = 1

// while (f < 10) {
//     console.log(f)
//     f++
// }

// let ii = 0

// do { 
//     console.log(ii)
//     ii++
// } while (ii < 10)

// let allAllocated = false
// let currentNumber = 1
// let sum = 0

// while (allAllocated === false) {
//     currentNumber++
//     const isPrimeNumber = false
//     if (isPrimeNumber) sum += currentNumber
//     //find out and add prime number
//     if (sum >= 100) allAllocated = true
// }

// let allAllocated = false;
// let currentNumber = 1;
// let sum = 0;

// while (!allAllocated) {
//     currentNumber++;
    
//     // Check if currentNumber is prime
//     let isPrimeNumber = true;
    
//     for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
//         if (currentNumber % i === 0) {
//             isPrimeNumber = false;
//             break;
//         }
//     }

//     if (isPrimeNumber && currentNumber > 1) {
//         sum += currentNumber;
//     }
    
//     // Check if the sum of prime numbers is greater than or equal to 100
//     if (sum >= 100) {
//         allAllocated = true;
//     }
// }

// console.log("Sum of prime numbers:", sum);

let allAllocated = false;
let currentNumber = 1;
let sum = 0;
let primes = []; // Array to store prime numbers

while (!allAllocated) {
    currentNumber++;
    
    // Check if currentNumber is prime
    let isPrimeNumber = true;
    
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
        if (currentNumber % i === 0) {
            isPrimeNumber = false;
            break;
        }
    }

    if (isPrimeNumber && currentNumber > 1) {
        sum += currentNumber;
        primes.push(currentNumber); // Add the prime number to the array
    }
    
    // Check if the sum of prime numbers is exactly 100
    if (sum >= 100) {
        allAllocated = true;
    }
}

// Output the results
console.log("Prime numbers:", primes);
console.log("Sum of prime numbers:", sum);

