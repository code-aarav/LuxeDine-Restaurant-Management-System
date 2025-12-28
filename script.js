// --- Data ---
const tables = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    status: 'available',
    orders: []
}));

// Initialize some dummy data for demo
tables[1].status = 'occupied';
tables[1].orders = [{ id: 101, name: 'Luxe Classic Burger', price: 300, qty: 2 }];
tables[4].status = 'occupied';
tables[4].orders = [{ id: 102, name: 'Artisan Mozzarella Pizza', price: 500, qty: 1 }];

const menuItems = [
    { id: 101, name: 'Luxe Classic Burger', price: 300.00, category: 'main', availability: 'all-time', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 102, name: 'Artisan Mozzarella Pizza', price: 500.00, category: 'main', availability: 'afternoon', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 103, name: 'Premium Caesar Salad', price: 270.00, category: 'main', availability: 'morning', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 104, name: 'Grilled Salmon Steak', price: 850.00, category: 'main', availability: 'evening', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 105, name: 'Truffle Mushroom Risotto', price: 650.00, category: 'main', availability: 'night', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 106, name: 'Lamb Chops with Herbs', price: 1200.00, category: 'main', availability: 'night', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 107, name: 'Pasta Carbonara Luxe', price: 550.00, category: 'main', availability: 'all-time', img: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 108, name: 'Breakfast Benedict', price: 320.00, category: 'main', availability: 'morning', img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 109, name: 'Luxury Ribeye Steak', price: 1500.00, category: 'main', availability: 'evening', img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 201, name: 'Vintage Cola', price: 110.00, category: 'drink', availability: 'all-time', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 202, name: 'Cappuccino Gold', price: 180.00, category: 'drink', availability: 'morning', img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 203, name: 'Iced Caramel Macchiato', price: 220.00, category: 'drink', availability: 'afternoon', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 204, name: 'Premium Red Wine', price: 450.00, category: 'drink', availability: 'evening', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 301, name: 'Velvet Cheesecake', price: 230.00, category: 'dessert', availability: 'all-time', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 302, name: 'Artisanal Ice Cream', price: 170.00, category: 'dessert', availability: 'afternoon', img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 303, name: 'Chocolate Lava Cake', price: 280.00, category: 'dessert', availability: 'evening', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 305, name: 'Fresh Fruit Platter', price: 350.00, category: 'dessert', availability: 'morning', img: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 306, name: 'Midnight Brownie', price: 220.00, category: 'dessert', availability: 'night', img: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=300&h=300&q=80' },
];

const inventoryData = [
    { name: 'Basmati Rice', qty: 45, min: 10, unit: 'kg', status: 'In Stock' },
    { name: 'Chicken Breast', qty: 12, min: 15, unit: 'kg', status: 'Low Stock' },
    { name: 'Mozzarella Cheese', qty: 8, min: 5, unit: 'kg', status: 'In Stock' },
    { name: 'Classic Buns', qty: 50, min: 20, unit: 'pcs', status: 'In Stock' },
    { name: 'Fresh Lettuce', qty: 5, min: 8, unit: 'kg', status: 'Low Stock' },
    { name: 'Black Pepper', qty: 2, min: 5, unit: 'kg', status: 'Low Stock' },
    { name: 'Cooking Oil', qty: 100, min: 50, unit: 'Liters', status: 'In Stock' }
];

const staffData = [
    { name: 'Rahul Kumar', role: 'Manager', shift: 'Morning', status: 'Active' },
    { name: 'Priya Singh', role: 'Head Chef', shift: 'All Day', status: 'Active' },
    { name: 'Amit Sharma', role: 'Server', shift: 'Evening', status: 'Active' },
    { name: 'Sonia Verma', role: 'Cashier', shift: 'Morning', status: 'On Break' },
    { name: 'Rohan Mehra', role: 'Chef de Cuisine', shift: 'Night', status: 'Active' },
    { name: 'Tina Das', role: 'Waitress', shift: 'Evening', status: 'Off Duty' },
    { name: 'Kabir Singh', role: 'Bartender', shift: 'Night', status: 'Active' }
];

const reservationsData = [
    { customer: 'Vikram Mehta', table: '4', guests: 2, time: '19:30', status: 'Confirmed' },
    { customer: 'Anjali Rao', table: '7', guests: 4, time: '20:15', status: 'Pending' },
    { customer: 'Rajesh Khanna', table: '1', guests: 6, time: '21:00', status: 'Confirmed' },
    { customer: 'Deepak Jha', table: '9', guests: 2, time: '22:00', status: 'Pending' },
    { customer: 'Sara Ali', table: '12', guests: 8, time: '18:00', status: 'Confirmed' }
];

const deliveryPartners = [
    { name: 'Swiggy', contact: '1800-SWIGGY', type: 'External', status: 'Active' },
    { name: 'Zomato', contact: '1800-ZOMATO', type: 'External', status: 'Active' },
    { name: 'Luxe Own Fleet', contact: '9988776655', type: 'In-House', status: 'Active' },
    { name: 'Uber Eats', contact: '1800-UBER', type: 'External', status: 'Inactive' }
];

const weeklySalesData = [
    { day: 'Mon', amount: 15400 },
    { day: 'Tue', amount: 18200 },
    { day: 'Wed', amount: 12500 },
    { day: 'Thu', amount: 22000 },
    { day: 'Fri', amount: 25800 },
    { day: 'Sat', amount: 31000 },
    { day: 'Sun', amount: 28500 }
];

// --- State ---
let activeTableId = null;
let totalRevenue = 0;
let currentCategory = 'all';
let currentAddType = null;
let currentEditIndex = null;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Login form listener
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            // Simple demo credentials: admin/admin
            if (user === 'admin' && pass === 'admin') {
                document.getElementById('login-screen').style.display = 'none';
                document.getElementById('main-app').style.display = 'flex';
                // Initialize app after login
                renderTables();
                renderMenu('all');
                updateDashboardStats();
            } else {
                const errorEl = document.getElementById('login-error');
                if (errorEl) {
                    errorEl.style.display = 'block';
                    setTimeout(() => errorEl.style.display = 'none', 3000);
                }
            }
        });
    }

    // Theme setup
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.innerHTML = savedTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }

    // Modal Form listener
    const form = document.getElementById('add-item-form');
    if (form) {
        form.addEventListener('submit', handleModalSubmit);
    }
});

