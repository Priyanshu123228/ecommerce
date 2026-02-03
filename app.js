const products = [
  { name: "Wireless Earbuds", price: 1999, rating: 4.5, category: "Electronics" },
  { name: "Smart Watch", price: 2999, rating: 4.2, category: "Electronics" },
  { name: "Bluetooth Speaker", price: 1499, rating: 4.0, category: "Electronics" },
  { name: "Laptop Stand", price: 899, rating: 4.3, category: "Electronics" },
  { name: "Gaming Mouse", price: 1299, rating: 4.6, category: "Electronics" },

  { name: "Men's T-Shirt", price: 499, rating: 4.1, category: "Fashion" },
  { name: "Women's Jeans", price: 999, rating: 4.4, category: "Fashion" },
  { name: "Sneakers", price: 1599, rating: 4.7, category: "Fashion" },
  { name: "Leather Wallet", price: 699, rating: 4.2, category: "Fashion" },
  { name: "Sunglasses", price: 899, rating: 4.0, category: "Fashion" },

  { name: "Coffee Mug Set", price: 799, rating: 4.3, category: "Home" },
  { name: "LED Table Lamp", price: 1099, rating: 4.5, category: "Home" },
  { name: "Wall Clock", price: 599, rating: 4.1, category: "Home" },
  { name: "Kitchen Knife Set", price: 1299, rating: 4.6, category: "Home" },
  { name: "Bedsheet Combo", price: 1499, rating: 4.2, category: "Home" },

  { name: "JavaScript Basics Book", price: 499, rating: 4.7, category: "Books" },
  { name: "Python Programming Book", price: 599, rating: 4.8, category: "Books" },
  { name: "DSA Interview Guide", price: 699, rating: 4.6, category: "Books" },
  { name: "Business Intelligence Notes", price: 399, rating: 4.1, category: "Books" },
  { name: "Self Improvement Book", price: 299, rating: 4.0, category: "Books" }
];

const productContainer = document.getElementById("productContainer");
const sortSelect = document.getElementById("sortSelect");
const categorySelect = document.getElementById("categorySelect");
const countText = document.getElementById("countText");

let filteredProducts = [...products];


function displayProducts(list) {
  productContainer.innerHTML = "";

  countText.innerText = `Showing ${list.length} Products`;

  list.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
      <p>⭐ Rating: ${p.rating}</p>
      <p class="category">${p.category}</p>
    `;

    productContainer.appendChild(card);
  });
}


function filterProducts() {
  const selectedCategory = categorySelect.value;

  if (selectedCategory === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(
      (p) => p.category === selectedCategory
    );
  }

  applySorting();
}


function applySorting() {
  let sortedProducts = [...filteredProducts];
  const sortValue = sortSelect.value;

  if (sortValue === "price-asc") sortedProducts.sort((a, b) => a.price - b.price);
  if (sortValue === "price-desc") sortedProducts.sort((a, b) => b.price - a.price);

  if (sortValue === "name-asc") sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  if (sortValue === "name-desc") sortedProducts.sort((a, b) => b.name.localeCompare(a.name));

  if (sortValue === "rating-asc") sortedProducts.sort((a, b) => a.rating - b.rating);
  if (sortValue === "rating-desc") sortedProducts.sort((a, b) => b.rating - a.rating);

  displayProducts(sortedProducts);
}


categorySelect.addEventListener("change", filterProducts);
sortSelect.addEventListener("change", applySorting);


displayProducts(products);
