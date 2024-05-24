/** @format */

const products = [
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

let cart = [];

const productListElement = document.getElementById('productList');
const categoryFilterElement = document.getElementById('categoryFilter');
const cartItemsElement = document.getElementById('cartItems');

function renderProducts(filter = 'all') {
	productListElement.innerHTML = '';
	const filteredProducts =
		filter === 'all'
			? products
			: products.filter((product) => product.category === filter);
	filteredProducts.forEach((product) => {
		const productElement = document.createElement('div');
		productElement.classList.add('product');
		productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
		productListElement.appendChild(productElement);
	});
}

function addToCart(productId) {
	const product = products.find((p) => p.id === productId);
	cart.push(product);
	renderCart();
}

function renderCart() {
	cartItemsElement.innerHTML = '';
	cart.forEach((item) => {
		const cartItemElement = document.createElement('li');
		cartItemElement.textContent = item.name;
		cartItemsElement.appendChild(cartItemElement);
	});
}

categoryFilterElement.addEventListener('change', (event) => {
	renderProducts(event.target.value);
});

renderProducts();