// --- View Navigation ---
function showView(viewId) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active-view'));
    const targetView = document.getElementById(viewId);
    if (targetView) targetView.classList.add('active-view');

    document.querySelectorAll('.sidebar nav li').forEach(li => {
        if (li.getAttribute('onclick') && li.getAttribute('onclick').includes(viewId)) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });

    const sidebar = document.querySelector('.sidebar');
    if (sidebar && window.innerWidth <= 900) {
        sidebar.classList.remove('active');
    }

    const titles = {
        'dashboard': 'Table Overview',
        'order-view': 'Order Management',
        'menu-view': 'Menu Management',
        'inventory-view': 'Inventory',
        'settings-view': 'Settings',
        'reservations-view': 'Reservations',
        'reports-view': 'Analytics & Reports',
        'staff-view': 'Staff Management',
        'delivery-view': 'Delivery Partners'
    };
    const titleEl = document.getElementById('page-title');
    if (titleEl) titleEl.innerText = titles[viewId] || 'LuxeDine POS';

    if (viewId === 'menu-view') renderMenuTable();
    if (viewId === 'inventory-view') renderInventory();
    if (viewId === 'staff-view') renderStaff();
    if (viewId === 'reservations-view') renderReservations();
    if (viewId === 'reports-view') renderSalesChart();
    if (viewId === 'delivery-view') renderDelivery();
}

