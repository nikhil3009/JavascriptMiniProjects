/** @format */

var flat = function (arr) {
	let flatArray = [];
	arr.forEach((element) => {
		if (Array.isArray(element)) {
			flatArray = flatArray.concat(flat(element));
		} else {
			flatArray.push(element);
		}
	});
	return flatArray;
};
