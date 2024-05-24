/** @format */

// List of products
var products = [
	{
		id: 1,
		name: 'Smartphone',
		category: 'electronics',
		image: 'smartphone.jpg',
	},
	{ id: 2, name: 'Laptop', category: 'electronics', image: 'laptop.jpg' },
	{ id: 3, name: 'Jeans', category: 'clothing', image: 'jeans.jpg' },
	{ id: 4, name: 'T-shirt', category: 'clothing', image: 'tshirt.jpg' },
	{ id: 5, name: 'Book', category: 'books', image: 'book.jpg' },
];

// Empty cart
var cart = [];

// Get HTML elements
var productListElement = document.getElementById('productList');
var categoryFilterElement = document.getElementById('categoryFilter');
var cartItemsElement = document.getElementById('cartItems');

// Display all products initially
productListElement.innerHTML = '';
for (var i = 0; i < products.length; i++) {
	var product = products[i];
	var productElement = document.createElement('div');
	productElement.classList.add('product');
	productElement.innerHTML = `<img src = ${product.image} alt =${product.name} ><h2>${product.name}</h2> <button onclick="addToCart(${product.id})">Add to cart</button>`;

	productListElement.appendChild(productElement);
}

// Add to cart function
window.addToCart = function (productId) {
	for (var i = 0; i < products.length; i++) {
		if (products[i].id === productId) {
			cart.push(products[i]);
			break;
		}
	}
	renderCart();
};

// Render cart function
function renderCart() {
	cartItemsElement.innerHTML = '';
	for (var i = 0; i < cart.length; i++) {
		var cartItemElement = document.createElement('li');
		cartItemElement.textContent = cart[i].name;
		cartItemsElement.appendChild(cartItemElement);
	}
}

// Filter products by category
categoryFilterElement.addEventListener('change', function (event) {
	var filter = event.target.value;
	productListElement.innerHTML = '';
	for (var i = 0; i < products.length; i++) {
		if (filter === 'all' || products[i].category === filter) {
			var productElement = document.createElement('div');
			productElement.classList.add('product');
			productElement.innerHTML =
				'<img src="' +
				products[i].image +
				'" alt="' +
				products[i].name +
				'"><h3>' +
				products[i].name +
				'</h3><button onclick="addToCart(' +
				products[i].id +
				')">Add to Cart</button>';
			productListElement.appendChild(productElement);
		}
	}
});
