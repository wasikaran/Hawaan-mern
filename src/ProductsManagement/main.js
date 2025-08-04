'use strict';

// Global variables
let products = {};
let cart = [];
let wishlist = [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize the application
async function initializeApp() {
  try {
    await loadProductsFromJSON();
    updateCartCount();
    updateWishlistCount();
    
    // Check which page we're on and load appropriate content
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('cart.html')) {
      loadCartPage();
    } else if (currentPage.includes('wishlist.html')) {
      loadWishlistPage();
    } else if (currentPage.includes('product-details.html')) {
      loadProductDetailsPage();
    } else {
      // Load products for category pages
      loadCategoryProducts();
    }
  } catch (error) {
    console.error('Failed to initialize app:', error);
    showNotification('Failed to load products. Please refresh the page.', 'error');
  }
}

// Load products from JSON file
async function loadProductsFromJSON() {
  try {
    const response = await fetch('/data/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    products = await response.json();
    console.log('Products loaded successfully:', products);
  } catch (error) {
    console.error('Error loading products:', error);
    throw error;
  }
}

// Load products for category pages
function loadCategoryProducts() {
  const categoryElement = document.querySelector('[data-category]');
  const subCategoryElement = document.querySelector('[data-subcategory]');
  
  if (!categoryElement || !subCategoryElement) {
    // Try to detect from URL
    detectCategoryFromURL();
    return;
  }

  const category = categoryElement.dataset.category;
  const subCategory = subCategoryElement.dataset.subcategory;
  
  renderCategoryProducts(category, subCategory);
}

// Detect category from URL
function detectCategoryFromURL() {
  const path = window.location.pathname;
  const pathParts = path.split('/').filter(part => part);
  
  // Extract category and subcategory from URL structure
  if (pathParts.length >= 4) {
    const category = pathParts[3]; // mens-collection, womens-collection, etc.
    const subCategory = pathParts[4]?.replace('.html', ''); // formal, casual, etc.
    
    if (category && subCategory) {
      renderCategoryProducts(category, subCategory);
    }
  }
}

// Render products for specific category and subcategory
function renderCategoryProducts(category, subCategory) {
  const productContainer = document.querySelector('.product-grid');
  
  if (!productContainer) {
    console.warn('Product container not found');
    return;
  }

  // Get products for current category/subcategory
  const categoryProducts = products[category];
  if (!categoryProducts) {
    showError(`No products found for category: ${category}`);
    return;
  }

  const subCategoryProducts = categoryProducts[subCategory];
  if (!subCategoryProducts || subCategoryProducts.length === 0) {
    showError(`No products found for subcategory: ${subCategory}`);
    return;
  }

  // Update page title
  const titleElement = document.querySelector('.title, h2.title');
  if (titleElement) {
    titleElement.textContent = formatCategoryTitle(category, subCategory);
  }

  // Clear existing content
  productContainer.innerHTML = '';

  // Render each product
  subCategoryProducts.forEach(product => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });

  console.log(`Rendered ${subCategoryProducts.length} products for ${category}/${subCategory}`);
}

// Create product card HTML
function createProductCard(product) {
  const productDiv = document.createElement('div');
  productDiv.className = 'showcase';
  productDiv.setAttribute('data-product-id', product.id);
  productDiv.setAttribute('data-brand', product.brand);

  const discount = product.originalPrice ? 
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  productDiv.innerHTML = `
    <div class="showcase-banner">
      <img src="${product.image}" alt="${product.name}" width="300" class="product-img default">
      <img src="${product.hoverImage}" alt="${product.name}" width="300" class="product-img hover">
      
      ${discount > 0 ? `<p class="showcase-badge">${discount}%</p>` : ''}
      ${!product.inStock ? `<p class="showcase-badge angle black">Out of Stock</p>` : ''}
      
      <div class="showcase-actions">
        <button class="btn-action" onclick="addToWishlist('${product.id}')" title="Add to Wishlist">
          <ion-icon name="heart-outline"></ion-icon>
        </button>
        
        <button class="btn-action" onclick="viewProductDetails('${product.id}')" title="Quick View">
          <ion-icon name="eye-outline"></ion-icon>
        </button>
        
        <button class="btn-action" onclick="addToCart('${product.id}')" 
                title="Add to Cart" ${!product.inStock ? 'disabled' : ''}>
          <ion-icon name="bag-add-outline"></ion-icon>
        </button>
      </div>
    </div>
    
    <div class="showcase-content">
      <a href="#" class="showcase-brand">${product.category}</a>
      
      <h3>
        <a href="#" onclick="viewProductDetails('${product.id}')" class="showcase-title">
          ${product.name}
        </a>
      </h3>
      
      <div class="showcase-rating">
        ${generateStars(product.rating)}
      </div>
      
      <div class="price-box">
        <p class="price">$${product.price.toFixed(2)}</p>
        ${product.originalPrice ? `<del>$${product.originalPrice.toFixed(2)}</del>` : ''}
      </div>
    </div>
  `;

  return productDiv;
}

