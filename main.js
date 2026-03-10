// ==========================================
// Mock Data
// ==========================================
const mockRestaurants = [
    {
        id: 1,
        name: "cloud bite",
        rating: 4.8,
        image: "sundari.png",
        menu: [
            { id: 101, name: "Fish fry", price: 299.99, image: "fish fry.jpg" },
            { id: 102, name: "Fish combo", price: 500.99, image: "fish combo.jpg" },
            { id: 103, name: "Fish curry", price: 200.99, image: "fish curry.jpg" },
            { id: 104, name: "Fish biriyani", price: 250.99, image: "fish biryani.jpg" },
            { id: 105, name: "Nandu soup", price: 150.99, image: "Nandu soup.jpg" },
            { id: 106, name: "Nethili 65", price: 50.99, image: "nethili 65.jpg" },
            { id: 107, name: "prawn 65", price: 100.99, image: "prawn 65.jpg" },
            { id: 108, name: "chiken 65", price: 200.99, image: "chicken 65.jpg" }
        ]
    },
    {
        id: 2,
        name: "Saravana bhavan",
        rating: 4.9,
        image: "sb.png",
        menu: [
            { id: 201, name: "Dosa", price: 14.50, image: "dosa.jpg" },
            { id: 202, name: "Idly", price: 12.00, image: "idly.jpg" },
            { id: 203, name: "poori", price: 3.50, image: "poori.jpg" },
            { id: 204, name: "pongal", price: 250.99, image: "pongal.jpg" },
            { id: 205, name: "chappathi", price: 150.99, image: "chapathi.jpg" },
            { id: 206, name: "upma", price: 50.99, image: "upma.jpg" },
            { id: 207, name: "appam", price: 100.99, image: "appam.jpg" },
            { id: 208, name: "vada", price: 200.99, image: "vada.jpg" }
        ]
    },
    {
        id: 3,
        name: "madras kitchen ",
        rating: 4.7,
        image: "p.jpg",
        menu: [
            { id: 301, name: "Bun Parotta", price: 18.99, image: "bun.jpg" },
            { id: 302, name: "Poricha Parotta", price: 21.99, image: "poricha parotta.jpg" },
            { id: 303, name: "Kizhi Parotta", price: 6.99, image: "kizhi paroota.jpg" },
            { id: 304, name: "kothu parotta", price: 250.99, image: "kothu.jpg" },
            { id: 305, name: "nool parotta", price: 150.99, image: "nool.jpg" },
            { id: 306, name: "romaliya roti", price: 50.99, image: "romali.jpg" },
            { id: 307, name: "naan", price: 100.99, image: "naan.jpg" },
            { id: 308, name: "panner butter masala", price: 200.99, image: "panner butter.jpg" }
        ]
    },
    {
        id: 4,
        name: "meena kitchen",
        rating: 4.6,
        image: "a.jpg",
        menu: [
            { id: 401, name: "Chicken briyani", price: 13.99, image: "chicken biryani.jpg" },
            { id: 402, name: "mutton briyani", price: 11.99, image: "mutton biriyani.jpg" },
            { id: 403, name: "chicken pakoda(150g)", price: 7.99, image: "chicken 65.jpg" },
            { id: 404, name: "Fish biriyani", price: 250.99, image: "fish biryani.jpg" },
            { id: 405, name: "mutton chukka", price: 150.99, image: "mutton chukka.jpg" },
            { id: 406, name: "pepper chicken", price: 50.99, image: "pepper chicken.jpg" },
            { id: 407, name: "chicken gravy", price: 100.99, image: "chicken gravy.jpg" },
            { id: 408, name: "chicken tikka", price: 200.99, image: "chicken tikka.jpg" }
        ]
    },
    {
        id: 5,
        name: "Annapoorna Samayal",
        rating: 4.2,
        image: "meal.jpg",
        menu: [
            { id: 501, name: "full meals", price: 350, image: "meal.jpg" },
            { id: 502, name: "mini meals", price: 250, image: "mini meals.jpg" },
            { id: 503, name: "curd rice", price: 150, image: "curd rice.jpg" },
            { id: 504, name: "lemon rice", price: 250.99, image: "lemon rice.jpg" },
            { id: 505, name: "veg soup", price: 150.99, image: "veg soup.jpg" },
            { id: 506, name: "panner 65", price: 50.99, image: "panner 65.jpg" },
            { id: 507, name: "gobi 65", price: 100.99, image: "gobi 65.jpg" },
            { id: 508, name: "gobi manchurian", price: 200.99, image: "mancurian.jpg" }
        ]
    },
    {
        id: 6,
        name: "Madras Kitchen",
        rating: 4.7,
        image: "non.jpg",
        menu: [
            { id: 601, name: "non veg full meals", price: 2500, image: "non.jpg" },
            { id: 602, name: "full mandi", price: 1500, image: "mandi.jpg" },
            { id: 603, name: "half mandi", price: 500, image: "mandi.jpg" },
            { id: 604, name: "quater mandi", price: 250.99, image: "mandi.jpg" },
            { id: 605, name: "veg soup", price: 150.99, image: "veg soup.jpg" },
            { id: 606, name: "full thandoori", price: 500.99, image: "thandoori.jpg" },
            { id: 607, name: "half thandoori", price: 250.99, image: "thandoori.jpg" },
            { id: 608, name: "panner tikka", price: 200.99, image: "panner tikka.jpg" }
        ]
    },
    {
        id: 7,
        name: "dilamo Samayal",
        rating: 3.6,
        image: "meal.jpg",
        menu: [
            { id: 701, name: "dosa", price: 750, image: "dosa.jpg" },
            { id: 702, name: "idly", price: 820, image: "idly.jpg" },
            { id: 703, name: "chappathi", price: 150, image: "chapathi.jpg" },
            { id: 704, name: "parotta", price: 250.99, image: "nool.jpg" },
            { id: 705, name: "bisi bele bath", price: 150.99, image: "bisi-bele-bath-recipe.jpg" },
            { id: 706, name: "vangi bath", price: 50.99, image: "vangi bath.jpg" },
            { id: 707, name: "paper roast", price: 100.99, image: "paper roast.jpg" },
            { id: 708, name: "ghee dosa", price: 200.99, image: "ghee dosa.jpg" }
        ]
    }

];

