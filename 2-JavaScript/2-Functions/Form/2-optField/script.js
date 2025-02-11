document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate form
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
        // Here you can add further actions like sending the data to a server
        // For example: submitFormData(name, email, message);
    }
});