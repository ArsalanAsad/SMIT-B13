// Toast
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

function handleSignup() {
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (!name || !email || !password) return showToast("Please fill in all fields.");

    if (users.find(u => u.email === email)) {
        return showToast("Email already registered.");
    }

    users.push({ id: Date.now(), name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    showToast("Account created! Redirecting...");

    setTimeout(() => {
        window.location.href = "signin.html";
    }, 1200);
}