const mockSubscriptions = [
    {
        id: 1,
        name: "Daily Essentials",
        price: 599.99,
        features: ["1 Meal per day", "Valid for 30 days", "Free delivery", "Valid at: cloud bite"]
    },
    {
        id: 2,
        name: "Premium Feasts",
        price: 1999.99,
        features: ["3 Meals per day", "Valid for 30 days", "Priority support", "Valid at: All Restaurants"]
    }
];

// ==========================================
// State Management
// ==========================================
const state = {
    currentUser: null,
    cart: [], // Array of { id, name, price, quantity, restaurantId }
    currentRestaurant: null,
    currentView: 'authView',
    orderInterval: null,
    orders: [] // New: store incoming orders
};

// ==========================================
// DOM Elements
// ==========================================
const els = {
    navbar: document.getElementById('navbar'),
    userGreeting: document.getElementById('userGreeting'),
    navRestaurantsBtn: document.getElementById('navRestaurantsBtn'),
    navSubscriptionsBtn: document.getElementById('navSubscriptionsBtn'),
    navUserOrdersBtn: document.getElementById('navUserOrdersBtn'),
    navManageOrdersBtn: document.getElementById('navManageOrdersBtn'),
    cartBtn: document.getElementById('cartBtn'),
    cartCount: document.getElementById('cartCount'),
    logoutBtn: document.getElementById('logoutBtn'),

    // Views
    views: {
        authView: document.getElementById('authView'),
        restaurantsView: document.getElementById('restaurantsView'),
        menuView: document.getElementById('menuView'),
        checkoutView: document.getElementById('checkoutView'),
        orderTrackView: document.getElementById('orderTrackView'),
        userOrdersView: document.getElementById('userOrdersView'),
        subscriptionsView: document.getElementById('subscriptionsView'),
        manageOrdersView: document.getElementById('manageOrdersView')
    },

    // Auth
    loginForm: document.getElementById('loginForm'),
    registerForm: document.getElementById('registerForm'),
    tabBtns: document.querySelectorAll('.tab-btn'),

    // Restaurants
    restaurantsGrid: document.getElementById('restaurantsGrid'),

    // Subscriptions
    subscriptionsGrid: document.getElementById('subscriptionsGrid'),

    // User Orders
    userOrdersLayout: document.getElementById('userOrdersLayout'),
    viewMyOrdersBtn: document.getElementById('viewMyOrdersBtn'),

    // Manage Orders
    ordersTableBody: document.getElementById('ordersTableBody'),

    // Menu
    backToRestaurantsBtn: document.getElementById('backToRestaurantsBtn'),
    restaurantHeader: document.getElementById('restaurantHeader'),
    menuGrid: document.getElementById('menuGrid'),

    // Cart
    cartDrawer: document.getElementById('cartDrawer'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    cartDrawerTotal: document.getElementById('cartDrawerTotal'),
    proceedToCheckoutBtn: document.getElementById('proceedToCheckoutBtn'),
    toast: document.getElementById('toast'),

    // Checkout
    backToMenuBtn: document.getElementById('backToMenuBtn'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutOrderItems: document.getElementById('checkoutOrderItems'),
    checkoutTotalPrice: document.getElementById('checkoutTotalPrice'),

    // Track
    confirmedCustomerName: document.getElementById('confirmedCustomerName'),
    newOrderBtn: document.getElementById('newOrderBtn')
};

// ==========================================
// Initialization
// ==========================================
function init() {
    setupEventListeners();
    renderRestaurants();
    renderSubscriptions();
    updateView();
}

// ==========================================
// Core Functions
// ==========================================
function switchView(viewId) {
    state.currentView = viewId;
    updateView();
    window.scrollTo(0, 0);
}

function updateView() {
    // Hide all views
    Object.values(els.views).forEach(v => {
        if (v) v.classList.add('hidden')
    });

    // Show active view
    if (els.views[state.currentView]) {
        els.views[state.currentView].classList.remove('hidden');
    }

    // Toggle Navbar
    if (state.currentView === 'authView') {
        els.navbar.classList.add('hidden');
    } else {
        els.navbar.classList.remove('hidden');

        // Show/hide specific nav buttons based on state
        if (state.currentUser) {
            els.navRestaurantsBtn.classList.remove('hidden');
            els.navSubscriptionsBtn.classList.remove('hidden');

            if (state.currentUser.isAdmin) {
                els.navManageOrdersBtn.classList.remove('hidden');
                els.navUserOrdersBtn.classList.add('hidden');
            } else {
                els.navManageOrdersBtn.classList.add('hidden');
                els.navUserOrdersBtn.classList.remove('hidden');
            }
        }

        // Active state for nav buttons
        [els.navRestaurantsBtn, els.navSubscriptionsBtn, els.navUserOrdersBtn, els.navManageOrdersBtn].forEach(btn => btn.classList.remove('active'));
        if (state.currentView === 'restaurantsView' || state.currentView === 'menuView') els.navRestaurantsBtn.classList.add('active');
        if (state.currentView === 'subscriptionsView') els.navSubscriptionsBtn.classList.add('active');

        if (state.currentView === 'userOrdersView') {
            els.navUserOrdersBtn.classList.add('active');
            renderUserOrders();
        }

        if (state.currentView === 'manageOrdersView') {
            els.navManageOrdersBtn.classList.add('active');
            renderManageOrders(); // re-render when switching to this view
        }
    }
}

// ==========================================
// Auth Logic
// ==========================================
function handleAuthTabClick(e) {
    const tab = e.target.dataset.tab;

    // Update Tabs
    els.tabBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    // Show/Hide Forms
    if (tab === 'login') {
        els.loginForm.classList.remove('hidden');
        els.registerForm.classList.add('hidden');
    } else {
        els.loginForm.classList.add('hidden');
        els.registerForm.classList.remove('hidden');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    // For mock purposes, just extract name from email
    const name = email.split('@')[0];
    loginUser(name, email);
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    loginUser(name, email);
}

async function loginUser(name, email) {
    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
        if (!response.ok) throw new Error('Login failed');
        const userData = await response.json();

        state.currentUser = userData;
        els.userGreeting.textContent = userData.isAdmin ? `Hello, Admin ${userData.name}` : `Hello, ${userData.name}`;
        switchView('restaurantsView');
    } catch (error) {
        console.error("Error logging in:", error);
        alert("Failed to connect to the server.");
    }
}

function handleLogout() {
    state.currentUser = null;
    state.cart = [];
    updateCartUI();

    els.navRestaurantsBtn.classList.add('hidden');
    els.navSubscriptionsBtn.classList.add('hidden');
    els.navManageOrdersBtn.classList.add('hidden');

    switchView('authView');
    els.loginForm.reset();
    els.registerForm.reset();
}

// ==========================================
// Restaurants Logic
// ==========================================
function renderRestaurants() {
    els.restaurantsGrid.innerHTML = mockRestaurants.map(r => `
    <div class="restaurant-card" data-id="${r.id}">
      <img src="${r.image}" class="restaurant-img" alt="${r.name}" loading="lazy" />
      <div class="restaurant-info">
        <h3 class="restaurant-name">${r.name}</h3>
        <div class="restaurant-meta">
          <span class="rating">★ ${r.rating}</span>
          <span>Open Now</span>
        </div>
      </div>
    </div>
  `).join('');

    // Add click events to newly created cards
    document.querySelectorAll('.restaurant-card').forEach(card => {
        card.addEventListener('click', () => {
            const restId = parseInt(card.dataset.id);
            openRestaurantMenu(restId);
        });
    });
}

// ==========================================
// Menu Logic
// ==========================================
function openRestaurantMenu(restaurantId) {
    const restaurant = mockRestaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;

    state.currentRestaurant = restaurant;

    // Update Header
    els.restaurantHeader.innerHTML = `
    <img src="${restaurant.image}" class="restaurant-header-img" alt="${restaurant.name}" />
    <div class="restaurant-header-info">
      <h2>${restaurant.name}</h2>
      <div class="rating">★ ${restaurant.rating} Rate</div>
    </div>
  `;

    // Render Menu items
    const localImages = ['a.jpg', 'meal.jpg', 'non.jpg', 'p.jpg', 'sb.png', 'sundari.png'];
    els.menuGrid.innerHTML = restaurant.menu.map(item => {
        // We use the item.image directly. If it fails to load, the onerror will swap it for a default.
        const defaultImg = localImages[item.id % localImages.length];
        return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="menu-item-img" loading="lazy" onerror="this.onerror=null;this.src='${defaultImg}';" />
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h4 class="menu-item-name">${item.name}</h4>
                    <div class="menu-item-price">₹${item.price.toFixed(2)}</div>
                </div>
                <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
            </div>
        </div>
        `;
    }).join('');

    // Add events to buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.dataset.id);
            addToCart(restaurant.id, itemId);
        });
    });

    switchView('menuView');
}

// ==========================================
// Cart Logic
// ==========================================
function addToCart(restaurantId, itemId) {
    const restaurant = mockRestaurants.find(r => r.id === restaurantId);
    const menuItem = restaurant.menu.find(m => m.id === itemId);

    // Check if item from another restaurant exists
    if (state.cart.length > 0 && state.cart[0].restaurantId !== restaurantId) {
        alert("You have already selected a kitchen. You cannot add items from a different kitchen to the same order. Please complete your current order first.");
        return;
    }

    const existingItem = state.cart.find(c => c.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            ...menuItem,
            restaurantId,
            quantity: 1
        });
    }

    updateCartUI();
    showToast();
}

function removeFromCart(itemId) {
    state.cart = state.cart.filter(item => item.id !== itemId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update Navbar Badge
    els.cartCount.textContent = totalItems;

    // Update Drawer
    if (state.cart.length === 0) {
        els.cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
        els.proceedToCheckoutBtn.disabled = true;
    } else {
        els.proceedToCheckoutBtn.disabled = false;
        els.cartItemsContainer.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.quantity}x ${item.name}</h4>
          <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
        </div>
        <button class="remove-btn" onclick="document.dispatchEvent(new CustomEvent('removeFromCart', {detail: ${item.id}}))">Remove</button>
      </div>
    `).join('');
    }

    els.cartDrawerTotal.textContent = `₹${totalPrice.toFixed(2)}`;
}

document.addEventListener('removeFromCart', (e) => {
    removeFromCart(e.detail);
});

function toggleCartDrawer() {
    els.cartDrawer.classList.toggle('hidden');
}

function showToast() {
    els.toast.classList.remove('hidden');
    setTimeout(() => {
        els.toast.classList.add('hidden');
    }, 2000);
}

// ==========================================
// Checkout Logic
// ==========================================
function proceedToCheckout() {
    toggleCartDrawer(); // Close cart
    renderCheckoutSummary();
    switchView('checkoutView');
}

function renderCheckoutSummary() {
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    els.checkoutOrderItems.innerHTML = state.cart.map(item => `
    <div class="checkout-item">
      <span>${item.quantity}x ${item.name}</span>
      <span>₹${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `).join('');

    els.checkoutTotalPrice.textContent = `₹${totalPrice.toFixed(2)}`;
}

async function handleCheckoutSubmit(e) {
    e.preventDefault();

    const customerName = document.getElementById('checkoutName').value;
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create new order
    const newOrder = {
        id: 'ORD' + Math.floor(Math.random() * 10000),
        customerName: customerName,
        customerEmail: state.currentUser.email,
        items: [...state.cart],
        totalPrice: totalPrice,
        phase: 'Pending',
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    try {
        const res = await fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        });
        if (!res.ok) {
            // show message from server if available
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error || 'Server error');
        }
        const result = await res.json();
        // if server generated an ID, keep it for any later use (e.g. tracking)
        newOrder.id = result.id || newOrder.id;

        // Start fake order process
        els.confirmedCustomerName.textContent = customerName;
        state.cart = [];
        updateCartUI();

        els.checkoutForm.reset();

        switchView('orderTrackView');
        // For legacy view: clear out interval and auto close this screen
        clearInterval(state.orderInterval);
        state.orderInterval = setTimeout(() => {
            if (state.currentView === 'orderTrackView') {
                switchView('userOrdersView');
            }
        }, 3000);
    } catch (error) {
        console.error("Order failed:", error);
        alert("Failed to submit order: " + error.message);
    }
}

