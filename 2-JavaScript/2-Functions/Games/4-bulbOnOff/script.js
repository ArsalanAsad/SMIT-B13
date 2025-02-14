// Get references to the bulb, button, and body
const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const body = document.body;

// Variable to track the bulb state
let isOn = false;

// Function to toggle the bulb state
toggleButton.addEventListener("click", () => {
    isOn = !isOn; // Toggle the state

    if (isOn) {
        bulb.classList.add("on"); // Turn on the bulb
        body.classList.remove("dark"); // Remove dark background
        toggleButton.textContent = "Turn Off";
    } else {
        bulb.classList.remove("on"); // Turn off the bulb
        body.classList.add("dark"); // Add dark background
        toggleButton.textContent = "Turn On";
    }
});