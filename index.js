
// ==========================================
// CRAVE HOUSE — MAIN JAVASCRIPT
// ==========================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const money = (amount) =>
  new Intl.NumberFormat("uz-UZ").format(amount) + " so'm";

const image = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`;

const categories = [
  ["Burger", "🍔"],
  ["Pizza", "🍕"],
  ["Lavash", "🌯"],
  ["Shawarma", "🥙"],
  ["Doner", "🥙"],
  ["Hot-dog", "🌭"],
  ["Sandwich", "🥪"],
  ["Chicken", "🍗"],
  ["Nuggets", "🍗"],
  ["Fries", "🍟"],
  ["Sushi", "🍣"],
  ["Pasta", "🍝"],
  ["Salat", "🥗"],
  ["Desert", "🍰"],
  ["Tort", "🎂"],
  ["Donut", "🍩"],
  ["Ice Cream", "🍦"],
  ["Drinks", "🥤"],
  ["Coffee", "☕"],
  ["Milkshake", "🥛"]
];

// ==========================================
// PRODUCTS — 40 TA TAOM
// ==========================================

const products = [
  ["Classic Burger","Burger",39000,49000,4.9,"Mol go'shti, salat, maxsus sous","photo-1568901346375-23c9450c58cd"],
  ["Double Cheeseburger","Burger",59000,69000,5.0,"Ikki qavat go'sht, pishloq","photo-1553979459-d2229ba7433a"],
  ["Chicken Burger","Burger",35000,42000,4.8,"Tovuq, salat, pishloq","photo-1606755962773-d324e0a13086"],
  ["BBQ Burger","Burger",49000,59000,4.9,"BBQ sous, mol go'shti","photo-1550547660-d9450f859349"],
  ["Pepperoni Pizza","Pizza",69000,79000,4.9,"Pepperoni, mozzarella","photo-1628840042765-356cda07504e"],
  ["Margarita Pizza","Pizza",55000,65000,4.8,"Pomidor, mozzarella, rayhon","photo-1574071318508-1cdbab80d002"],
  ["Four Cheese Pizza","Pizza",79000,89000,4.9,"To'rt xil pishloq","photo-1571407970349-bc81e7e96d47"],
  ["Chicken Pizza","Pizza",72000,82000,4.8,"Tovuq, pishloq, sous","photo-1593560708920-61dd98c46a4e"],
  ["Chicken Lavash","Lavash",32000,39000,4.8,"Tovuq, sabzavot, sous","photo-1561758033-d89a9ad46330"],
  ["Beef Lavash","Lavash",42000,49000,4.9,"Mol go'shti, maxsus sous","photo-1528735602780-2552fd46c7af"],
  ["Cheese Lavash","Lavash",39000,45000,4.7,"Pishloq, go'sht, sous","photo-1626082927389-6cd097cdc6ec"],
  ["Classic Shawarma","Shawarma",30000,36000,4.8,"Tovuq, sabzavot, sous","photo-1529006557810-274b9b2fc783"],
  ["Special Shawarma","Shawarma",42000,49000,4.9,"Maxsus ziravorli go'sht","photo-1565299624946-b28f40a0ae38"],
  ["Beef Doner","Doner",45000,52000,4.9,"Mol go'shti, sabzavot","photo-1604908176997-125f25cc6f3d"],
  ["Chicken Doner","Doner",35000,42000,4.8,"Tovuq go'shti, sous","photo-1606756790138-261d2b21cd75"],
  ["Classic Hot Dog","Hot-dog",25000,30000,4.7,"Sosiska, ketchup, mustard","photo-1612392062126-5cc4f8d6a1f5"],
  ["Cheese Hot Dog","Hot-dog",32000,39000,4.8,"Sosiska, pishloq, sous","photo-1619740455993-9e612b1af08a"],
  ["Club Sandwich","Sandwich",35000,42000,4.8,"Tovuq, pomidor, pishloq","photo-1521390188846-e2a3a97453a0"],
  ["Tuna Sandwich","Sandwich",39000,46000,4.7,"Tuna, salat, sous","photo-1553909489-cd47e0ef937f"],
  ["Crispy Chicken","Chicken",49000,59000,4.9,"Qarsildoq tovuq","photo-1626082927389-6cd097cdc6ec"],
  ["Chicken Wings","Chicken",45000,52000,4.8,"Achchiq qanotchalar","photo-1608039829572-78524f79c4c7"],
  ["Chicken Nuggets","Nuggets",28000,35000,4.8,"Tovuq nuggetslari","photo-1562967914-608f82629710"],
  ["Spicy Nuggets","Nuggets",32000,39000,4.9,"Achchiq nuggetslari","photo-1562967916-eb82221dfb92"],
  ["French Fries","Fries",18000,22000,4.8,"Qarsildoq kartoshka fri","photo-1573080496219-bb080dd4f877"],
  ["Cheese Fries","Fries",27000,33000,4.9,"Pishloqli kartoshka","photo-1518013431117-eb1465fa5752"],
  ["Salmon Sushi","Sushi",79000,89000,4.9,"Losos va guruch","photo-1579871494447-9811cf80d66c"],
  ["California Roll","Sushi",69000,79000,4.8,"Qisqichbaqa, avokado","photo-1553621042-f6e147245754"],
  ["Carbonara","Pasta",59000,69000,4.9,"Qaymoq, pishloq, pasta","photo-1612874742237-6526221588e3"],
  ["Alfredo Pasta","Pasta",62000,72000,4.8,"Tovuq va qaymoqli sous","photo-1473093295043-cdd812d0e601"],
  ["Caesar Salad","Salat",39000,45000,4.8,"Tovuq, salat, pishloq","photo-1512621776951-a57141f2eefd"],
  ["Greek Salad","Salat",35000,42000,4.7,"Sabzavot va pishloq","photo-1540420773420-3366772f4999"],
  ["Chocolate Cake","Desert",29000,35000,4.9,"Shokoladli desert","photo-1578985545062-69928b1d9587"],
  ["Cheesecake","Tort",32000,39000,5.0,"Klassik cheesecake","photo-1533134242443-d4fd215305ad"],
  ["Donut","Donut",15000,19000,4.7,"Shirin donut","photo-1551024506-0bccd828d307"],
  ["Strawberry Cake","Tort",35000,42000,4.8,"Qulupnayli tort","photo-1464349095431-e9a21285b5f3"],
  ["Vanilla Ice Cream","Ice Cream",18000,22000,4.8,"Vanilli muzqaymoq","photo-1563805042-7684c019e1cb"],
  ["Chocolate Ice Cream","Ice Cream",22000,27000,4.9,"Shokoladli muzqaymoq","photo-1501446529957-6226bd447c46"],
  ["Fresh Cola","Drinks",12000,15000,4.7,"Sovuq ichimlik","photo-1543255006-d6395b6f1171"],
  ["Cappuccino","Coffee",20000,25000,4.8,"Yumshoq qahva","photo-1534778101976-62847782c213"],
  ["Chocolate Milkshake","Milkshake",25000,32000,4.9,"Shokoladli milkshake","photo-1572490122747-3968b75cc699"]
].map((p, i) => ({
  id: i + 1,
  name: p[0],
  category: p[1],
  price: p[2],
  oldPrice: p[3],
  rating: p[4],
  description: p[5],
  image: image(p[6]),
  popular: 100 - i
}));

// ==========================================
// STORAGE
// ==========================================

function readStorage(key, fallback) {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let cart = readStorage("ch_cart", []);
let favorites = readStorage("ch_favorites", []);
let orders = readStorage("ch_orders", []);
let user = readStorage("ch_user", null);
let selectedCategory = "Barchasi";
let visibleCount = 12;
let searchTerm = "";
let currentReview = 0;

// ==========================================
// TOAST
// ==========================================

let toastTimer;

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

// ==========================================
// CATEGORIES
// ==========================================

function renderCategories() {
  $("#categoryGrid").innerHTML = categories.map(([name, emoji]) => {
    const product = products.find(p => p.category === name);
    const photo = product ? product.image : image("photo-1568901346375-23c9450c58cd");

    return `
      <button class="category-card ${selectedCategory === name ? "active" : ""}"
        data-category="${name}">
        <img src="${photo}" alt="${name}" loading="lazy">
        <b>${emoji} ${name}</b>
        <small>${products.filter(p => p.category === name).length} ta mahsulot</small>
      </button>
    `;
  }).join("");
}

function renderChips() {
  const names = ["Barchasi", ...categories.map(c => c[0])];

  $("#filterChips").innerHTML = names.map(name => `
    <button class="chip ${selectedCategory === name ? "active" : ""}"
      data-filter="${name}">${name}</button>
  `).join("");
}

// ==========================================
// FOOD MENU
// ==========================================

function filteredProducts() {
  let result = products.filter(p => {
    const matchesCategory =
      selectedCategory === "Barchasi" || p.category === selectedCategory;

    const matchesSearch =
      (p.name + " " + p.category + " " + p.description)
        .toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sort = $("#sortSelect").value;

  if (sort === "cheap") result.sort((a, b) => a.price - b.price);
  if (sort === "expensive") result.sort((a, b) => b.price - a.price);
  if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
  if (sort === "popular") result.sort((a, b) => b.popular - a.popular);

  return result;
}

function renderMenu() {
  const result = filteredProducts();
  const visible = result.slice(0, visibleCount);

  $("#menuCount").textContent = `${result.length} ta taom`;

  $("#foodGrid").innerHTML = visible.length
    ? visible.map(p => `
      <article class="food-card">
        <div class="food-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="food-discount">-${Math.round((1-p.price/p.oldPrice)*100)}%</span>
          <button class="favorite-btn ${favorites.includes(p.id) ? "active" : ""}"
            data-favorite="${p.id}" aria-label="Sevimlilarga qo'shish">
            ${favorites.includes(p.id) ? "♥" : "♡"}
          </button>
        </div>
        <div class="food-info">
          <div class="food-meta">
            <span>${p.category}</span>
            <span>⭐ ${p.rating}</span>
          </div>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="food-bottom">
            <div class="food-price">${money(p.price)}<del>${money(p.oldPrice)}</del></div>
            <button class="add-btn" data-add="${p.id}" aria-label="Savatchaga qo'shish">+</button>
          </div>
          <button class="quick-btn" data-quick="${p.id}">Batafsil ko'rish ↗</button>
        </div>
      </article>
    `).join("")
    : `<div class="empty-state">😔<h3>Taom topilmadi</h3><p>Boshqa nom bilan qidirib ko'ring.</p></div>`;

  $("#loadMore").style.display =
    result.length > visibleCount ? "flex" : "none";
}

