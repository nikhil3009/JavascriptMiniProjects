/** @format */
const data = [
	{ name: 'John Doe', age: 28 },
	{ name: 'Jane Smith', age: 34 },
	{ name: 'Sam Johnson', age: 21 },
	{ name: 'Chris Lee', age: 45 },
	{ name: 'Sara Connor', age: 25 },
];
createTable(data);

function createTable(data) {
	const tableb = document.querySelector('tbody');
	tableb.innerHTML = '';
	let index = 1;
	for (let d of data) {
		const tr = document.createElement('tr');
		const sntd = document.createElement('td');
		sntd.innerText = index;
		index++;
		tr.appendChild(sntd);
		const nametd = document.createElement('td');
		nametd.innerText = d.name;
		tr.appendChild(nametd);
		const ageTd = document.createElement('td');
		ageTd.innerText = d.age;
		tr.appendChild(ageTd);
		tableb.appendChild(tr);
	}
}

function filterTable() {
	const search = document.getElementById('searchBox');
	const key = search.value.toLowerCase();
	const filteredData = data.filter((item) =>
		item.name.toLowerCase().includes(key)
	);
	createTable(filteredData);
}
function sortTable() {
	sortedData = [...data].sort((a, b) => a.age - b.age);
	createTable(sortedData);
}

document.getElementById('searchBox').addEventListener('input', filterTable);
document.getElementById('sortButton').addEventListener('click', sortTable);
