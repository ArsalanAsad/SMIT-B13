const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://i.ibb.co/jZ1rf0t/pancakes.jpg",
    desc: "Fluffy golden pancakes with butter and syrup. A classic morning delight."
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "https://i.ibb.co/4T0p7GX/burger.jpg",
    desc: "Double-layer burger with cheese and crispy fries. The perfect lunch combo."
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://i.ibb.co/8cLbFQc/milkshake.jpg",
    desc: "Extra-thick vanilla milkshake topped with whipped cream and sprinkles."
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "https://i.ibb.co/YXGLM67/breakfast.jpg",
    desc: "A hearty plate with eggs, sausage, toast, and fresh vegetables."
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "https://i.ibb.co/hcB2339/egg-burger.jpg",
    desc: "Loaded burger with fried egg, cheese, and smoky sauce."
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "https://i.ibb.co/KL4b8D8/oreo-shake.jpg",
    desc: "Creamy Oreo shake blended with chocolate syrup and crushed cookies."
  }
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// Load all items initially
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

// Filter items
filterBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    const category = e.currentTarget.dataset.category;
    const menuCategory = category === "all" ? menu : menu.filter(item => item.category === category);

    displayMenuItems(menuCategory);
  });
});

// Function to display items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    return `
      <article class="menu-item">
        <img src="${item.img}" alt="${item.title}">
        <div class="item-info">
          <header class="item-header">
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>
    `;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