function updateMenu() {
  visibleCount = 12;
  renderChips();
  renderMenu();
}

// ==========================================
// CART
// ==========================================

function addToCart(product, quantity = 1) {
  const existing = cart.find(item => item.key === product.key);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveStorage("ch_cart", cart);
  renderCart();
  toast(`${product.name} savatchaga qo'shildi!`);
}

function addProduct(id) {
  const p = products.find(item => item.id === Number(id));
  if (!p) return;

  addToCart({
    key: `product-${p.id}`,
    name: p.name,
    price: p.price,
    image: p.image
  });
}

function changeQuantity(key, amount) {
  const item = cart.find(p => p.key === key);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(p => p.key !== key);
  }

  saveStorage("ch_cart", cart);
  renderCart();
}

function removeCartItem(key) {
  cart = cart.filter(p => p.key !== key);
  saveStorage("ch_cart", cart);
  renderCart();
}

function getSubtotal() {
  return cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
}

function renderCart() {
  const count = cart.reduce((sum, p) => sum + p.quantity, 0);

  $("#cartCount").textContent = count;
  $("#drawerCount").textContent = `(${count})`;
  $("#cartTotal").textContent = money(getSubtotal());

  $("#cartItems").innerHTML = cart.length
    ? cart.map(p => `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}">
        <div>
          <h4>${p.name}</h4>
          <p>${money(p.price)}</p>
          <div class="quantity">
            <button data-minus="${p.key}">−</button>
            <b>${p.quantity}</b>
            <button data-plus="${p.key}">+</button>
          </div>
        </div>
        <button class="remove-item" data-remove="${p.key}">×</button>
      </div>
    `).join("")
    : `<div class="empty-state"><h3>🛒</h3><p>Savatchangiz hozircha bo'sh.</p></div>`;

  $("#checkoutBtn").disabled = cart.length === 0;
  $("#checkoutBtn").style.opacity = cart.length ? "1" : ".5";
}

