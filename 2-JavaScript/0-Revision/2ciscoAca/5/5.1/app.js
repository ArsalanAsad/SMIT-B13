//5.1.1 Parameters validation................................
// function getMeanTemp(temperatures) {
//     if (!(temperatures instanceof Array)) {
//         return NaN;
//     }
//     let sum = 0;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     return sum / temperatures.length;
// }
// console.log(getMeanTemp(10));       // -> NaN
// console.log(getMeanTemp([10, 30])); // -> 20

//5.1.2 Recursion..............................................

// function factorial (n) {
//     let result = 1;
//     while (n > 1) {
//         result *= n;
//         n--;
//     }
//     return result;
// }
// console.log(factorial(6)); // -> 720

// function factorial (n) {
//     return n > 1 ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(6)); // -> 720

//5.1.3 Functions as first-class members............................

// function showMessage(message) {
//     console.log(`Message: ${message}`);
// }
// let sm = showMessage;

// sm("This works!"); // -> Message: This works!
// console.log(typeof sm); // -> function

// function doNothing() {
//     return undefined;
// }
// let a = doNothing(); // assign result of function call
// let b = doNothing;   // assign a function
// console.log(typeof a); // -> undefined
// console.log(typeof b); // -> function

// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function operation(func, first, second) {
//     return func(first, second);
// }
// console.log(operation(add, 10, 20)); // -> 30
// console.log(operation(multiply, 10, 20)); // -> 200

//5.1.4 Function expressions..............................................

// function add(a, b) {
//     return a + b;
// }
// let myAdd = add;
// console.log(myAdd(10, 20)); 	// -> 30
// console.log(add(10, 20));	// -> 30

// let myAdd = function add(a, b) {
//     return a + b;
// }
// console.log(myAdd(10, 20)); // -> 30
// console.log(add(10, 20)); // -> 30

// let myAdd = function(a, b) {
//     return a + b;
// }
// console.log(myAdd(10, 20)); // -> 30

// function operation(func, first, second) {
//     return func(first, second);
// }
// let myAdd = function(a, b) {
//     return a + b;
// }
// console.log(operation(myAdd, 10, 20)); // -> 30
// console.log(operation(function(a, b) {
//     return a * b;
// }, 10, 20)); // -> 200

//5.1.5 Callbacks..............................................................

//Synchronous callbacks
// let inner = function() {
//     console.log('inner 1');
// }
// let outer = function(callback) {
//     console.log('outer 1');
//     callback();
//     console.log('outer 2');
// }
// console.log('test 1');
// outer(inner);
// console.log('test 2');

//5.1.6 Asynchronous callbacks...................................................
// let inner = function () {
//     console.log('inner 1');
// }
// let outer = function (callback) {
//     console.log('outer 1');
//     setTimeout(callback, 1000) /*ms*/;
//     console.log('outer 2');
// }
// console.log('test 1');
// outer(inner);
// console.log('test 2');

//5.1.7 setTimeout and setInterval functions.........................................

// let inner = function() {
//     console.log('inner 1');
//     }
//     let outer = function(callback) {
//     console.log('outer 1');
//     let timerId = setInterval(callback, 1000) /*ms*/;
//     console.log('outer 2');
//     setTimeout(function(){
//          clearInterval(timerId);
//     }, 5500);
//     }
//     console.log('test 1');
//     outer(inner);
//     console.log('test 2');

//     window.addEventListener("click", function() {
//         console.log("clicked!");
//    });

//5.1.8 Arrow functions...................................................................

//    let add = function(a, b) {
//     return a + b;
// }
// console.log(add(10, 20)); // -> 30

// let add = (a, b) => {
//     return a + b;
// }
// console.log(add(10, 20)); // -> 30

// let add = (a, b) => a + b;
// console.log(add(10, 20)); // -> 30

// function factorial(n) {
//     return n > 1 ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(5)); // -> 120

// let names = ['Alice', 'Eve', 'John'];
// function showName(element) {
//     console.log(element);
// }
// names.forEach(showName); // -> Alice, Eve, John


//5.1.10 SECTION PRACTICE.............................................

