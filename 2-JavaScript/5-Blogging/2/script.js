const clickButton = document.getElementById("click")
clickButton.addEventListener("click", () => {
    alert("clicked")
    localStorage.setItem("user", { name: "abdullah" })
})

const click2Button = document.getElementById("click-2")
click2Button.addEventListener("click", () => {
    alert("clicked-2")
    const user = localStorage.getItem("user")
    console.log(user)
})

let numberOfStudents = 200
// let shouldClassContinue = false
// if (numberOfStudents > 200) shouldClassContinue = true

// console.log(shouldClassContinue, "===numberOfStudents")
const workEmail = "abc@smit.com"
const personalEmail = "abc@gmail.com"

// const shouldClassContinue = (numberOfStudents > 200) ? true : false
// const isAllowed = shouldClassContinue && "Class in runıng"
// const isRun = shouldClassContinue || "Class in runıng"
// console.log(isAllowed)
// const practicalPassed = true
// const theoriticalMarks = 85
// const sendEmailTo = workEmail || personalEmail
// const isPassed = practicalPassed && theoriticalMarks
// console.log(isPassed)