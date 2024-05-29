/** @format */

const star = document.querySelector('.star-container');
let active = -1;
for (let i = 0; i < 5; i++) {
	let startImg = document.createElement('img');
	startImg.src = './star.png';
	startImg.className = 'star';
	star.appendChild(startImg);
	startImg.addEventListener('mouseover', () => {
		onStarHover(i);
	});
	startImg.addEventListener('mouseleave', onStarLeave);
	startImg.addEventListener('click', () => {
		onStarClick(i);
	});
}

let stars = document.querySelectorAll('.star');
function fill(ratingVal) {
	for (let i = 0; i < 5; i++) {
		if (i <= ratingVal) {
			stars[i].src = './cstar.png';
		} else {
			stars[i].src = './star.png';
		}
	}
}
function onStarHover(i) {
	fill(i);
}
function onStarClick(i) {
	active = i;
	document.querySelector('.value').innerHTML = i + 1;
	fill(active);
}
function onStarLeave() {
	fill(active);
}