// Excercise01 Arrays in JavaScript have a sort method available which, as you might guess, allows you to sort its elements. This method takes as an argument a function that will compare two elements of the array. The function should return zero if we consider the arguments to be the same, a value less than zero if we consider the first one to be smaller than the second, and a value larger than zero otherwise. Take a look at the example:
// let numbers = [50, 10, 40, 30, 20];
// function compareNumbers(a, b) {
//      let retVal = 0;
//      if (a < b) {
//          retVal = -1;
//      } else if(a > b) {
//          retVal = 1;
//      }
//      return retVal;
// }
// let sorted = numbers.sort(compareNumbers);
// console.log(sorted); // [10, 20, 30, 40, 50]
// 1amodify the above piece of code to make it as short as possible. Suggestions:

// use an anonymous function;
// use an arrow function;

//solution
// let numbers = [50, 10, 40, 30, 20];
// let sorted = numbers.sort((a, b) => a - b);
// console.log(sorted); // [10, 20, 30, 40, 50]

//1b Then modify the function so that the elements are sorted in descending order, not in ascending order as in the example

//Solution:
// let numbers = [50, 10, 40, 30, 20];
// let sorted = numbers.sort((a, b) => b - a);
// console.log(sorted); // [50, 40, 30, 20, 10]

//Excercise02 Write three functions with the names add, sub, and mult, which will take two numerical arguments. The functions are to check if the given arguments are integers (use Number.isInteger). If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. The functions are to be declared using a function statement.
// Example of use and expected results:
// console.log(add(12, 10)); // -> 22
// console.log(mult(12, 10.1)); // -> NaN

//Solution:
// function add(a, b) {
//     if (!Number.isInteger(a) || !Number.isInteger(b)) {
//         return NaN;
//     }
//     return a + b;
// }

// function sub(a, b) {
//     if (!Number.isInteger(a) || !Number.isInteger(b)) {
//         return NaN;
//     }
//     return a - b;
// }

// function mult(a, b) {
//     if (!Number.isInteger(a) || !Number.isInteger(b)) {
//         return NaN;
//     }
//     return a * b;
// }

// // Example usage
// console.log(add(12, 10));      // -> 22
// console.log(sub(12, 10));      // -> 2
// console.log(mult(12, 10.1));   // -> NaN

// Excercise03 Rewrite the functions from the previous task using an arrow function expression, trying to write them in the shortest possible form.
// Example of use and expected results:
// console.log(sub(12, 10)); // -> 2
// console.log(mult(10, 10.1)); // -> NaN

//Solution:
// const add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
// const sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
// const mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;

// // // Example usage
// console.log(sub(12, 10));      // -> 2
// console.log(mult(10, 10.1));   // -> NaN

// Exercise 4: Write an action function that will take the callback function as its first argument and the other two arguments as numbers. As a callback function, you will be able to pass one of the three functions from the previous task. The action function will call the callback function passed to it and will return the obtained result. The callback function will accept the second and third arguments from the action call.
// Example of use and expected results:
// console.log(action(add, 12, 10)); // -> 22
// console.log(action(sub, 12, 10)); // -> 2
// console.log(action(mult, 10, 10.1)); // -> NaN

//Solution:
// const action = (callback, a, b) => callback(a, b);

// // Example usage (using previously defined add, sub, mult)
// console.log(action(add, 12, 10));     // -> 22
// console.log(action(sub, 12, 10));     // -> 2
// console.log(action(mult, 10, 10.1));  // -> NaN

// Exercise 5: Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.
// Expected results:

// Exercise 5: Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.
// Expected results:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//Solution:
// let count = 1;

// const intervalId = setInterval(() => {
//     console.log(count);
//     count++;
//     if (count > 10) {
//         clearInterval(intervalId);
//     }
// }, 2000);

// Exercise 6: Write a function that will calculate the n-th element of the Fibonacci sequence. This sequence is defined by a formula:
// So each element of the sequence (except the first two) is the sum of the previous two. For example: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 and F6 = F5 + F4 = 8. The function should use recursion. In the definition, use a function expression (store an anonymous function in a variable).
// Example of use and expected results:
// console.log(fibbRec(4)); // -> 3
// console.log(fibbRec(7)); // -> 13

// Solution:
// const fibbRec = function(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibbRec(n - 1) + fibbRec(n - 2);
// };

// Example usage
// console.log(fibbRec(4)); // -> 3
// console.log(fibbRec(7)); // -> 13

//Exercise 7: Rewrite the function from Task 5 using an arrow function expression, but try to shorten its code as much as possible (use conditional operators, and try not to use additional variables other than the parameter n).

