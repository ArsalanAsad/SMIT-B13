const showToast = (msg) => {
    const box = document.getElementById("toast-container");
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    box.appendChild(t);

    setTimeout(() => t.classList.add("show"), 50);
    setTimeout(() => {
        t.classList.remove("show");
        setTimeout(() => t.remove(), 300);
    }, 3000);
};

let users = JSON.parse(localStorage.getItem("users")) || [];

function handleSignin() {
    const email = document.getElementById("signin-email").value.trim();
    const password = document.getElementById("signin-password").value.trim();

    const valid = users.find(u => u.email === email && u.password === password);

    if (!valid) return showToast("Invalid login.");

    localStorage.setItem("currentUser", JSON.stringify(valid));

    showToast("Signed in!");

    setTimeout(() => {
        window.location.href = "feed.html";
    }, 1000);
}