// ==========================================
// Tracking & History Logic (User facing)
// ==========================================
async function renderUserOrders() {
    if (!els.userOrdersLayout) return;

    try {
        const res = await fetch(`http://localhost:5000/api/orders?email=${encodeURIComponent(state.currentUser.email)}`);
        if (!res.ok) throw new Error('Fetch failed');
        const myOrders = await res.json();

        if (myOrders.length === 0) {
            els.userOrdersLayout.innerHTML = `<p style="text-align:center; color: var(--text-muted); margin-top: 2rem;">You don't have any past orders yet.</p>`;
            return;
        }

        els.userOrdersLayout.innerHTML = myOrders.map(order => {
            const stepPending = true;
            const stepPreparing = order.phase === 'Preparing' || order.phase === 'Delivering' || order.phase === 'Delivered';
            const stepDelivering = order.phase === 'Delivering' || order.phase === 'Delivered';
            const stepDelivered = order.phase === 'Delivered';

            return `
            <div class="user-order-card">
                <div class="user-order-header">
                    <div>
                        <div class="user-order-id">Order #${order.id}</div>
                        <div class="user-order-date">${order.date}</div>
                    </div>
                    <div class="user-order-status status-${order.phase.toLowerCase()}">${order.phase}</div>
                </div>
                
                <div class="user-order-items">
                    ${order.items.map(i => `${i.quantity}x ${i.name}`).join('<br>')}
                </div>
                
                <div class="user-order-total">
                    Total: ₹${order.totalPrice.toFixed(2)}
                </div>

                <div class="mini-tracking-timeline">
                    <div class="mini-step ${stepPending ? 'active' : ''}">
                        <div class="mini-step-dot"></div>
                        <p>Pending</p>
                    </div>
                    <div class="mini-step ${stepPreparing ? 'active' : ''}">
                        <div class="mini-step-dot"></div>
                        <p>Preparing</p>
                    </div>
                    <div class="mini-step ${stepDelivering ? 'active' : ''}">
                        <div class="mini-step-dot"></div>
                        <p>Delivering</p>
                    </div>
                    <div class="mini-step ${stepDelivered ? 'active' : ''}">
                        <div class="mini-step-dot"></div>
                        <p>Delivered</p>
                    </div>
                </div>
            </div>
            `;
        }).join('');
    } catch (e) {
        console.error("Failed to load user orders", e);
    }
}
function resetApp() {
    clearInterval(state.orderInterval);
    switchView('restaurantsView');
}

