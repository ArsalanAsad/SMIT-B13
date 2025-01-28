document.getElementById("myForm").addEventListener("submit", function(event) {
    const inputs = document.querySelectorAll('input[required]');
    inputs.forEach(function(input) {
        if (!input.value) {
            input.style.border = '2px solid red'
        } else {
            input.style.border = ''
        }
    })
})




// document.getElementById("myForm").addEventListener("submit", function(event) {
//     const inputs = document.querySelectorAll('input[required]');
//     inputs.forEach(function(input) {
//         if (!input.value) {
//             input.style.border = '2px solid red'; // Make border red if blank
//         } else {
//             input.style.border = ''; // Reset border if field is filled
//         }
//     });
// });