// --- Dashboard & Floor Plan ---
function renderTables() {
    const container = document.getElementById('tables-container');
    if (!container) return;
    container.innerHTML = '';

    tables.forEach(table => {
        const card = document.createElement('div');
        card.className = `table-card ${table.status}`;
        card.onclick = () => openTable(table.id);

        card.innerHTML = `
            <div class="table-info">
                <h3>Table ${table.id}</h3>
                <p><span class="status-dot"></span>${table.status.toUpperCase()}</p>
                <small>${table.orders.length} items</small>
                ${table.status === 'available' ? '<div class="action-hint">Click to Start Order</div>' : ''}
            </div>
            <div class="table-actions">
                <button class="status-toggle-btn" onclick="toggleTableStatus(event, ${table.id})">
                    <i class="fa-solid fa-rotate"></i> Change Status
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleTableStatus(event, id) {
    event.stopPropagation();
    const table = tables.find(t => t.id === id);
    if (table.status === 'available') {
        table.status = 'occupied';
    } else {
        if (table.orders.length > 0) {
            if (confirm("This table has active orders. Are you sure you want to mark it as available?")) {
                table.status = 'available';
                table.orders = [];
            }
        } else {
            table.status = 'available';
        }
    }
    renderTables();
    updateDashboardStats();
}

function updateDashboardStats() {
    const activeOrders = tables.filter(t => t.status === 'occupied').length;
    document.getElementById('total-orders-count').innerText = activeOrders;
    document.getElementById('total-revenue').innerText = `₹${totalRevenue.toFixed(2)}`;
}

// --- Order & Menu Logic ---
function openTable(id) {
    activeTableId = id;
    const table = tables.find(t => t.id === id);

    const tableIdEl = document.getElementById('active-table-id');
    const orderStatusEl = document.getElementById('order-status');

    if (tableIdEl) tableIdEl.innerText = id;
    if (orderStatusEl) {
        orderStatusEl.innerText = table.status === 'occupied' ? 'Occupied' : 'New Order';
        orderStatusEl.className = `badge ${table.status}`;
    }

    const searchInput = document.getElementById('menu-search');
    if (searchInput) searchInput.value = '';

    renderMenu('all');
    renderOrderList();
    showView('order-view');
}

function renderMenu(category) {
    currentCategory = category;
    const container = document.getElementById('menu-container');
    if (!container) return;
    container.innerHTML = '';
    const searchTerm = document.getElementById('menu-search') ? document.getElementById('menu-search').value.toLowerCase() : '';

    const now = new Date();
    const currentHour = now.getHours();
    let currentSlot = 'all-time';
    if (currentHour >= 5 && currentHour < 12) currentSlot = 'morning';
    else if (currentHour >= 12 && currentHour < 17) currentSlot = 'afternoon';
    else if (currentHour >= 17 && currentHour < 21) currentSlot = 'evening';
    else currentSlot = 'night';

    const filtered = menuItems.filter(item => {
        const matchesCategory = category === 'all' || item.category === category;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm);
        const matchesTime = item.availability === 'all-time' || item.availability === currentSlot;
        return matchesCategory && matchesSearch && matchesTime;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<p class='empty-state'>No items available for this time (${currentSlot.toUpperCase()}).</p>`;
        return;
    }

    filtered.forEach(item => {
        const el = document.createElement('div');
        el.className = 'menu-item';
        el.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onclick="event.stopPropagation(); openZoom('${item.img}')">
            <div onclick="addToOrder(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                <h4>${item.name}</h4>
                <p class="price">₹${item.price.toFixed(2)}</p>
                <small class="availability-tag">${item.availability.toUpperCase()}</small>
            </div>
        `;
        container.appendChild(el);
    });
}

function searchMenu(value) {
    renderMenu(currentCategory);
}

function filterMenu(category, event) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    renderMenu(category);
}

function addToOrder(item) {
    if (!activeTableId) return;
    const table = tables.find(t => t.id === activeTableId);
    const existing = table.orders.find(o => o.id === item.id);
    if (existing) {
        existing.qty++;
    } else {
        table.orders.push({ ...item, qty: 1 });
    }
    table.status = 'occupied';
    renderOrderList();
}

function renderOrderList() {
    const table = tables.find(t => t.id === activeTableId);
    const container = document.getElementById('order-list');
    if (!container) return;
    container.innerHTML = '';

    let subtotal = 0;
    if (table.orders.length === 0) {
        container.innerHTML = '<p class="empty-state">No items added yet.</p>';
    } else {
        table.orders.forEach(item => {
            const itemTotal = item.price * item.qty;
            subtotal += itemTotal;
            const div = document.createElement('div');
            div.className = 'order-line';
            div.innerHTML = `
                <div class="order-item-info">
                    <h4>${item.name}</h4>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="order-item-total">
                    <span>₹${itemTotal.toFixed(2)}</span>
                    <button class="remove-btn" onclick="removeItem(${item.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            container.appendChild(div);
        });
    }

    const tax = subtotal * 0.10;
    const total = subtotal + tax;
    document.getElementById('subtotal-price').innerText = `₹${subtotal.toFixed(2)}`;
    document.getElementById('tax-price').innerText = `₹${tax.toFixed(2)}`;
    document.getElementById('total-price').innerText = `₹${total.toFixed(2)}`;
}