function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#overlay").classList.add("show");
}

function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#overlay").classList.remove("show");
}

// ==========================================
// MODALS
// ==========================================

function openModal(id) {
  closeCart();
  $(`#${id}`).classList.add("open");
}

function closeModals() {
  $$(".modal").forEach(m => m.classList.remove("open"));
}

function quickView(id) {
  const p = products.find(item => item.id === Number(id));
  if (!p) return;

  $("#quickContent").innerHTML = `
    <div class="quick-product">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <span class="eyebrow">${p.category}</span>
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        <p>⭐ ${p.rating} / 5</p>
        <h2 class="orange">${money(p.price)}</h2>
        <button class="btn btn-primary" data-add="${p.id}">
          Savatchaga qo'shish +
        </button>
      </div>
    </div>
  `;

  openModal("quickModal");
}

// ==========================================
// FAVORITES
// ==========================================

function toggleFavorite(id) {
  id = Number(id);

  if (favorites.includes(id)) {
    favorites = favorites.filter(x => x !== id);
    toast("Sevimlilardan olib tashlandi");
  } else {
    favorites.push(id);
    toast("Sevimlilarga qo'shildi ♥");
  }

  saveStorage("ch_favorites", favorites);
  renderMenu();
}

function showFavorites() {
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  if (!favoriteProducts.length) {
    toast("Hozircha sevimli taomlaringiz yo'q");
    return;
  }

  selectedCategory = "Barchasi";
  searchTerm = "";
  $("#searchInput").value = "";
  renderChips();

  $("#foodGrid").innerHTML = favoriteProducts.map(p => `
    <article class="food-card">
      <div class="food-image">
        <img src="${p.image}" alt="${p.name}">
        <button class="favorite-btn active" data-favorite="${p.id}">♥</button>
      </div>
      <div class="food-info">
        <div class="food-meta"><span>${p.category}</span><span>⭐ ${p.rating}</span></div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="food-bottom">
          <strong class="food-price">${money(p.price)}</strong>
          <button class="add-btn" data-add="${p.id}">+</button>
        </div>
      </div>
    </article>
  `).join("");

  $("#menuCount").textContent = `${favoriteProducts.length} ta sevimli taom`;
  $("#loadMore").style.display = "none";
  $("#menu").scrollIntoView({ behavior: "smooth" });
}

