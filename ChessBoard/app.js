/** @format */

const board = document.querySelector('.board');
for (let i = 0; i < 8; i++) {
	const cellContainer = document.createElement('div');
	cellContainer.className = 'cell__container';
	for (let j = 0; j < 8; j++) {
		const cell = document.createElement('div');
		cell.className = 'squares';
		if (i % 2 === 0) {
			if (j % 2 === 0) {
				cell.style.backgroundColor = 'black';
			} else {
				cell.style.backgroundColor = 'white';
			}
		} else {
			if (j % 2 === 0) {
				cell.style.backgroundColor = 'white';
			} else {
				cell.style.backgroundColor = 'black';
			}
		}
		cellContainer.appendChild(cell);
	}
	board.appendChild(cellContainer);
}