function changeQty(itemId, delta) {
    const table = tables.find(t => t.id === activeTableId);
    const item = table.orders.find(o => o.id === itemId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) removeItem(itemId);
        else renderOrderList();
    }
}

function removeItem(itemId) {
    const table = tables.find(t => t.id === activeTableId);
    table.orders = table.orders.filter(o => o.id !== itemId);
    if (table.orders.length === 0) table.status = 'available';
    renderOrderList();
}

// --- Checkout ---
function processCheckout() {
    const table = tables.find(t => t.id === activeTableId);
    if (!table || table.orders.length === 0) {
        alert("Table is empty!");
        return;
    }

    const total = parseFloat(document.getElementById('total-price').innerText.replace('₹', ''));
    const modal = document.getElementById('receipt-modal');
    const receiptBody = document.getElementById('receipt-body');

    let receiptHTML = `
        <div class="receipt-row"><span>Table ID:</span> <span>${activeTableId}</span></div>
        <div class="receipt-row"><span>Date:</span> <span>${new Date().toLocaleTimeString()}</span></div>
        <hr style="margin: 10px 0; border: 0; border-top: 1px dashed #ccc;">
    `;

    table.orders.forEach(item => {
        receiptHTML += `<div class="receipt-row"><span>${item.qty}x ${item.name}</span><span>₹${(item.price * item.qty).toFixed(2)}</span></div>`;
    });

    receiptHTML += `
        <hr style="margin: 10px 0; border: 0; border-top: 1px dashed #ccc;">
        <div class="receipt-row" style="font-weight:bold; font-size:1.2rem"><span>Total Paid:</span><span>₹${total.toFixed(2)}</span></div>
    `;

    receiptBody.innerHTML = receiptHTML;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('receipt-modal').style.display = 'none';
}

function finalizePayment() {
    const table = tables.find(t => t.id === activeTableId);
    if (!table) return;
    const total = parseFloat(document.getElementById('total-price').innerText.replace('₹', ''));

    totalRevenue += total;
    table.orders = [];
    table.status = 'available';

    closeModal();
    renderTables();
    updateDashboardStats();
    showView('dashboard');
    alert("Receipt Printed & Table Cleared!");
}

// --- CRUD Core Logic ---
function deleteItem(type, index) {
    if (!confirm("Are you sure you want to delete this item?")) return;

    if (type === 'menu') {
        menuItems.splice(index, 1);
        renderMenuTable();
    } else if (type === 'inventory') {
        inventoryData.splice(index, 1);
        renderInventory();
    } else if (type === 'staff') {
        staffData.splice(index, 1);
        renderStaff();
    } else if (type === 'reservation') {
        reservationsData.splice(index, 1);
        renderReservations();
    } else if (type === 'delivery') {
        deliveryPartners.splice(index, 1);
        renderDelivery();
    }
}

