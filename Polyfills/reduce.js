/** @format */

//arr.reduce((acc,curr)=>{},intialalue)

Array.prototype.myreduce = function (cb, intialalue) {
	var acc = intialalue;
	for (let i = 0; i < this.length; i++) {
		acc = acc ? cb(acc, this[i]) : this[i];
	}
	return acc;
};

const arr = [1, 2, 3, 4];

const res = arr.myreduce((acc, cur) => {
	return acc + cur;
}, 0);
console.log(res);