// Generate star rating HTML
function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += `<ion-icon name="${i <= rating ? 'star' : 'star-outline'}"></ion-icon>`;
  }
  return stars;
}

// Format category title
function formatCategoryTitle(category, subCategory) {
  const categoryName = category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const subCategoryName = subCategory.replace(/[&-]/g, ' & ').replace(/\b\w/g, l => l.toUpperCase());
  return `${categoryName} - ${subCategoryName}`;
}

// Find product by ID across all categories
function findProductById(productId) {
  for (const category in products) {
    for (const subCategory in products[category]) {
      const product = products[category][subCategory].find(p => p.id === productId);
      if (product) return product;
    }
  }
  return null;
}

// Navigation functions
function navigateToCart() {
  window.location.href = '/cart.html';
}

function navigateToWishlist() {
  window.location.href = '/wishlist.html';
}

function viewProductDetails(productId) {
  localStorage.setItem('selectedProduct', productId);
  window.location.href = '/product-details.html';
}

// Add to cart function
function addToCart(productId) {
  const product = findProductById(productId);
  if (!product) {
    showNotification('Product not found!', 'error');
    return;
  }

  if (!product.inStock) {
    showNotification('Product is out of stock!', 'error');
    return;
  }

  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      quantity: 1,
      category: product.category
    });
  }
  
  updateCartCount();
  showNotification(`${product.name} added to cart!`, 'success');
}

// Add to wishlist function
function addToWishlist(productId) {
  const product = findProductById(productId);
  if (!product) {
    showNotification('Product not found!', 'error');
    return;
  }

  const existingItem = wishlist.find(item => item.id === productId);
  
  if (!existingItem) {
    wishlist.push({
      id: productId,
      name: product.name,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category
    });
    
    updateWishlistCount();
    showNotification(`${product.name} added to wishlist!`, 'success');
  } else {
    showNotification(`${product.name} is already in your wishlist!`, 'info');
  }
}

// Update cart count
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElements = document.querySelectorAll('#cart-count, #mobile-cart-count');
  cartCountElements.forEach(element => {
    if (element) element.textContent = totalItems;
  });
}