// ==========================================
// BURGER CONFIGURATOR
// ==========================================

function calculateBurger() {
  let total = 16000;

  $$('input[name="bun"]:checked, input[name="meat"]:checked, input[name="extra"]:checked')
    .forEach(input => total += Number(input.dataset.price));

  $("#builderPrice").textContent = money(total);
  return total;
}

$$('#configurator input').forEach(input => {
  input.addEventListener("change", calculateBurger);
});

$("#addCustomBurger").addEventListener("click", () => {
  const bun = $('input[name="bun"]:checked');
  const meat = $('input[name="meat"]:checked');
  const extras = $$('input[name="extra"]:checked').map(i => i.value);

  const description = [bun.value, meat.value, ...extras].join(", ");
  const price = calculateBurger();

  addToCart({
    key: "custom-" + Date.now(),
    name: "Mening maxsus burgerim",
    price,
    image: $("#builderImage").src,
    description
  });
});

// ==========================================
// COMBO BUILDER
// ==========================================

const comboItems = {
  main: [
    { name: "Burger", price: 39000 },
    { name: "Pizza", price: 59000 },
    { name: "Lavash", price: 32000 }
  ],
  drink: [
    { name: "Cola", price: 12000 },
    { name: "Fanta", price: 12000 },
    { name: "Milkshake", price: 25000 }
  ],
  side: [
    { name: "Fri", price: 18000 },
    { name: "Nuggets", price: 28000 },
    { name: "Onion Rings", price: 22000 }
  ]
};

