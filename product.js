const bar = document.getElementById("bar");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > .a1");
const dropdownMenu = document.querySelector(".dropdown-menu");

bar.addEventListener("click", function () {
  menu.classList.add("active");
  document.body.classList.add("menu-open");
});

close.addEventListener("click", function () {
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

const productsContainer = document.getElementById("products");
const search = document.getElementById("search");

const products = [
  {
    image: "img/1.jpg",
    name: "Arshia Premium Pan",
    price: "1200 EGP",
  },
  {
    image: "img/2.jpg",
    name: "Ikea Kitchen Organizer",
    price: "999 EGP",
  },
  {
    image: "img/3.jpg",
    name: "Wooden Serving Tray",
    price: "450 EGP",
  },
  {
    image: "img/4.jpg",
    name: "Wood Table",
    price: "250 EGP",
  },
  {
    image: "img/5.jpg",
    name: "Smart Water Pump",
    price: "120 EGP",
  },
  {
    image: "img/6.jpg",
    name: "Arshia Container Sets",
    price: "550 EGP",
  },
  {
    image: "img/7.jpg",
    name: "Kitchen Organizer",
    price: "195 EGP",
  },
  {
    image: "img/8.jpg",
    name: "Makeup Organizer",
    price: "395 EGP",
  },
  {
    image: "img/1.jpg",
    name: "Arshia Premium Pan",
    price: "1200 EGP",
  },
  {
    image: "img/2.jpg",
    name: "Ikea Kitchen Organizer",
    price: "999 EGP",
  },
  {
    image: "img/5.jpg",
    name: "Smart Water Pump",
    price: "120 EGP",
  },
  {
    image: "img/6.jpg",
    name: "Arshia Container Sets",
    price: "550 EGP",
  },
];

function displayProducts(list) {
  productsContainer.innerHTML = "";

  if (list.length === 0) {
    productsContainer.innerHTML = `
      <p class="no-result">No products found</p>
    `;
    return;
  }

  list.forEach(function (product) {
    const card = document.createElement("div");

    card.classList.add("product");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart('${product.name}')">
          Add to Cart
        </button>
      </div>
    `;

    productsContainer.appendChild(card);
  });
}

displayProducts(products);

search.addEventListener("input", function () {
  const searchValue = search.value.toLowerCase();

  const filteredProducts = products.filter(function (product) {
    return product.name.toLowerCase().includes(searchValue);
  });

  displayProducts(filteredProducts);
});

function addToCart(productName) {
  const message = document.createElement("div");

  message.classList.add("success-message");

  message.textContent = `${productName} added to cart successfully!`;

  document.body.appendChild(message);

  setTimeout(function () {
    message.remove();
  }, 2000);
}

