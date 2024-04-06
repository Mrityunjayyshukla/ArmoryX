// script.js
const products = [
    { id: 1, name: "Aircraft", category: "aerospace", price: 1000000 },
    { id: 2, name: "Firewall Software", category: "cybersecurity", price: 5000 },
    { id: 3, name: "Rifle", category: "weapons", price: 2000 },
    // Add more products as needed
];

let cart = [];

function displayProducts(products) {
    const productsElement = document.getElementById("products");
    productsElement.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsElement.appendChild(productElement);
    });
}

function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        displayCart();
    }
}

function displayCart() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = '';
    cart.forEach(item => {
        const cartItemElement = document.createElement("li");
        cartItemElement.classList.add("cart-item");
        cartItemElement.textContent = item.name;
        cartElement.appendChild(cartItemElement);
    });
}

// Initial display
displayProducts(products);