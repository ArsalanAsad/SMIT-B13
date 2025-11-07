const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle sidebar open/close
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");

  // Change icon between bars and X
  if (navLinks.classList.contains("show-links")) {
    navToggle.innerHTML = '<i class="fa-solid fa-xmark" style="color:red"></i>';
  } else {
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