function openAddModal(type, index = null) {
    currentAddType = type;
    currentEditIndex = index;
    const modal = document.getElementById('add-modal');
    const title = document.getElementById('add-modal-title');
    const fieldsContainer = document.getElementById('add-form-fields');
    const submitBtn = modal.querySelector('button[type="submit"]');

    const isEdit = index !== null;
    let item = null;
    if (isEdit) {
        if (type === 'menu') item = menuItems[index];
        else if (type === 'inventory') item = inventoryData[index];
        else if (type === 'staff') item = staffData[index];
        else if (type === 'reservation') item = reservationsData[index];
        else if (type === 'delivery') item = deliveryPartners[index];
    }

    const titles = {
        'menu': isEdit ? 'Edit Menu Item' : 'Add Menu Item',
        'inventory': isEdit ? 'Edit Stock' : 'Add Stock Item',
        'staff': isEdit ? 'Edit Staff Member' : 'Add Staff Member',
        'reservation': isEdit ? 'Edit Reservation' : 'New Reservation',
        'delivery': isEdit ? 'Edit Delivery Partner' : 'Add Delivery Partner'
    };

    title.innerText = titles[type];
    submitBtn.innerText = isEdit ? 'Update Details' : 'Add Now';
    fieldsContainer.innerHTML = '';

    if (type === 'menu') {
        fieldsContainer.innerHTML = `
            <div class="form-group"><label>Name</label><input type="text" name="name" value="${item ? item.name : ''}" required class="form-control"></div>
            <div class="form-group"><label>Price (₹)</label><input type="number" name="price" value="${item ? item.price : ''}" required class="form-control"></div>
            <div class="form-group"><label>Category</label><select name="category" class="form-control">
                <option value="main" ${item && item.category === 'main' ? 'selected' : ''}>Main</option>
                <option value="drink" ${item && item.category === 'drink' ? 'selected' : ''}>Drink</option>
                <option value="dessert" ${item && item.category === 'dessert' ? 'selected' : ''}>Dessert</option>
            </select></div>
            <div class="form-group"><label>Availability</label><select name="availability" class="form-control">
                <option value="all-time" ${item && item.availability === 'all-time' ? 'selected' : ''}>All Time</option>
                <option value="morning" ${item && item.availability === 'morning' ? 'selected' : ''}>Morning Only</option>
                <option value="afternoon" ${item && item.availability === 'afternoon' ? 'selected' : ''}>Afternoon Only</option>
                <option value="evening" ${item && item.availability === 'evening' ? 'selected' : ''}>Evening Only</option>
                <option value="night" ${item && item.availability === 'night' ? 'selected' : ''}>Night Only</option>
            </select></div>
            <div class="form-group"><label>Image URL</label><input type="text" name="img" value="${item ? item.img : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&h=300&q=80'}" class="form-control"></div>`;
    } else if (type === 'inventory') {
        fieldsContainer.innerHTML = `
            <div class="form-group"><label>Item Name</label><input type="text" name="name" value="${item ? item.name : ''}" required class="form-control"></div>
            <div class="form-group"><label>Current Qty</label><input type="number" name="qty" value="${item ? item.qty : ''}" required class="form-control"></div>
            <div class="form-group"><label>Min Level</label><input type="number" name="min" value="${item ? item.min : ''}" required class="form-control"></div>
            <div class="form-group"><label>Unit</label><input type="text" name="unit" value="${item ? item.unit : ''}" placeholder="kg, pcs, liters" class="form-control"></div>
            <div class="form-group"><label>Status</label><select name="status" class="form-control">
                <option ${item && item.status === 'In Stock' ? 'selected' : ''}>In Stock</option>
                <option ${item && item.status === 'Low Stock' ? 'selected' : ''}>Low Stock</option>
                <option ${item && item.status === 'Out of Stock' ? 'selected' : ''}>Out of Stock</option>
            </select></div>`;
    } else if (type === 'staff') {
        fieldsContainer.innerHTML = `
            <div class="form-group"><label>Full Name</label><input type="text" name="name" value="${item ? item.name : ''}" required class="form-control"></div>
            <div class="form-group"><label>Role</label><input type="text" name="role" value="${item ? item.role : ''}" required class="form-control"></div>
            <div class="form-group"><label>Shift</label><select name="shift" class="form-control">
                <option ${item && item.shift === 'Morning' ? 'selected' : ''}>Morning</option>
                <option ${item && item.shift === 'Afternoon' ? 'selected' : ''}>Afternoon</option>
                <option ${item && item.shift === 'Evening' ? 'selected' : ''}>Evening</option>
                <option ${item && item.shift === 'Night' ? 'selected' : ''}>Night</option>
                <option ${item && item.shift === 'All Day' ? 'selected' : ''}>All Day</option>
            </select></div>
            <div class="form-group"><label>Status</label><select name="status" class="form-control">
                <option ${item && item.status === 'Active' ? 'selected' : ''}>Active</option>
                <option ${item && item.status === 'On Break' ? 'selected' : ''}>On Break</option>
                <option ${item && item.status === 'Off Duty' ? 'selected' : ''}>Off Duty</option>
            </select></div>`;
    } else if (type === 'reservation') {
        fieldsContainer.innerHTML = `
            <div class="form-group"><label>Customer Name</label><input type="text" name="customer" value="${item ? item.customer : ''}" required class="form-control"></div>
            <div class="form-group"><label>Table #</label><input type="number" name="table" value="${item ? item.table : ''}" required class="form-control"></div>
            <div class="form-group"><label>Guests</label><input type="number" name="guests" value="${item ? item.guests : ''}" required class="form-control"></div>
            <div class="form-group"><label>Time</label><input type="time" name="time" value="${item ? item.time : ''}" required class="form-control"></div>
            <div class="form-group"><label>Status</label><select name="status" class="form-control">
                <option ${item && item.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                <option ${item && item.status === 'Pending' ? 'selected' : ''}>Pending</option>
                <option ${item && item.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
            </select></div>`;
    } else if (type === 'delivery') {
        fieldsContainer.innerHTML = `
            <div class="form-group"><label>Partner Name</label><input type="text" name="name" value="${item ? item.name : ''}" required class="form-control"></div>
            <div class="form-group"><label>Contact</label><input type="text" name="contact" value="${item ? item.contact : ''}" required class="form-control"></div>
            <div class="form-group"><label>Type</label><select name="type" class="form-control">
                <option ${item && item.type === 'External' ? 'selected' : ''}>External</option>
                <option ${item && item.type === 'In-House' ? 'selected' : ''}>In-House</option>
            </select></div>
            <div class="form-group"><label>Status</label><select name="status" class="form-control">
                <option ${item && item.status === 'Active' ? 'selected' : ''}>Active</option>
                <option ${item && item.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
            </select></div>`;
    }
    modal.style.display = 'flex';
}

function handleModalSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const isEdit = currentEditIndex !== null;

    if (currentAddType === 'menu') {
        const newItem = { id: isEdit ? menuItems[currentEditIndex].id : Date.now(), name: data.name, price: parseFloat(data.price), category: data.category, availability: data.availability, img: data.img };
        if (isEdit) menuItems[currentEditIndex] = newItem;
        else menuItems.push(newItem);
        renderMenuTable();
    } else if (currentAddType === 'inventory') {
        const newItem = { name: data.name, qty: parseFloat(data.qty), min: parseFloat(data.min), unit: data.unit || 'units', status: data.status || 'In Stock' };
        if (isEdit) inventoryData[currentEditIndex] = newItem;
        else inventoryData.push(newItem);
        renderInventory();
    } else if (currentAddType === 'staff') {
        const newItem = { name: data.name, role: data.role, shift: data.shift, status: data.status || 'Active' };
        if (isEdit) staffData[currentEditIndex] = newItem;
        else staffData.push(newItem);
        renderStaff();
    } else if (currentAddType === 'reservation') {
        const newItem = { customer: data.customer, table: data.table, guests: parseInt(data.guests), time: data.time, status: data.status || 'Confirmed' };
        if (isEdit) reservationsData[currentEditIndex] = newItem;
        else reservationsData.push(newItem);
        renderReservations();
    } else if (currentAddType === 'delivery') {
        const newItem = { name: data.name, contact: data.contact, type: data.type, status: data.status };
        if (isEdit) deliveryPartners[currentEditIndex] = newItem;
        else deliveryPartners.push(newItem);
        renderDelivery();
    }

    closeAddModal();
    alert(`Successfully ${isEdit ? 'updated' : 'added'}!`);
}

