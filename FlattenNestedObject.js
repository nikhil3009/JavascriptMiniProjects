/** @format */
let ob = {
	a: {
		b: {
			c: 1,
			d: [2, 3, { e: 4 }],
		},
		f: 5,
	},
	g: 6,
};

// Declare a flatten function that takes
// object as parameter and returns the
// flatten object
const flattenObj = (ob) => {
	// The object which contains the
	// final result
	let result = {};

	// loop through the object "ob"
	for (const i in ob) {
		// Check if the property is an object
		if (typeof ob[i] === 'object' && ob[i] !== null) {
			// Check if it's an array
			if (Array.isArray(ob[i])) {
				// Iterate through the array elements
				ob[i].forEach((item, index) => {
					// Recursively flatten each array element
					const temp = flattenObj(item);
					for (const j in temp) {
						// Store temp in result with array index
						result[i + '.' + index + '.' + j] = temp[j];
					}
				});
			} else {
				// If it's an object, recursively call the function
				const temp = flattenObj(ob[i]);
				for (const j in temp) {
					// Store temp in result
					result[i + '.' + j] = temp[j];
				}
			}
		} else {
			// If it's not an object or array, store ob[i] in result directly
			result[i] = ob[i];
		}
	}
	return result;
};

console.log(flattenObj(ob));
