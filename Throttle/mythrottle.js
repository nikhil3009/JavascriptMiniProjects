/** @format */

const button = document.getElementById('btn');
const clickCount = document.getElementById('btnPressed');
const triggeredCount = document.getElementById('btnTriggred');

var clicks = 0;
var triggers = 0;
const start = new Date().getTime();
const myThrottle = (cb, d) => {
	let last = 0;
	return (...args) => {
		let now = new Date().getTime();
		if (now - last < d) {
			return;
		}
		last = now;
		return cb(...args);
	};
};

const throttleCount = myThrottle(() => {
	triggeredCount.innerHTML = ++triggers;
}, 1000);
button.addEventListener('click', () => {
	clickCount.innerHTML = ++clicks;
	const now = new Date().getTime();
	const diff = (now - start) / 1000;
	console.log(diff.toFixed());
	throttleCount();
});
