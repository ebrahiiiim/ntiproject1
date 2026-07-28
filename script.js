const bar = document.querySelector(".bar");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector("nav .links > ul");

const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > .a1");
const dropdownMenu = document.querySelector(".dropdown-menu");

bar.addEventListener("click", function () {
  menu.classList.add("active");
  document.body.classList.add("menu-open");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("active");
  document.body.classList.remove("menu-open");

  dropdown.classList.remove("open");
  dropdownMenu.classList.remove("active");
});

dropdownLink.addEventListener("click", function (e) {
  e.preventDefault();

  dropdown.classList.toggle("open");
  dropdownMenu.classList.toggle("active");
});

const cardsContainer = document.querySelector(".cards");
const categoriesContainer = document.querySelector(".category-cards");
const products = [
  {
    image: "img\\1.jpg",
    name: "Premium Pan",
    price: "1200 EGP",
  },
  {
    image: "img\\2.jpg",
    name: "Kitchen Organizer",
    price: "999 EGP",
  },
  {
    image: "img\\3.jpg",
    name: "Wooden Serving Tray",
    price: "450 EGP",
  },
  {
    image: "img\\4.jpg",
    name: "Wood Table",
    price: "250 EGP",
  },
];
products.forEach(function (product) {
  const card = document.createElement("div");

  card.classList.add("card");
  card.innerHTML = `
        <img  src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;
  cardsContainer.appendChild(card);
});
const categories = [
  {
    image: "img\\arshia.jpg",
    name: "Arshia",
    link: "product.html",
  },
  {
    image: "img\\ikea.jpg",
    name: "IKEA",
    link: "product.html",
  },
  {
    image: "img\\kabas.png",
    name: "Elkabas Import",
    link: "product.html",
  },
  {
    image: "img\\other.png",
    name: "Other",
    link: "product.html",
  },
];
categories.forEach(function (category) {
  const categoryCard = document.createElement("div");

  categoryCard.classList.add("category-card");

  categoryCard.innerHTML = `
        <img src="${category.image}" alt="${category.name}">

        <div class="category-content">
            <h3>${category.name}</h3>
            <a href="${category.link}">Shop Now</a>
        </div>
    `;

  categoriesContainer.appendChild(categoryCard);
});
