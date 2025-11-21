const menu = [
  {
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$15.99",
    img: "https://i.imgur.com/6tQxXJX.jpeg",
    desc: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock flannel copper mug whatever cold-pressed"
  },
  {
    title: "Diner Double",
    category: "lunch",
    price: "$13.99",
    img: "https://i.imgur.com/8IltC1q.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid"
  },
  {
    title: "Godzilla Milkshake",
    category: "shakes",
    price: "$6.99",
    img: "https://i.imgur.com/uCLqUCC.jpeg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic raw"
  },
  {
    title: "Country Delight",
    category: "breakfast",
    price: "$20.99",
    img: "https://i.imgur.com/95P8zEo.jpeg",
    desc: "Shabby chic keffiyeh franzen snackwave pork belly shoreditch."
  },
  {
    title: "Egg Attack",
    category: "lunch",
    price: "$22.99",
    img: "https://i.imgur.com/wZmQsoB.jpeg",
    desc: "Franzen vegan pabst bicycle rights kickstarter pinterest meditation."
  },
  {
    title: "Oreo Dream",
    category: "shakes",
    price: "$18.99",
    img: "https://i.imgur.com/Yw7rV7d.jpeg",
    desc: "Portland chicharrones ethical edison bulb."
  },
];

// Load all items initially
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

// Filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    const category = e.target.dataset.category;
    const filteredItems =
      category === "all"
        ? menu
        : menu.filter(item => item.category === category);
    displayMenuItems(filteredItems);
  });
});

function displayMenuItems(menuItems) {
  const menuContainer = document.getElementById("menu-items");
  menuContainer.innerHTML = menuItems
    .map(item => {
      return `
        <div class="menu-item">
          <img src="${item.img}" class="menu-img" alt="${item.title}" />
          <div class="item-info">
            <div class="item-header">
              <p class="item-title">${item.title}</p>
              <p class="item-price">${item.price}</p>
            </div>
            <p class="item-text">${item.desc}</p>
          </div>
        </div>
      `;
    })
    .join("");
}
