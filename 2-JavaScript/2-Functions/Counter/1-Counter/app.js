//select element
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

//initialize count
let count = 0

//update display dynamically
function updateDisplay() {
    counter.textContent = count;

    //change color dynamically
    if (count > 0) {
        counter.style.color = "#1dd1a1";
    } else if (count < 0) {
        counter.style.color = "#ff6b6b";
    } else {
        counter.style.color = "#444";
    }
}

//Button Listner
increaseBtn.addEventListener('click', () =>{
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () =>{
    count--;
    updateDisplay();
})

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
})