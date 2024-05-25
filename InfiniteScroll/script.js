/** @format */

let page = 1;
let hasMore = true;
let isFetching = false;

const root = document.getElementById('root');

async function fetchData() {
	isFetching = true;
	let response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_page=${page}`
	);
	let data = await response.json();
	isFetching = false;

	if (data.length === 0) {
		hasMore = false;
	}
	for (let post of data) {
		let div = document.createElement('div');
		div.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
		root.appendChild(div);
	}
	page++;
}

window.addEventListener('scroll', () => {
	if (!hasMore || isFetching) {
		return;
	}
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		fetchData();
	}
});

fetchData();
