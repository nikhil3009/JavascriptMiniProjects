/** @format */

async function converter(source, des) {
	const key = 'bbev';
	const api = `xyz/${key}`;

	const response = await fetch(api);
	if (!response.ok) {
		throw new Error('fetching failed');
	}
	const data = await response.json();
	return data.exhangeRates;
}

async function currencyConverter(amount, source, dest) {
	if (amount <= 0) {
		throw new Error('Invalid amount');
	}
	const mul = await converter(source, dest);
	if (mul == null) {
		throw new Error('unable to fetch exchange rates at this time');
	}
	return mul * amount;
}
