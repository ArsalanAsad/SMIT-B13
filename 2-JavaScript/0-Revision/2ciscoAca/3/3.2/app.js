//3.2.1
//Dialoguebox
// alert("Hello, World!")
// window.alert("Hello, World! for the second time");

// alert(4 * 7);
// alert(true);

// alert("text 1", "text 2"); // only "text 1" will be displayed

//Confirm dialoguebox
// let decision = window.confirm("Is it OK?");
// console.log(decision);

// let remove = confirm("Remove all data?");
// let message = remove ? "Deleting Data" : "Cancelled"

// console.log(message);

// //Prompt dialogbox
// let name = window.prompt("What is your name?", "John Doe");
// name = name ? name : "anonymous";

// let age = prompt("Hello " + name + " how old are you?");
// alert(name + " is " + age + " years old");

//3.2.4 SECTION PRACTICE

// let width = prompt("Volume of the box, enter width", 0);
// let height = prompt("Volume of the box, enter height", 0);
// let length = prompt("Volume of the box, enter length", 0);
// let volume = width * height * length;
// alert(`Calculated box volume is ${volume}`);

//3.2.5  LAB  Interaction

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// write your code here
// Prompt user for new contact details
let name = prompt("Enter the contact's name:");
let phone = prompt("Enter the contact's phone number:");
let email = prompt("Enter the contact's email address:");

// Add the new contact to the array
contacts.push({
    name: name,
    phone: phone,
    email: email
});

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
