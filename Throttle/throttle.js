/** @format */

const button = document.getElementById('btn');
const clickCount = document.getElementById('btnPressed');
const triggeredCount = document.getElementById('btnTriggred');

var clicks = 0;
var triggers = 0;

const throttleCount = _.throttle(() => {
	triggeredCount.innerHTML = ++triggers;
}, 1000);
button.addEventListener('click', () => {
	clickCount.innerHTML = ++clicks;
	throttleCount();
});