function closeAddModal() {
    document.getElementById('add-modal').style.display = 'none';
    document.getElementById('add-item-form').reset();
    currentEditIndex = null;
}

// --- Data Table Rendering with Action Buttons ---
function renderMenuTable() {
    const tbody = document.getElementById('menu-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    menuItems.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>#${item.id}</td>
            <td><img src="${item.img}" alt="${item.name}" onclick="openZoom('${item.img}')"></td>
            <td>${item.name}</td>
            <td><span class="badge">${item.category.toUpperCase()}</span></td>
            <td>₹${item.price.toFixed(2)}</td>
            <td><span class="badge available">${item.availability.toUpperCase()}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-edit" onclick="openAddModal('menu', ${index})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-delete" onclick="deleteItem('menu', ${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
}

function renderInventory() {
    const tbody = document.getElementById('inventory-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    inventoryData.forEach((item, index) => {
        const statusClass = item.status === 'In Stock' ? 'available' : 'occupied';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td style="font-weight:bold;">${item.qty} ${item.unit}</td>
            <td>${item.min} ${item.unit}</td>
            <td>${item.unit}</td>
            <td><span class="badge ${statusClass}">${item.status}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-edit" onclick="openAddModal('inventory', ${index})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-delete" onclick="deleteItem('inventory', ${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
}

function renderStaff() {
    const tbody = document.getElementById('staff-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    staffData.forEach((member, index) => {
        const statusClass = member.status === 'Active' ? 'available' : 'occupied';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight:500;">${member.name}</td>
            <td>${member.role}</td>
            <td>${member.shift}</td>
            <td><span class="badge ${statusClass}">${member.status}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-edit" onclick="openAddModal('staff', ${index})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-delete" onclick="deleteItem('staff', ${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
}

function renderReservations() {
    const tbody = document.getElementById('reservations-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    reservationsData.forEach((res, index) => {
        const statusClass = res.status === 'Confirmed' ? 'available' : 'occupied';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight:500;">${res.customer}</td>
            <td>Table ${res.table}</td>
            <td>${res.guests} Pax</td>
            <td>${res.time}</td>
            <td><span class="badge ${statusClass}">${res.status}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-edit" onclick="openAddModal('reservation', ${index})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-delete" onclick="deleteItem('reservation', ${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
}

function renderDelivery() {
    const tbody = document.getElementById('delivery-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    deliveryPartners.forEach((partner, index) => {
        const statusClass = partner.status === 'Active' ? 'available' : 'occupied';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${partner.name}</td>
            <td>${partner.contact}</td>
            <td><span class="badge">${partner.type}</span></td>
            <td><span class="badge ${statusClass}">${partner.status}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn-edit" onclick="openAddModal('delivery', ${index})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-delete" onclick="deleteItem('delivery', ${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
}

function renderSalesChart() {
    const container = document.getElementById('sales-chart');
    if (!container) return;
    container.innerHTML = '';

    const maxAmount = Math.max(...weeklySalesData.map(d => d.amount));

    weeklySalesData.forEach(data => {
        const height = (data.amount / maxAmount) * 100;
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${height}%`;
        bar.innerHTML = `
            <div class="value">₹${(data.amount / 1000).toFixed(1)}k</div>
            <span>${data.day}</span>
        `;
        container.appendChild(bar);
    });
}

// --- Image Zoom ---
function openZoom(url) {
    const modal = document.getElementById('zoom-modal');
    const img = document.getElementById('zoomed-image');
    if (modal && img) {
        img.src = url;
        modal.style.display = 'flex';
    }
}

function closeZoom() {
    const modal = document.getElementById('zoom-modal');
    if (modal) modal.style.display = 'none';
}

// --- Theme & Sidebar ---
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
    localStorage.setItem('theme', newTheme);
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

function handleLogout() {
    if (confirm("Are you sure you want to logout?")) {
        // For this demo, we'll just show a message and reload the page to simulate a session end
        alert("Logging out from LuxeDine RMS...");
        window.location.reload();
    }
}
