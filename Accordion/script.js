/** @format */

document.addEventListener('DOMContentLoaded', function () {
	const accordions = document.querySelectorAll('.accordion');
	const multiselectCheckbox = document.getElementById('multiselect');

	accordions.forEach((accordion, index) => {
		const description = accordion.querySelector('.description');
		const expandIcon = accordion.querySelector('.expand-icon');
		const collapseIcon = accordion.querySelector('.collapse-icon');

		if (index === 0) {
			expand(description, expandIcon, collapseIcon); // Expand the first item
		} else {
			collapse(description, expandIcon, collapseIcon); // Collapse others
		}
	});

	accordions.forEach((accordion) => {
		const title = accordion.querySelector('.title-section');
		const description = accordion.querySelector('.description');
		const expandIcon = accordion.querySelector('.expand-icon');
		const collapseIcon = accordion.querySelector('.collapse-icon');

		title.addEventListener('click', () => {
			const isExpanded = description.style.display === 'block';

			if (multiselectCheckbox.checked) {
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

	function expand(description, expandIcon, collapseIcon) {
		description.style.display = 'block';
		expandIcon.style.display = 'none';
		collapseIcon.style.display = 'block';
	}

	function collapse(description, expandIcon, collapseIcon) {
		description.style.display = 'none';
		expandIcon.style.display = 'block';
		collapseIcon.style.display = 'none';
	}
});
