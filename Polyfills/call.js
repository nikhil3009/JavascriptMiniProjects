/** @format */

const obj = {
	name: 'sainikhil',
	task: 'bath',
};
function res(time) {
	console.log(`${this.name} need to have ${this.task} at ${time}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
	if (typeof this !== 'function') {
		throw new Error("this isn't a function so not calabble");
	}
	context.fn = this;
	context.fn(...args);
};
res.myCall(obj, '6:30 pm');

//res.call(obj, '6:30 pm');
