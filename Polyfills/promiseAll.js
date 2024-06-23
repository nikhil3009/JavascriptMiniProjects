/** @format */

function getLikes(vedio) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`got the likes count of ${vedio}`);
		}, 1000);
	});
}

function getShares(vedio) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`${vedio} has been shared`);
		}, 4000);
	});
}

// Promise.all([
// 	getLikes('Ms dhoni final six'),
// 	getShares('Ms dhoni retirement vedio'),
// ])
// 	.then((res) => console.log(res))
// 	.catch((err) => {
// 		console.log('error fetching');
// 	});

Promise.myAll = (promises) => {
	return new Promise((resolve, reject) => {
		const results = [];
		if (!promises.length) {
			resolve(results);
			return;
		}
		let pending = promises.length;
		promises.forEach((prom, i) => {
			Promise.resolve(prom).then((res) => {
				results[i] = res;
				pending--;

				if (pending === 0) {
					resolve(results);
				}
			}, reject);
		});
	});
};
Promise.myAll([
	getLikes('Ms dhoni final six'),
	getShares('Ms dhoni retirement vedio'),
])
	.then((res) => console.log(res))
	.catch((err) => {
		console.log('error fetching');
	});
