/** @format */
const memoize = (fn) => {
	const cache = {};
	return (...args) => {
		const key = JSON.stringify(args);
		if (key in cache) {
			console.log('Printing from cache');
			return cache[key];
		} else {
			console.log('Printing from a function call and adding to cache');
			const result = fn.apply(this, args);
			cache[key] = result;
			return result;
		}
	};
};

const addThreeNumbers = (a, b, c) => a + b + c;
const add = memoize(addThreeNumbers);
console.log(add(1, 2, 3));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3));
console.log(add(3, 2, 1));

console.log(add(3, 3, 1, 5));
console.log(add(3, 2, 1));
