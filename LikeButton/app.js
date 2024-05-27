/** @format */

let likeCount = 0;

document.getElementById('likeButton').addEventListener('click', async () => {
	const liked = document.getElementById('likeButton');
	liked.classList.add('loading');
	liked.innerHTML =
		'<i class="fas fa-spinner fa-spin"></i><span>Processing...</span>';
	await new Promise((resolve) => setTimeout(resolve, 2000));
	likeCount++;
	document.getElementById('likeCount').innerText = likeCount;
	liked.classList.remove('loading');
	liked.classList.add('clicked');
	likeButton.innerHTML = '<i class="fas fa-heart"></i><span>Like</span>';
});
document.getElementById('resetButton').addEventListener('click', () => {
	likeCount = 0;
	document.getElementById('likeCount').innerText = likeCount;
});
