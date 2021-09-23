
const cartMaker = function () {
	let cartItems = [];

	const addItem = item => {
		cartItems.push(item);
		return `${item} added to the cart`;
	};

	const getCartLength = () => {
		return cartItems.length === 0
			? "There is no items in the Cart"
			: cartItems.length === 1
			? "There is 1 item in your card"
			: `Thre are ${cartItems.length} items in your cart`;
	};

	const deleteItem = ID => {
		let filteredArr = cartItems.filter(obj => obj.id !== ID);
		cartItems.splice(0, cartItems.length, ...filteredArr);
	};

	const calcTotalPrice = () => {
		return cartItems.reduce((total, item) => total + item.price, 0);
	};

	return {
		addItem,
		getCartLength,
		deleteItem,
		calcTotalPrice,
		cartItems,
	};
};

let cart = cartMaker();

console.log(cart);

cart.addItem({ id: 1, name: "Book", price: 13, insale: true });
cart.addItem({ id: 2, name: "bag", price: 13, insale: true });

// cart.deleteItem(4);
// console.log(cart.cartItems);
// console.log(cart.getCartLength());

// console.log(cart.calcTotalPrice());
// console.log(cart.cartItems);