// ==========================================
// Subscriptions Logic
// ==========================================
function renderSubscriptions() {
    if (!els.subscriptionsGrid) return;
    els.subscriptionsGrid.innerHTML = mockSubscriptions.map(sub => `
        <div class="subscription-card">
            <h3 class="plan-name">${sub.name}</h3>
            <div class="plan-price">₹${sub.price.toFixed(2)}/mo</div>
            <ul class="plan-features">
                ${sub.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <button class="subscribe-btn" onclick="handleSubscribe(${sub.id})">Subscribe Now</button>
        </div>
    `).join('');
}

window.handleSubscribe = function (subId) {
    const originalText = els.toast.textContent;
    els.toast.textContent = "Subscription activated successfully!";
    showToast();
    setTimeout(() => {
        els.toast.textContent = originalText;
    }, 2000);
}

// ==========================================
// Manage Orders Logic
// ==========================================
async function renderManageOrders() {
    if (!els.ordersTableBody) return;

    try {
        const res = await fetch(`http://localhost:5000/api/orders?email=${encodeURIComponent(state.currentUser.email)}`);
        if (!res.ok) throw new Error('Fetch failed');
        const orders = await res.json();

        if (orders.length === 0) {
            els.ordersTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No orders found.</td></tr>`;
            return;
        }

        els.ordersTableBody.innerHTML = orders.map(order => `
            <tr>
                <td><strong>${order.id}</strong></td>
                <td>${order.customerName}</td>
                <td>${order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}</td>
                <td>₹${order.totalPrice.toFixed(2)}</td>
                <td><span class="phase-badge phase-${order.phase.toLowerCase()}">${order.phase}</span></td>
                <td>
                    <select class="action-select" onchange="handlePhaseChange('${order.id}', this.value)">
                        <option value="Pending" ${order.phase === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Preparing" ${order.phase === 'Preparing' ? 'selected' : ''}>Preparing</option>
                        <option value="Delivering" ${order.phase === 'Delivering' ? 'selected' : ''}>Delivering</option>
                        <option value="Delivered" ${order.phase === 'Delivered' ? 'selected' : ''}>Delivered</option>
                    </select>
                </td>
            </tr>
        `).join('');
    } catch (e) {
        console.error("Failed to load all orders", e);
    }
}

async function handlePhaseChange(orderId, newPhase) {
    try {
        await fetch(`http://localhost:5000/api/orders/${orderId}/phase`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phase: newPhase })
        });

        renderManageOrders();

        // If the current user is active on the User Orders page, update it too
        if (state.currentView === 'userOrdersView') {
            renderUserOrders();
        }
    } catch (e) {
        console.error("Failed to update phase", e);
    }
}

