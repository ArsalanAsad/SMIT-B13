// //var : //Global
// var a = 1
// let a = 1

// //boundary start
// function myName (){
//     if(){
//         var x = 2
//     }
//     function foo(){
//         var aFoo = 1
//     }
//     console.log(x)
//     let c = 2
// }
// //boundary end

// function myName() {
//     if(){
//         let a = 1
//     }
//     console.log(a)
// }

// var globalGreeting = "Good ";

// function testFunction() {
//     var localGreeting = "Morning ";
//     console.log("function;")
//     console.log(globalGreeting);
//     console.log(localGreeting);
// }

// testFunction();

// console.log("main program:");
// console.log(globalGreeting);
// console.log(localGreeting);


//Hoisting
//var  height  =  180;
//console.log(height);    //  ->  180
//console.log(weight);    //  ->  Uncaught  ReferenceError:  weight  is  not  defined

// var  height  =  180;
// console.log(height);    //  ->  180
// console.log(weight);    //  ->  undefined
// var  weight  =  70;
// console.log(weight);    //  ->  70

// // there are many possible and correct variable names
// let rosePrice = 8;
// let lilyPrice = 10;
// let tulipPrice = 2;

// let numberOfRoses = 70;
// let numberOfLilies = 50;
// let numberOfTulips = 120;

// let rosesValue = rosePrice * numberOfRoses;
// let liliesValue = lilyPrice * numberOfLilies;
// let tulipsValue = tulipPrice * numberOfTulips;

// let total = rosesValue + liliesValue + tulipsValue;
// console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
// console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
// console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
// console.log("Total: ", total);

let num = 1

function hWorld () {
     if (num > 3) {
        alert ('number is Greater then 3')
     } else {
        alert ('hellow world')
     }
}

hWorld();