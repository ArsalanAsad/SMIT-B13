document.addEventListener("DOMContentLoaded", function() {
    const title = prompt("Enter the product title");
    const description = prompt("Enter the product description");
    const buttonTitle = prompt("Enter the button title:");
    const buttonLink = prompt("Enter the button link (absolute URL):");
    const imageLink = prompt("Enter the image link (absolute URL):");

    document.getElementById("product-title").textContent = title;
    document.getElementById("product-description").textContent = description;
    document.getElementById("product-button").textContent = buttonTitle;
    document.getElementById("product-button").href = buttonLink;
    document.getElementById("product-image").src = imageLink;
})