/** @format */

const names = {
	firstName: 'sainikhil',
	lastName: 'Pendayala',
};
const printName = function (hometown, state) {
	console.log(
		this.firstName + ' ' + this.lastName + ' from ' + hometown + ',' + state
	);
};
const printMyname = printName.bind(names, 'Mancherial');
printMyname('Telangana');
const name2 = {
	firstName: 'Dhoni',
	lastName: 'MS',
};
Function.prototype.myBind = function (...args) {
	let obj = this;
	let arr = args.splice(1);
	return function (...args2) {
		obj.apply(args[0], [...arr, ...args2]);
	};
};
const printMyname2 = printName.myBind(name2, 'Ranchi');
printMyname2('Jharkhand');
