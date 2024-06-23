/** @format */

Array.prototype.mymap = function (cb) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(cb(this[i]));
	}
	return result;
};

const arr = [1, 2, 3, 4, 5];

const multiplByTen = arr.mymap((num) => {
	return num * 10;
});
console.log(multiplByTen);
