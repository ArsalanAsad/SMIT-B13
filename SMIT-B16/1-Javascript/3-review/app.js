// local reviews data
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up."
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "UX Designer",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub."
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn."
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe."
  }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show previous person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