//Solution:
// const fibbRec = n => n < 2 ? n : fibbRec(n - 1) + fibbRec(n - 2);

// // Example usage
// console.log(fibbRec(4)); // -> 3
// console.log(fibbRec(7)); // -> 13

//Exercise 8: Write an iterative version of the function from Exercise 5 (use the for loop). Declare the function using a function statement.

//Solution:
// function fibbIter(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     let prev = 0, curr = 1;
//     for (let i = 2; i <= n; i++) {
//         [prev, curr] = [curr, prev + curr];
//     }
//     return curr;
// }

// // Example usage
// console.log(fibbIter(4)); // -> 3
// console.log(fibbIter(7)); // -> 13

// Scenario
// Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

// showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this);
// showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
// addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.
// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];

//SOlution:
let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

// Function to show a single contact
// function showContact(contactList, index) {
//     if (!(contactList instanceof Array) || typeof index !== "number" || index < 0 || index >= contactList.length) {
//         console.log("Invalid contact list or index.");
//         return;
//     }
//     const contact = contactList[index];
//     console.log(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
// }

// // Function to show all contacts
// function showAllContacts(contactList) {
//     if (!(contactList instanceof Array)) {
//         console.log("Invalid contact list.");
//         return;
//     }
//     contactList.forEach((contact, index) => {
//         console.log(`\nContact #${index}`);
//         showContact(contactList, index);
//     });
// }

// // Function to add a new contact
// function addNewContact(contactList, name, phone, email) {
//     if (!(contactList instanceof Array) || !name || !phone || !email) {
//         console.log("Invalid input. Make sure to provide all contact details and a valid contact list.");
//         return;
//     }
//     contactList.push({ name, phone, email });
//     console.log("New contact added.");
// }

// // Example usage:
// showContact(contacts, 1);      // Shows Raja Villarreal
// showAllContacts(contacts);     // Shows all contacts
// addNewContact(contacts, "Alice Johnson", "1234 567 890", "alice@example.com"); // Adds a contact
// showAllContacts(contacts);     // Shows updated contact list

// Scenario
// We will use the functions to add one more item of functionality. Arrays have a sort method that allows us to sort their elements. To this method, we pass a function which should compare two elements of the array and decide which one is smaller and which one is bigger. If the first element is smaller, the function returns a value less than zero, if they are equal it returns zero, and if the first is larger, it returns a value greater than zero. For example, the array:
// let numbers = [10, 50, 40, 20];
// can be sorted in ascending order with a call:
// numbers.sort(function (a, b) {
//     let retVal = 0;
//     if (a > b) {
//         retVal = 1;
//     } else {
//         retVal = -1;
//     }
//     return retVal;
// });
// or more simply:
// numbers.sort((a, b) => a - b);
//Give the user the option to select a sort action from the list. When this option is selected, the user should be able to specify whether they want to sort the contacts by name, phone, or email.
// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];
// let showContact = function(contacts, i) {
//     if (contacts instanceof Array && contacts[i]) {
//         console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
//     }
// }

// let showAllContacts = function(contacts) {
//     if (contacts instanceof Array) {
//         for (contact of contacts) {
//             console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
//         }
//     }
// }

// let addNewContact = function(contacts, name, phone, email) {
//     if (contacts instanceof Array && name && phone && email) {
//         contacts.push({
//             name: name,
//             phone: phone,
//             email: email
//         });
//     }
// }

//Solution:
let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
};

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (let contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
};

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
};

// Function to sort contacts based on a given field (name, phone, or email)
let sortContacts = function(contacts, field) {
    if (contacts instanceof Array) {
        contacts.sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
        console.log(`Contacts sorted by ${field}:`);
        showAllContacts(contacts);
    }
};

// Simulate user input and call sorting functions
function promptSortOption() {
    // Replace the prompt with a manual selection for now (as we're not using a UI)
    const userChoice = prompt("Select sorting option: \n1. Sort by Name\n2. Sort by Phone\n3. Sort by Email");

    switch (userChoice) {
        case '1':
            sortContacts(contacts, 'name');
            break;
        case '2':
            sortContacts(contacts, 'phone');
            break;
        case '3':
            sortContacts(contacts, 'email');
            break;
        default:
            console.log("Invalid option, please choose a valid sorting criteria.");
    }
}

// Example usage (in a real scenario, prompt would be used to get input from the user)
promptSortOption(); // For testing purposes, you would manually change the input

