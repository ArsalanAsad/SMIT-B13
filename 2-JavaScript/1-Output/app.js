// Output
document.getElementById('demo').innerHTML = 5 + 6;
document.write(5 + 6);
alert(5 + 6);
console.log(6 + 5);

// prompt and alert

var martriculation = prompt("Enter your Martriculation Marks");
var entryTest = prompt("Enter your entry test numbers")

var number1 = +martriculation;
var number2 = +entryTest;

var avg = (number1 + number2) / 2;

if (avg < 70) {
    alert("you are not eligible");
} else {
    alert("you are eligible");
}