// Update wishlist count
function updateWishlistCount() {
  const totalItems = wishlist.length;
  const wishlistCountElements = document.querySelectorAll('#wishlist-count, #mobile-wishlist-count');
  wishlistCountElements.forEach(element => {
    if (element) element.textContent = totalItems;
  });
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification-popup ${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1000;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Show error message
function showError(message) {
  const productContainer = document.querySelector('.product-container, .product-grid, #productGrid');
  if (productContainer) {
    productContainer.innerHTML = `
      <div class="error-message" style="
        text-align: center;
        padding: 40px;
        color: #666;
        font-size: 16px;
        background: #f9f9f9;
        border-radius: 8px;
        margin: 20px 0;
        grid-column: 1 / -1;
      ">
        <ion-icon name="alert-circle-outline" style="font-size: 48px; color: #ff6b6b; margin-bottom: 16px;"></ion-icon>
        <h3 style="margin-bottom: 8px; color: #333;">${message}</h3>
        <p>Please check back later or contact support if the problem persists.</p>
      </div>
    `;
  }
}

// Cart page functions
function loadCartPage() {
  const cartItemsContainer = document.getElementById('cart-items');
  const emptyCartContainer = document.getElementById('empty-cart');
  
  if (cart.length === 0) {
    if (cartItemsContainer) cartItemsContainer.style.display = 'none';
    if (emptyCartContainer) emptyCartContainer.style.display = 'block';
    const cartSummary = document.querySelector('.cart-summary');
    if (cartSummary) cartSummary.style.display = 'none';
  } else {
    if (cartItemsContainer) cartItemsContainer.style.display = 'block';
    if (emptyCartContainer) emptyCartContainer.style.display = 'none';
    const cartSummary = document.querySelector('.cart-summary');
    if (cartSummary) cartSummary.style.display = 'block';
    
    renderCartItems();
    updateCartSummary();
  }
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  if (!cartItemsContainer) return;
  
  cartItemsContainer.innerHTML = '';
  
  cart.forEach(item => {
    const cartItemHTML = `
      <div class="cart-item" data-product-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h3 class="cart-item-title">${item.name}</h3>
          <p class="cart-item-brand">${item.brand}</p>
          <p class="cart-item-category">${item.category}</p>
          <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        </div>
        <div class="cart-item-controls">
          <div class="quantity-controls">
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
            <input type="number" value="${item.quantity}" min="1" readonly>
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
      </div>
    `;
    cartItemsContainer.innerHTML += cartItemHTML;
  });
}

function updateCartQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    updateCartCount();
    renderCartItems();
    updateCartSummary();
  }
}

function removeFromCart(productId) {
  const product = cart.find(item => item.id === productId);
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  
  if (cart.length === 0) {
    loadCartPage();
  } else {
    renderCartItems();
    updateCartSummary();
  }
  
  if (product) {
    showNotification(`${product.name} removed from cart!`, 'info');
  }
}

