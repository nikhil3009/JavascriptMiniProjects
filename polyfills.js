/** @format */

Array.prototype.map = function (callbackFn) {
	const output = [];
	this.forEach((element, index) => {
		output.push(callbackFn(element, index, this));
	});
	return output;
};

console.log([1, 2, 3, 4, 5].map((e) => e * 10));

Array.prototype.filter = function (callbackFn) {
	const output = [];
	this.forEach((element, index) => {
		if (callbackFn(element, index, this)) {
			output.push(element);
		}
	});
	return output;
};

console.log([1, 2, 3, 4, 5].filter((e) => e % 2 === 0));

const split = (string, del) => {
	const res = [];
	if (del === '') {
		return Array.from(string);
	}
	const startSplit = (str, i) => {
		if (i >= string.length) {
			return;
		} else {
			const index = str.indexOf(del);
			if (index >= 0) {
				res.push(str.substring(0, index));
				startSplit(str.substring(del.length + index), del.length + index);
			} else {
				res.push(str);
			}
		}
	};
	startSplit(string, 0);
	return res;
};

console.log(split('Paypal let frontend let coding let questions', 'let'));
