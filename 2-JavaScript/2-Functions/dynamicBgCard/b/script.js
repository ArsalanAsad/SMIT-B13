document.addEventListener("DOMContentLoad", function() {
    const title = prompt("Enter the product title");
    const description = prompt("Enter the product description");
    const buttonTitle = prompt("Enter the button title");
    const buttonLink = prompt("Enter the button link (absolute URL):");
    const imageLink = prompt("Enter the image link (absolute URL):");

    document.getElementById("product-title").textContent = title;
    document.getElementById("product-description").textContent
})