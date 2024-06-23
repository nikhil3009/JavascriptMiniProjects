/** @format */

const obj = {
	name: 'sainikhil',
	task: 'bath',
};
function res(time, notion) {
	console.log(`${this.name} need to have ${this.task} at ${time} ${notion}`);
}

Function.prototype.myApply = function (context = {}, args = []) {
	if (typeof this !== 'function') {
		throw new Error("this isn't a function so not calabble");
	}
	if (!Array.isArray(args)) {
		throw new Error('Not an array');
	}
	context.fn = this;
	context.fn(...args);
};
res.myApply(obj, ['6:30', 'pm']);

//res.call(obj, '6:30 pm');
