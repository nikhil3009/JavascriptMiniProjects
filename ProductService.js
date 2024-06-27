/** @format */

class Item {
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quanity = quantity;
	}
}

class Cart {
	constructor() {
		this.cart = [];
	}

	add(item) {
		this.cart.push(item);
	}
	remove(name) {
		this.cart = this.cart.filter((item) => item.name !== name);
	}

	totalPrice() {
		return this.cart.reduce((total, it) => {
			return total + it.price * it.quanity;
		}, 0);
	}
	displayItems() {
		console.log('cart contents are: ');
		this.cart.map((item) => {
			console.log(
				`Name:${item.name},Price:${item.price},Quantity:${item.quanity}`
			);
		});
	}
}

class PaymentService {
	processPayment(amount) {
		console.log(`${amount} Payment Processing`);
		return true;
	}
}

class Checkout {
	constructor(cartService, paymentService) {
		this.cartService = cartService;
		this.paymentService = paymentService;
	}
	checkout() {
		const totalAmount = this.cartService.totalPrice();
		if (totalAmount > 0) {
			const paymentSuccessfull =
				this.paymentService.processPayment(totalAmount);
			if (paymentSuccessfull) {
				console.log('Payment SuccessFull,order placed successfully');
				this.cartService.cart = [];
			} else {
				console.log('payment failed, please try again.');
			}
		} else {
			console.log('your cart is empty');
		}
	}
}

const cartService = new Cart();
const paymentService = new PaymentService();
const checkoutService = new Checkout(cartService, paymentService);

const item1 = new Item('Watch', 1, 1000);
const item2 = new Item('Shirt', 1, 200);

cartService.add(item1);
cartService.add(item2);
cartService.displayItems();
console.log('Total:', cartService.totalPrice());

checkoutService.checkout();
cartService.displayItems();