function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 55 ? 0 : 5.00;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;
  
  const elements = {
    'subtotal': `$${subtotal.toFixed(2)}`,
    'shipping': shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`,
    'tax': `$${tax.toFixed(2)}`,
    'total': `$${total.toFixed(2)}`
  };

  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
}

function clearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    cart = [];
    updateCartCount();
    loadCartPage();
    showNotification('Cart cleared!', 'info');
  }
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showNotification('Your cart is empty!', 'error');
    return;
  }
  
  showNotification('Order placed successfully! Thank you for shopping with us.', 'success');
  cart = [];
  updateCartCount();
  loadCartPage();
}

// Wishlist page functions
function loadWishlistPage() {
  const wishlistItemsContainer = document.getElementById('wishlist-items');
  const emptyWishlistContainer = document.getElementById('empty-wishlist');
  
  if (wishlist.length === 0) {
    if (wishlistItemsContainer) wishlistItemsContainer.style.display = 'none';
    if (emptyWishlistContainer) emptyWishlistContainer.style.display = 'block';
    const wishlistActions = document.querySelector('.wishlist-actions');
    if (wishlistActions) wishlistActions.style.display = 'none';
  } else {
    if (wishlistItemsContainer) wishlistItemsContainer.style.display = 'grid';
    if (emptyWishlistContainer) emptyWishlistContainer.style.display = 'none';
    const wishlistActions = document.querySelector('.wishlist-actions');
    if (wishlistActions) wishlistActions.style.display = 'flex';
    
    renderWishlistItems();
  }
}

function renderWishlistItems() {
  const wishlistItemsContainer = document.getElementById('wishlist-items');
  if (!wishlistItemsContainer) return;
  
  wishlistItemsContainer.innerHTML = '';
  
  wishlist.forEach(item => {
    const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;
    
    const wishlistItemHTML = `
      <div class="wishlist-item" data-product-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="wishlist-item-image" onclick="viewProductDetails('${item.id}')">
        <div class="wishlist-item-content">
          <h3 class="wishlist-item-title">${item.name}</h3>
          <p class="wishlist-item-brand">${item.brand}</p>
          <div class="wishlist-item-price">
            $${item.price.toFixed(2)}
            ${item.originalPrice ? `<del>$${item.originalPrice.toFixed(2)}</del>` : ''}
            ${discount > 0 ? `<span class="discount">${discount}% OFF</span>` : ''}
          </div>
          <div class="wishlist-item-actions">
            <button class="add-to-cart-from-wishlist" onclick="addToCartFromWishlist('${item.id}')">Add to Cart</button>
            <button class="remove-from-wishlist" onclick="removeFromWishlist('${item.id}')">
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    `;
    wishlistItemsContainer.innerHTML += wishlistItemHTML;
  });
}

function addToCartFromWishlist(productId) {
  addToCart(productId);
}

function removeFromWishlist(productId) {
  const product = wishlist.find(item => item.id === productId);
  wishlist = wishlist.filter(item => item.id !== productId);
  updateWishlistCount();
  
  if (wishlist.length === 0) {
    loadWishlistPage();
  } else {
    renderWishlistItems();
  }
  
  if (product) {
    showNotification(`${product.name} removed from wishlist!`, 'info');
  }
}

function clearWishlist() {
  if (confirm('Are you sure you want to clear your wishlist?')) {
    wishlist = [];
    updateWishlistCount();
    loadWishlistPage();
    showNotification('Wishlist cleared!', 'info');
  }
}

function addAllToCart() {
  if (wishlist.length === 0) {
    showNotification('Your wishlist is empty!', 'error');
    return;
  }
  
  wishlist.forEach(item => {
    addToCart(item.id);
  });
  
  showNotification(`${wishlist.length} items added to cart!`, 'success');
}

// Product details page functions
function loadProductDetailsPage() {
  const productId = localStorage.getItem('selectedProduct');
  if (!productId) {
    window.location.href = '/index.html';
    return;
  }
  
  const product = findProductById(productId);
  if (!product) {
    window.location.href = '/index.html';
    return;
  }
  
  // Update page content
  const elements = {
    'product-brand': product.brand,
    'product-name': product.name,
    'product-title': product.name,
    'current-price': `$${product.price.toFixed(2)}`,
    'original-price': `$${product.originalPrice?.toFixed(2) || product.price.toFixed(2)}`,
    'product-desc': product.description
  };

  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });

  // Update images
  const mainImage = document.getElementById('main-product-image');
  const thumb1 = document.getElementById('thumb-1');
  const thumb2 = document.getElementById('thumb-2');

  if (mainImage) mainImage.src = product.image;
  if (thumb1) thumb1.src = product.image;
  if (thumb2) thumb2.src = product.hoverImage;
  
  // Calculate discount
  if (product.originalPrice) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const discountBadge = document.getElementById('discount-badge');
    if (discountBadge) discountBadge.textContent = `${discount}% OFF`;
  }
  
  // Update rating stars
  const starsContainer = document.getElementById('product-stars');
  if (starsContainer) {
    starsContainer.innerHTML = generateStars(product.rating);
  }
  
  // Store current product ID for actions
  window.currentProductId = productId;
}

function changeMainImage(src) {
  const mainImage = document.getElementById('main-product-image');
  if (mainImage) mainImage.src = src;
  
  // Update active thumbnail
  document.querySelectorAll('.thumbnail-images img').forEach(thumb => {
    thumb.classList.remove('active');
  });
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

function increaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  if (quantityInput) {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
      quantityInput.value = currentValue + 1;
    }
  }
}

function decreaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  if (quantityInput) {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }
}

function addToCartFromDetails() {
  const quantity = parseInt(document.getElementById('quantity')?.value || 1);
  const productId = window.currentProductId;
  
  if (!productId) return;
  
  for (let i = 0; i < quantity; i++) {
    addToCart(productId);
  }
}

function addToWishlistFromDetails() {
  const productId = window.currentProductId;
  if (productId) {
    addToWishlist(productId);
  }
}

function buyNow() {
  addToCartFromDetails();
  setTimeout(() => {
    navigateToCart();
  }, 500);
}

// Tab Switching Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the first tab as active
  showTab('description');
  
  // Add click event listeners to all tab buttons
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get the tab name from the button's onclick attribute or text content
      const onclickAttr = this.getAttribute('onclick');
      if (onclickAttr) {
        const match = onclickAttr.match(/'([^']+)'/);
        if (match) {
          showTab(match[1]);
        }
      }
    });
  });
});

function showTab(tabName) {
  try {
    // Hide all tab panes
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
      pane.classList.remove('active');
      pane.style.display = 'none';
    });
    
    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
      button.classList.remove('active');
    });
    
    // Show the selected tab pane
    const activePane = document.getElementById(`${tabName}-tab`);
    if (activePane) {
      activePane.classList.add('active');
      activePane.style.display = 'block';
    }
    
    // Activate the clicked button
    const activeButton = Array.from(tabButtons).find(button => 
      button.textContent.trim().toLowerCase().includes(tabName.toLowerCase()) ||
      (button.getAttribute('onclick') && button.getAttribute('onclick').includes(tabName))
    );
    
    if (activeButton) {
      activeButton.classList.add('active');
    }
  } catch (error) {
    console.error('Error in showTab function:', error);
  }
}

// Size and color selection
document.addEventListener('DOMContentLoaded', function() {
  // Size selection
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Color selection
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Original modal, toast, and menu functionality
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { 
  if (modal) modal.classList.add('closed');
}

// modal eventListener
if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', modalCloseFunc);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
if (toastCloseBtn) {
  toastCloseBtn.addEventListener('click', function () {
    if (notificationToast) notificationToast.classList.add('closed');
  });
}

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    if (overlay) overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  if (overlay) overlay.addEventListener('click', mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
}

// Filter Sidebar Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Toggle filter sections
  const filterTitles = document.querySelectorAll('.filter-title');
  filterTitles.forEach(title => {
    title.addEventListener('click', function() {
      const section = this.parentElement;
      section.classList.toggle('active');
    });
  });

  // Close all filter sections when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.filter-section') && !e.target.closest('.filter-toggle-btn')) {
      document.querySelectorAll('.filter-section').forEach(section => {
        section.classList.remove('active');
      });
    }
  });

  // Toggle filter sidebar on mobile
  const filterToggleBtn = document.querySelector('.filter-toggle-btn');
  const filterSidebar = document.querySelector('.filter-sidebar');
  const filterCloseBtn = document.querySelector('.filter-close-btn');

  if (filterToggleBtn && filterSidebar) {
    filterToggleBtn.addEventListener('click', function() {
      filterSidebar.classList.add('active');
    });
    
    if (filterCloseBtn) {
      filterCloseBtn.addEventListener('click', function() {
        filterSidebar.classList.remove('active');
      });
    }
  }
  
  // Price range slider
  const priceSlider = document.querySelector('.price-slider');
  const priceMin = document.querySelector('.price-min');
  const priceMax = document.querySelector('.price-max');
  
  if (priceSlider && priceMin && priceMax) {
    // Set initial values
    priceSlider.value = priceSlider.max;
    priceMin.value = 0;
    priceMax.value = priceSlider.max;
    
    // Update max price when slider changes
    priceSlider.addEventListener('input', function() {
      priceMax.value = this.value;
    });
    
    // Update slider when max price changes
    priceMax.addEventListener('input', function() {
      if (parseInt(this.value) > parseInt(priceSlider.max)) {
        this.value = priceSlider.max;
      }
      priceSlider.value = this.value;
    });
    
    // Validate min price
    priceMin.addEventListener('input', function() {
      if (parseInt(this.value) < 0) {
        this.value = 0;
      }
      if (parseInt(this.value) > parseInt(priceMax.value)) {
        this.value = priceMax.value;
      }
    });
  }
  
  // Apply filters
  const applyFiltersBtn = document.querySelector('.apply-filters');
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', function() {
      applyFilters();
    });
  }

  // Reset filters
  const resetFiltersBtn = document.querySelector('.reset-filters');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', function() {
      resetFilters();
    });
  }
});

// Apply filters function
function applyFilters() {
  // Get selected ratings
  const selectedRatings = [];
  document.querySelectorAll('input[name="rating"]:checked').forEach(checkbox => {
    selectedRatings.push(parseInt(checkbox.value));
  });
  
  // Get selected brands
  const selectedBrands = [];
  document.querySelectorAll('input[name="brand"]:checked').forEach(checkbox => {
    selectedBrands.push(checkbox.id.replace('brand-', ''));
  });
  
  const minPrice = parseFloat(document.querySelector('.price-min')?.value) || 0;
  const maxPrice = parseFloat(document.querySelector('.price-max')?.value) || Infinity;
  
  // Filter products
  document.querySelectorAll('.showcase').forEach(product => {
    const productId = product.getAttribute('data-product-id');
    const productData = findProductById(productId);
    
    if (!productData) {
      product.style.display = 'none';
      return;
    }
    
    const productPrice = productData.price;
    const productRating = productData.rating;
    const productBrand = productData.brand;
    
    const priceMatch = productPrice >= minPrice && productPrice <= maxPrice;
    const ratingMatch = selectedRatings.length === 0 || selectedRatings.includes(productRating);
    const brandMatch = selectedBrands.length === 0 || 
                      selectedBrands.some(brand => productBrand.toLowerCase().includes(brand.toLowerCase()));
    
    if (priceMatch && ratingMatch && brandMatch) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
  
  // Close sidebar on mobile
  const filterSidebar = document.querySelector('.filter-sidebar');
  if (window.innerWidth <= 1024 && filterSidebar) {
    filterSidebar.classList.remove('active');
  }
}

// Reset filters function
function resetFilters() {
  // Uncheck all checkboxes
  document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });
  
  // Reset price range
  const priceSlider = document.querySelector('.price-slider');
  const priceMin = document.querySelector('.price-min');
  const priceMax = document.querySelector('.price-max');
  
  if (priceSlider && priceMin && priceMax) {
    priceSlider.value = priceSlider.max;
    priceMin.value = 0;
    priceMax.value = priceSlider.max;
  }
  
  // Show all products
  document.querySelectorAll('.showcase').forEach(product => {
    product.style.display = 'block';
  });
}

// Search functionality
const searchField = document.querySelector('.search-field');
const searchBtn = document.querySelector('.search-btn');

function performSearch() {
  if (!searchField) return;
  
  const searchTerm = searchField.value.toLowerCase().trim();
  
  if (!searchTerm) {
    // Show all products if search is empty
    document.querySelectorAll('.showcase').forEach(product => {
      product.style.display = 'block';
    });
    // Remove any existing no-results message
    const noResults = document.getElementById('no-results-message');
    if (noResults) noResults.remove();
    return;
  }
  
  let foundMatches = false;
  
  // Search through all products
  document.querySelectorAll('.showcase').forEach(product => {
    const productId = product.getAttribute('data-product-id');
    const productData = findProductById(productId);
    
    if (!productData) {
      product.style.display = 'none';
      return;
    }
    
    const productName = productData.name.toLowerCase();
    const productBrand = productData.brand.toLowerCase();
    const productDesc = productData.description.toLowerCase();
    
    // Check if search term matches name, brand or description
    if (productName.includes(searchTerm) || 
        productBrand.includes(searchTerm) ||
        productDesc.includes(searchTerm)) {
      product.style.display = 'block';
      foundMatches = true;
    } else {
      product.style.display = 'none';
    }
  });
  
  // Handle no results
  const productGrid = document.querySelector('.product-grid');
  const existingMessage = document.getElementById('no-results-message');
  
  if (!foundMatches && !existingMessage && productGrid) {
    const noResults = document.createElement('div');
    noResults.id = 'no-results-message';
    noResults.style.gridColumn = '1 / -1';
    noResults.style.textAlign = 'center';
    noResults.style.padding = '40px';
    noResults.innerHTML = `
      <h3>No products found for "${searchTerm}"</h3>
      <p>Try different search terms</p>
    `;
    productGrid.appendChild(noResults);
  } else if (foundMatches && existingMessage) {
    existingMessage.remove();
  }
}

// Add event listeners for search
if (searchBtn) {
  searchBtn.addEventListener('click', performSearch);
}

if (searchField) {
  searchField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}