function calculateCombo() {
  const main = comboItems.main[$("#comboMain").value];
  const drink = comboItems.drink[$("#comboDrink").value];
  const side = comboItems.side[$("#comboSide").value];

  const total = main.price + drink.price + side.price - 5000;

  $("#comboPrice").textContent = money(total);
  return { main, drink, side, total };
}

["comboMain", "comboDrink", "comboSide"].forEach(id => {
  $("#" + id).addEventListener("change", calculateCombo);
});

$("#addCombo").addEventListener("click", () => {
  const c = calculateCombo();

  addToCart({
    key: "combo-" + Date.now(),
    name: `Combo: ${c.main.name} + ${c.drink.name} + ${c.side.name}`,
    price: c.total,
    image: products[0].image
  });
});

// ==========================================
// CHECKOUT
// ==========================================

function updateCheckoutTotal() {
  const delivery = Number($('select[name="delivery"]').value);
  $("#checkoutTotal").textContent = money(getSubtotal() + delivery);
}

$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.length) return toast("Savatcha bo'sh!");

  updateCheckoutTotal();
  openModal("checkoutModal");
});

$('select[name="delivery"]').addEventListener("change", updateCheckoutTotal);

function validPhone(phone) {
  return /^\+998[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(phone);
}

$("#checkoutForm").addEventListener("submit", e => {
  e.preventDefault();

  if (!cart.length) return toast("Savatcha bo'sh!");

  const form = new FormData(e.target);
  const phone = form.get("phone").trim();

  if (!validPhone(phone)) {
    return toast("Telefon raqamini +998 formatida kiriting!");
  }

  const delivery = Number(form.get("delivery"));
  const subtotal = getSubtotal();

  const order = {
    number: "CH-" + Date.now().toString().slice(-7),
    name: form.get("name"),
    phone,
    address: form.get("address"),
    payment: form.get("payment"),
    delivery,
    note: form.get("note"),
    products: [...cart],
    total: subtotal + delivery,
    date: new Date().toLocaleString("uz-UZ")
  };

  orders.unshift(order);
  saveStorage("ch_orders", orders);

  cart = [];
  saveStorage("ch_cart", cart);
  renderCart();

  closeModals();
  $("#successText").textContent =
    `Buyurtma raqami: ${order.number}. Jami: ${money(order.total)}. Buyurtmangiz demo rejimida saqlandi.`;

  openModal("successModal");
  e.target.reset();
  updateCheckoutTotal();
});

// ==========================================
// PROFILE AND ORDER HISTORY
// ==========================================

function renderProfile() {
  $("#profileInfo").innerHTML = user
    ? `<div class="profile-details">
       <p><b>Ism:</b> ${user.name}</p>
       <p><b>Telefon:</b> ${user.phone}</p>
       <h3>Buyurtmalar tarixi: ${orders.length} ta</h3>
       ${orders.slice(0, 5).map(o => `
         <p>№ ${o.number} — ${money(o.total)}</p>
       `).join("")}
       <button class="clear-cart" id="logoutBtn">Profildan chiqish</button>
       </div>`
    : "";
}

$("#profileBtn").addEventListener("click", () => {
  renderProfile();
  openModal("profileModal");
});

$("#profileForm").addEventListener("submit", e => {
  e.preventDefault();
  const form = new FormData(e.target);
  const phone = form.get("phone").trim();

  if (!validPhone(phone)) return toast("Telefon raqami noto'g'ri!");

  user = {
    name: form.get("name"),
    phone
  };

  saveStorage("ch_user", user);
  renderProfile();
  toast("Profil ma'lumotlari saqlandi!");
});

$("#profileInfo").addEventListener("click", e => {
  if (e.target.id === "logoutBtn") {
    user = null;
    saveStorage("ch_user", null);
    renderProfile();
    toast("Profildan chiqdingiz");
  }
});

// ==========================================
// REVIEWS
// ==========================================

const defaultReviews = [
  { name:"Aziza", rating:5, message:"Burgerlari juda mazali! Yetkazib berish ham tez. Yana buyurtma beraman." },
  { name:"Jasur", rating:5, message:"Pizza juda ajoyib ekan. Ingredientlari yangi va ta'mi zo'r!" },
  { name:"Madina", rating:4, message:"Dizayni ham, taomlari ham juda yoqdi. Xizmat sifati yaxshi." }
];

let reviews = readStorage("ch_reviews", defaultReviews);

function renderReview() {
  if (!reviews.length) return;

  if (currentReview >= reviews.length) currentReview = 0;
  if (currentReview < 0) currentReview = reviews.length - 1;

  const r = reviews[currentReview];

  $("#reviewCard").innerHTML = `
    <div class="review-stars">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div>
    <p>“${escapeHTML(r.message)}”</p>
    <h3>${escapeHTML(r.name)}</h3>
    <small>Mamnun mijoz</small>
  `;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

$("#reviewPrev").addEventListener("click", () => {
  currentReview--;
  renderReview();
});

$("#reviewNext").addEventListener("click", () => {
  currentReview++;
  renderReview();
});

$("#reviewForm").addEventListener("submit", e => {
  e.preventDefault();

  const form = new FormData(e.target);

  reviews.push({
    name: form.get("name"),
    rating: Number(form.get("rating")),
    message: form.get("message")
  });

  saveStorage("ch_reviews", reviews);
  currentReview = reviews.length - 1;
  renderReview();
  e.target.reset();
  toast("Fikringiz saqlandi!");
});

// ==========================================
// CONTACT FORM
// ==========================================

$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const phone = new FormData(e.target).get("phone");

  if (!validPhone(phone.trim())) {
    return toast("Telefon raqamini +998 formatida kiriting!");
  }

  toast("Xabaringiz demo rejimida qabul qilindi!");
  e.target.reset();
});

