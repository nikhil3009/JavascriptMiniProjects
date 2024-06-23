/** @format */

Array.prototype.myfilter = function (cb) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i])) {
			result.push(this[i]);
		}
	}
	return result;
};

const arr = [1, -2, 3, 4, -5];

const multiplByTen = arr.myfilter((num) => {
	return num > 0;
});
console.log(multiplByTen);
