/** @format */

const accordions = document.querySelectorAll('.accordion');
const multiChecks = document.getElementById('multiselect');

accordions.forEach((accordion, index) => {
	const description = accordion.querySelector('.description');
	const expandIcon = accordion.querySelector('.expand-icon');
	const collapseIcon = accordion.querySelector('.collapse-icon');

	if (index === 0) {
		expand(description, expandIcon, collapseIcon);
	} else {
		collapse(description, expandIcon, collapseIcon);
	}
});

accordions.forEach((accordion) => {
	const titleSec = accordion.querySelector('.title-section');
	const description = accordion.querySelector('.description');
	const expandIcon = accordion.querySelector('.expand-icon');
	const collapseIcon = accordion.querySelector('.collapse-icon');

	titleSec.addEventListener('click', () => {
		const isExpanded = description.style.display === 'block';

		if (multiChecks.checked) {
			if (isExpanded) {
				collapse(description, expandIcon, collapseIcon);
			} else {
				expand(description, expandIcon, collapseIcon);
			}
		} else {
			accordions.forEach((acc) => {
				const desc = acc.querySelector('.description');
				const expIcon = acc.querySelector('.expand-icon');
				const colIcon = acc.querySelector('.collapse-icon');
				collapse(desc, expIcon, colIcon);
			});
			if (!isExpanded) {
				expand(description, expandIcon, collapseIcon);
			}
		}
	});
});

function collapse(description, expandIcon, collapseIcon) {
	description.style.display = 'none';
	expandIcon.style.display = 'block';
	collapseIcon.style.display = 'none';
}
function expand(description, expandIcon, collapseIcon) {
	description.style.display = 'block';
	expandIcon.style.display = 'none';
	collapseIcon.style.display = 'block';
}