// ==========================================
// NEWSLETTER
// ==========================================

$("#newsletterForm").addEventListener("submit", e => {
  e.preventDefault();

  const email = new FormData(e.target).get("email");

  const subscribers = readStorage("ch_subscribers", []);

  if (subscribers.includes(email)) {
    return toast("Bu email avval ro'yxatdan o'tgan!");
  }

  subscribers.push(email);
  saveStorage("ch_subscribers", subscribers);

  e.target.reset();
  toast("Email manzilingiz saqlandi!");
});

// ==========================================
// NAVIGATION AND EVENTS
// ==========================================

$("#cartBtn").addEventListener("click", openCart);
$("#mobileCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);

$("#clearCart").addEventListener("click", () => {
  if (!cart.length) return toast("Savatcha allaqachon bo'sh!");

  if (confirm("Savatchadagi barcha mahsulotlarni o'chirmoqchimisiz?")) {
    cart = [];
    saveStorage("ch_cart", cart);
    renderCart();
    toast("Savatcha tozalandi");
  }
});

$(".modal-close").addEventListener("click", closeModals);

$$(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModals();
  });
});

$("#hamburger").addEventListener("click", () => {
  const open = $("#navLinks").classList.toggle("open");
  $("#hamburger").textContent = open ? "✕" : "☰";
});

