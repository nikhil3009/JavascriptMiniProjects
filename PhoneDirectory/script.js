/** @format */

const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const error = document.getElementById('error');
const table = document.querySelector('table');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	error.style.display = 'none';
	const nameCheck = name.value.trim();
	const emailCheck = email.value.trim();
	const mobileCheck = mobile.value.trim();

	if (
		!validateName(nameCheck) ||
		!validateEmail(emailCheck) ||
		!validatePhone(mobileCheck)
	) {
		error.style.display = 'block';
		return;
	}
	addContact(nameCheck, emailCheck, mobileCheck);
	resetForm();

	function validateName(name) {
		const namePattern = /^[a-zA-Z\s]{1,20}$/;
		return namePattern.test(name);
	}
	function validateEmail(email) {
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailPattern.test(email);
	}
	function validatePhone(mobile) {
		const mobilePattern = /^\d{10}$/;
		return mobilePattern.test(mobile);
	}

	function addContact(name, email, mobile) {
		const newRow = table.insertRow();
		newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${mobile}</td>`;
	}

	function resetForm() {
		name.value = '';
		email.value = '';
		mobile.value = '';
	}
});
