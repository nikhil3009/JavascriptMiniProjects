/** @format */

function once(fun, context) {
	let ran;
	return function () {
		if (fun) {
			fun.apply(context || this, arguments);
			fun = null;
		}
		return ran;
	};
}

let hi = once((a, b) => console.log('Say Hi', a, b));

hi(1, 2);
hi(1, 2);
hi(1, 2);