$$(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    $("#navLinks").classList.remove("open");
    $("#hamburger").textContent = "☰";
  });
});

// Delegated events
document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  if (add) {
    addProduct(add.dataset.add);
    return;
  }

  const fav = e.target.closest("[data-favorite]");
  if (fav) {
    toggleFavorite(fav.dataset.favorite);
    return;
  }

  const quick = e.target.closest("[data-quick]");
  if (quick) {
    quickView(quick.dataset.quick);
    return;
  }

  const plus = e.target.closest("[data-plus]");
  if (plus) {
    changeQuantity(plus.dataset.plus, 1);
    return;
  }

  const minus = e.target.closest("[data-minus]");
  if (minus) {
    changeQuantity(minus.dataset.minus, -1);
    return;
  }

  const remove = e.target.closest("[data-remove]");
  if (remove) {
    removeCartItem(remove.dataset.remove);
    return;
  }

  const chip = e.target.closest("[data-filter]");
  if (chip) {
    selectedCategory = chip.dataset.filter;
    updateMenu();
    return;
  }

  const category = e.target.closest("[data-category]");
  if (category) {
    selectedCategory = category.dataset.category;
    updateMenu();
    $("#menu").scrollIntoView({ behavior: "smooth" });
  }
});

// ==========================================
// SEARCH AND SORT
// ==========================================

$("#searchInput").addEventListener("input", e => {
  searchTerm = e.target.value;
  renderMenu();
});

$("#clearSearch").addEventListener("click", () => {
  $("#searchInput").value = "";
  searchTerm = "";
  renderMenu();
});

$("#sortSelect").addEventListener("change", renderMenu);

$("#loadMore").addEventListener("click", () => {
  visibleCount += 12;
  renderMenu();
});

// ==========================================
// DARK / LIGHT MODE
// ==========================================

const savedTheme = localStorage.getItem("ch_theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  $("#themeBtn").textContent = "☀";
}

$("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const dark = document.body.classList.contains("dark");

  localStorage.setItem("ch_theme", dark ? "dark" : "light");
  $("#themeBtn").textContent = dark ? "☀" : "☾";
});

$("#favoriteNav").addEventListener("click", showFavorites);
$("#mobileFavorites").addEventListener("click", showFavorites);

// ==========================================
// SCROLL EFFECTS
// ==========================================

window.addEventListener("scroll", () => {
  $("#backTop").classList.toggle("show", window.scrollY > 500);

  const sections = $$("main section[id]");

  let current = "home";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) {
      current = section.id;
    }
  });

  $$(".nav-links a").forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});

$("#backTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==========================================
// KEYBOARD SUPPORT
// ==========================================

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeCart();
    closeModals();
    $("#navLinks").classList.remove("open");
    $("#hamburger").textContent = "☰";
  }
});

// ==========================================
// IMAGE FALLBACK
// ==========================================

document.addEventListener("error", e => {
  if (e.target.tagName === "IMG") {
    e.target.src = "https://placehold.co/600x400/f2e5d8/7b4932?text=CRAVE+HOUSE";
  }
}, true);

// ==========================================
// INITIALIZATION
// ==========================================

function initializeWebsite() {
  renderCategories();
  renderChips();
  renderMenu();
  renderCart();
  calculateBurger();
  calculateCombo();
  renderReview();
  renderProfile();
  updateCheckoutTotal();

  console.log("CRAVE HOUSE website muvaffaqiyatli ishga tushdi!");
}

initializeWebsite();
