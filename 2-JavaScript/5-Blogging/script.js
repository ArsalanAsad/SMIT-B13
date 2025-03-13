const clickButton = document.getElementById("click")
clickButton.addEventListener("click", () => {
    alert("clicked")
    localStorage.setItem("user", { name: "abdullah" })
})