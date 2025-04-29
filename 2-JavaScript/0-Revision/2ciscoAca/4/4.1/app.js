//4.1.2 The while loop....................................................

// console.log(0); // -> 0
// console.log(10); // -> 10
// console.log(20); // -> 20
// console.log(30); // -> 30
// console.log(40); // -> 40
// console.log(50); // -> 50
// console.log(60); // -> 60
// console.log(70); // -> 70
// console.log(80); // -> 80
// console.log(90); // -> 90

// let n = 0;
 
// console.log(n); // -> 0
// n += 10;
// console.log(n); // -> 10
// n += 10;
// console.log(n); // -> 20
// n += 10;
// console.log(n); // -> 30
// n += 10;
// console.log(n); // -> 40
// n += 10;
// console.log(n); // -> 50
// n += 10;
// console.log(n); // -> 60
// n += 10;
// console.log(n); // -> 70
// n += 10;
// console.log(n); // -> 80
// n += 10;
// console.log(n); // -> 90
// n += 10;

// console.log(n);
// n += 10;

// let n = 0;
// while(n < 91) {
//     console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
//     n += 10;
// }

// while(condition) {
//     block of code
// }

// let isOver = false;
// let counter = 1;
 
// while (isOver != true) {
//     let continueLoop = confirm(`[${counter}] Continue the loop?`);
//     isOver = continueLoop === true ? false : true;
//     counter = counter + 1;
// }

// let isOver = false;
// let counter = 1;
 
// while (!isOver) {
//     isOver = !confirm(`[${counter++}] Continue the loop?`);
// }

//4.1.3 The do … while loop..................................................

// do {
//     code block
// } while(condition);

// let isOver;
// let counter = 1;
 
// do {
//     isOver = !confirm(`[${counter++}] Continue the loop?`);
// } while (!isOver);

// let condition = false;
 
// while (condition) {
//     console.log("A while loop iteration."); // never executed
// }
 
// do {
//     console.log("A do ... while loop iteration."); // executed once
// } while (condition);

//4.1.4 The for loop........................................................

// for (initialization; condition; increment) {
//     block of code
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
// i++;
// }

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < 4; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190

//4.1.5 Loops and arrays................................................................

// let names = [];
// let isOver = false;
// while (!isOver) {
//     let name = prompt("Enter another name or press cancel.");
//     if (name != null) {
//         names.push(name);
//     } else {
//         isOver = true;
//     }
// }
 
// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// let values = [10, 30, 50, 100];
 
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]); // -> 10, 30, 50, 100
// }
 
// for (let i = values.length - 1; i > 0; i--) {
//     console.log(values[i]); // -> 100, 50, 30, 10
// }
 
// for (let i = 0; i < values.length; i += 2) {
//     console.log(values[i]); // -> 10, 50
// }

//4.1.6 for … of................................................................................

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let number of values) {
//     sum += number;
// }
// console.log(sum); // -> 190

//syntax for of loop..............
// for (variable of array) {
//     block of code
// }

// let cities = [
//     { name: "New York", population: 18.65e6 },
//     { name: "Cairo", population: 18.82e6 },
//     { name: "Mumbai", population: 19.32e6 },
//     { name: "São Paulo", population: 20.88e6 },
//     { name: "Mexico City", population: 21.34e6 },
//     { name: "Shanghai", population: 23.48e6 },
//     { name: "Delhi", population: 25.87e6 },
//     { name: "Tokyo", population: 37.26e6 }
// ];
 
// for (let city of cities) {
//     if (city.population > 20e6) {
//         console.log(`${city.name} (${city.population})`);
//     }
// }

//4.1.7 for … in..................................................................................

// let user = {
//     name: "Calvin",
//     surname: "Hart",
//     age: 66,
//     email: "CalvinMHart@teleworm.us"
// };
 
// for (let key in user) {
//     console.log(key); // -> name, surname, age, email
// };
// console.log(user.name); // -> Calvin
// console.log(user[name]); // -> Calvin

// for (let key in user) {
//     console.log(`${key} -> ${user[key]}`);
// };

//4.1.8 The break and continue statements..........................................................

// let i = 0;
// // An infinite loop
// while (true){
//     console.log(i);
//     i++;
//     if (i >= 5) {
//         break;
//     }
// }
 
// alert(`Exited the loop with a break (${i}).`);

// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
//}

//4.1.9 The break keyword........................................................................

// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
 
// switch (gate) {
//     case "a":
//         alert("Gate A: empty");
//     case "b":
//         alert("Gate B: main prize");
//         win = true;
//     case "c":
//         alert("Gate C: empty");
//     default:
//         alert("No gate " + String(gate));
// }
 
// if (win) {
//     alert("Winner!");
// }

// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
 
// switch (gate) {
//     case "a":
//     case "A":
//     case 1:
//     case "1":
//         alert("Gate A: empty");
//         break;
//     case "b":
//     case "B":
//     case 2:
//     case "2":
//         alert("Gate B: main prize");
//         win = true;
//         break;
//     case "c":
//     case "C":
//     case 3:
//     case "3":
//         alert("Gate C: empty");
//         break;
//     default:
//         alert("No gate " + String(gate));
// }
 
// if (win) {
//     alert("Winner!");
// }

// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
 
// switch (gate) {
//     case "a": {
//         let message = "Gate A";
//         console.log(message);
//         break;
//     }
//     case "b": {
//         let message = "Gate B";
//         console.log(message);
//         break;
//     }
//     case "c": {
//         let message = "Gate C";
//         console.log(message);
//         break;
//     }
//     default:
//         alert("No gate " + String(gate));
// }
 
// if (win) {
//     alert("Winner!");
// }

///4.1.11 SECTION PRACTICE...............................................................

//Exercise 1: Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc.
for (i=100; i>=0; i-=10) {
    console.log(i);
}

//Exercise 2: Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog).
//Check if the entered values are correct (that the initial value is greater than the final value).
let upperLimit = Number(prompt("Enter upper limit"));
let lowerLimit = Number(prompt("Enter lower limit"));

if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
    for (i = upperLimit; i >= lowerLimit; i -= 10) {
        console.log(i);
    }
}

