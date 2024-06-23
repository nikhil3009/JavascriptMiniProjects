/** @format */

const button = document.getElementById('btn');
const clickCount = document.getElementById('btnPressed');
const triggeredCount = document.getElementById('btnTriggered');

var clicks = 0;
var triggers = 0;

function myDebounce(cb, d) {
	let timer;
	return function (...args) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			cb(...args);
		}, d);
	};
}
const debouncedCount = myDebounce(() => {
	triggers = triggers + 1;
	triggeredCount.innerHTML = triggers;
}, 1000);
button.addEventListener('click', () => {
	clickCount.innerHTML = ++clicks;
	debouncedCount();
});