// ==========================================
// Setup Listeners
// ==========================================
function setupEventListeners() {
    // Auth
    els.tabBtns.forEach(btn => btn.addEventListener('click', handleAuthTabClick));
    els.loginForm.addEventListener('submit', handleLogin);
    els.registerForm.addEventListener('submit', handleRegister);
    els.logoutBtn.addEventListener('click', handleLogout);

    // Navigation
    els.navRestaurantsBtn.addEventListener('click', () => switchView('restaurantsView'));
    els.navSubscriptionsBtn.addEventListener('click', () => switchView('subscriptionsView'));
    els.navUserOrdersBtn.addEventListener('click', () => switchView('userOrdersView'));
    els.navManageOrdersBtn.addEventListener('click', () => switchView('manageOrdersView'));
    els.backToRestaurantsBtn.addEventListener('click', () => switchView('restaurantsView'));
    els.backToMenuBtn.addEventListener('click', () => switchView('menuView'));

    // Cart
    els.cartBtn.addEventListener('click', toggleCartDrawer);
    els.closeCartBtn.addEventListener('click', toggleCartDrawer);
    els.proceedToCheckoutBtn.addEventListener('click', proceedToCheckout);

    // Checkout
    els.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Tracking
    els.newOrderBtn.addEventListener('click', resetApp);
    els.viewMyOrdersBtn.addEventListener('click', () => switchView('userOrdersView'));
}

// Run App!
document.addEventListener('DOMContentLoaded', init);