// Exercise 3: There are ten different numbers in the following numbers array:
// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
// Write a program that first writes out all these numbers on the console, then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0), then only those that are larger than 10 and at the same time smaller than 60.
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (number of numbers) {
    console.log(number);
}

for (number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

for (number of numbers) {
    if (number > 10 && number < 60) {
        console.log(number);
    }
}

// Exercise 4: Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com (second prompt). The program will allow you to enter as many movies as you want into the movies array. Each element of the array will be an object, consisting of two fields: title and imdb. The input is completed if the user presses Cancel in the prompt dialog. Then the program should first print out to the console all movies that have a rating of less than 7, then those whose rating is greater than or equal to 7. Write the name of the movie and its rating next to each other, e.g.:
// Lost in Translation (7.7)

let movies = [];
while (true) {
    let title = prompt("Enter movie title");
    let rating = prompt("Enter movie rating (imdb)");

    if (title === null || rating === null) {
        break
    } else {
        movies.push({
            title: title,
            rating: Number(rating)
        });
    }
}

console.log("All with ratings under 7:");
for (movie of movies) {
    if (movie.rating < 7) {
        console.log(`${movie.title} (${movie.rating})`);
    }
}

console.log("All with ratings over 7:");
for (movie of movies) {
    if (movie.rating >= 7) {
        console.log(`${movie.title} (${movie.rating})`);
        break;
    }
}

//Exercise 5: The contents of the object describing the position of the vessel named "Mareno" are written on the console:


// LATITUDE -> 40.07288 
// LONGITUDE -> 154.48535 
// COURSE -> 285.6 
// SPEED -> 14.0 
// IMO -> 9175717 
// NAME -> MARENO

//The code presented below is used for this. Complete the program by declaring the missing object in place of the three dots:


// let vessel = ... 
 
// for( let key in vessel) { 
//     console.log(`${key} -> ${vessel[key]}`); 
// }

let vessel = {
    LATITUDE: 40.07288,
    LONGITUDE: 154.48535,
    COURSE: 285.6,
    SPEED: 14.0,
    IMO: 9175717,
    NAME: "MARENO"
}

for (let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}

//Exercise 6: Modify the calculator program that you made in Module 4 Section 2 in such a way that it will work in the loop until the user inputs Q in any of the prompt boxes.

while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
}

///4.1.12  LAB  Loops

// We can improve our contact list program a bit by using loops. You can now try to display not only the first or last contact, but all contacts in the list, regardless of their number.

// Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. The user can choose to:

// display the first contact (first)
// display the last contact (last)
// display all contacts (all)
// add a new contact (new)
// exit the program (quit)
// After executing the selected action, the program will give the opportunity to choose again. The program should end the actions only after the user gives a specified command, for example quit.

// let contacts = [{
// name: "Maxwell Wright",
// phone: "(0191) 719 6495",
// email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
// name: "Raja Villarreal",
// phone: "0866 398 2895",
// email: "posuere.vulputate@sed.com"
// }, {
// name: "Helen Richards",
// phone: "0800 1111",
// email: "libero@convallis.edu"
// }];

//solution
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
  
  function displayContact(contact) {
    console.log(`Name: ${contact.name}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.email}\n`);
  }
  
  function main() {
    let action = "";
    
    while (action !== "quit") {
      console.log("Please choose an action:");
      console.log("1. Display first contact (first)");
      console.log("2. Display last contact (last)");
      console.log("3. Display all contacts (all)");
      console.log("4. Add a new contact (new)");
      console.log("5. Quit the program (quit)");
  
      action = prompt("Enter your choice (first, last, all, new, quit):").toLowerCase();
  
      switch(action) {
        case "first":
          displayContact(contacts[0]);
          break;
          
        case "last":
          displayContact(contacts[contacts.length - 1]);
          break;
          
        case "all":
          console.log("Displaying all contacts:\n");
          for (let i = 0; i < contacts.length; i++) {
            displayContact(contacts[i]);
          }
          break;
          
        case "new":
          let name = prompt("Enter the contact's name:");
          let phone = prompt("Enter the contact's phone number:");
          let email = prompt("Enter the contact's email:");
  
          contacts.push({
            name: name,
            phone: phone,
            email: email
          });
  
          console.log("New contact added!\n");
          break;
          
        case "quit":
          console.log("Exiting the program.");
          break;
  
        default:
          console.log("Invalid choice, please try again.");
      }
    }
  }
  
  main();
  