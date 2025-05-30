//4.0.2 The if statement............................
// if (condition) {
//     block of code
// }

// let isUserReady = confirm("Are you ready?");
// console.log(isUserReady);
// if (isUserReady) {
//     alert("User ready!");
// }

// let unitPrice = 10;
// let pieces = prompt("How many pieces you order?",0);
// if (pieces>0) {
//     let total = unitPrice * pieces;
//     console.log(total);
// }
// console.log(total);

// let userAge = 23;
// let isFemale = false;
// let points = 703;
// let cartValue = 299;
// let shippingCost = 9.99;
// if (userAge > 21) {
//     if (cartValue >= 300 || points >= 500) {
//         shippingCost = 0;
//         console.log(shippingCost);
//     }
// }
// console.log(shippingCost);

// if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
//     shippingCost = 0;
//     console.log(shippingCost)
// }
// console.log(shippingCost);

//4.0.3 The if ... else statement.................................
// let isUserReady = confirm("Are you ready?");
 
// if (isUserReady) {
//     console.log("User ready!");
// }
 
// if (isUserReady == false) {
//     console.log("User not ready!");
// }

// if (condition) {
//   condition - true code
// } else {
//   condition - false code
// }

// let isUserReady = confirm("Are you ready?");
 
// if (isUserReady) {
//     console.log("User ready!");
// } else {
//     console.log("User not ready!");
// }

//4.0.4 The if … else … if statement..........................
// if (conditions_1) {
//   code
// } else if (condition_2) {
//   code
// } else if (condition_3) {
//   code
// } else {
//   code
// }

// let enterNumber = prompt("enter number",0);
// if (enterNumber < 10) {
//     alert("<10");
// } else if (enterNumber < 30) {
//     alert("<30");
// } else if (enterNumber < 60) {
//     alert("<60");
// } else if (enterNumber < 90) {
//     alert("<90");
// } else if (enterNumber < 100) {
//     alert("<100");
// } else if (enterNumber == 100) {
//     alert("==100");
// } else {
//     alert(">100")
// }

// const INSURANCE_COST = 2.99;

// let shippingCost = 9.99;
// let isOrderValid = true;

// let userAge = 22;
// let points = 400;
// let cartValue = 199;
// let hasPromoCode = false;
// let hasParentsApproval = false;
// let addInsurance = true;

// /** calculate shipping cost*/
// if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
// shippingCost = 0;
// } else if (userAge < 21 && hasParentsApproval) {
// shippingCost = shippingCost - 5;
// } else if (userAge < 21) {
// isOrderValid = false;
// }

// /** take account of insurance */
// if (isOrderValid && addInsurance && !hasPromoCode) {
// shippingCost += INSURANCE_COST;
// }

// /** show message */
// if (isOrderValid) {
// console.log(shippingCost);
// } else {
// console.log("Cannot order if under 21");
// }

//4.0.5 Conditional operator...........................
// let price = 100
// let shippingCost;
// if (price > 50) {
//     shippingCost = 0;
// } else {
//     shippingCost = 5;
// }
// console.log(`price = ${price}, shippingCost = ${shippingCost}`)

// let price = 100;
// let shippingCost = price > 50 ? 0 : 5;
 
// console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

// let start = confirm("Start?");
// start ? alert("Here we go!") : console.log("Aborted");

// let start = confirm("Start?");
// let message = start ? "Here we go!" : "Aborted";
// alert(message);

//4.0.6 The switch … case statement.........................
// switch (expression) {
//     case first_match:
//         code
//         break;
//     case second_match:
//         code
//         break;
//     default:  
//         code
// }

let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
