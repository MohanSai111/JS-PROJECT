// import products from "./products.js";
// const productContainer = document.querySelector(".product-list");

// console.log(products);

// if (productContainer) {
//     displayProducts();
// }

// function displayProducts() {
//     products.forEach(product=>{
//         const productCard= document.createElement("div");
//         productCard.classList.add("product-card");
//         productCard.innerHTML=`
//           <div class="img-box">
//           <img src="${product.heroImgUrl}">
//           </div>
//           <h2 class="title">${product.title}</h2>
//           <span class="category">${product.category}</span>
//           <span class="price">${product.price}</span>
//           <br>
//           <button>Add to Cart</button>
//         `;
//         productContainer.appendChild(productCard);

//         const imgBox= productCard.querySelector(".img-box");
//         imgBox.addEventListener("click",()=>{
//             localStorage.setItem("selectedProduct",JSON.stringify(product));
//             window.location.href="product-detail.html";
//         })
//     }) 
// }

import products from "./products.js";
const productContainer = document.querySelector(".product-list");
const cartItemCount = document.querySelector(".cart-item-count");

// Initialize cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartItemCount.textContent = totalItems;
    cartItemCount.style.display = totalItems > 0 ? 'block' : 'none';
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));
    updateCartCount();
}

function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        // Use a placeholder for the price formatting here. We will use toFixed(2) in JS.
        productCard.innerHTML = `
            <div class="img-box">
                <img src="${product.heroImgUrl}" alt="${product.title}">
            </div>
            <h2 class="title">${product.title}</h2>
            <span class="category">${product.category}</span>
            <span class="price">$${product.price.toFixed(2)}</span>
            <br>
            <button class="add-btn" data-product-id="${product.id}">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);

        // 1. Add Listener for Product Detail Page (Clicking Image)
        const imgBox = productCard.querySelector(".img-box");
        imgBox.addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product-detail.html";
        });
        
        // 2. Add Listener for Add to Cart Button (The New Functionality)
        const addBtn = productCard.querySelector(".add-btn");
        addBtn.addEventListener("click", () => {
            addToCart(product);
        });
    }); 
}

if (productContainer) {
    displayProducts();
    updateCartCount(); // Display the current count when the page loads
}