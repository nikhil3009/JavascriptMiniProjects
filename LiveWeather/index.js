/** @format */

const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = '80ee961cb1563616627f061b4063993c';

weatherForm.addEventListener('submit', async (e) => {
	console.log('i am called');
	e.preventDefault();
	const city = cityInput.value;
	if (city) {
		try {
			const weatherData = await getWeatherData(city);
			displayWeather(weatherData);
		} catch (error) {
			displayError(error);
		}
	} else {
		displayError('Please enter the city');
	}
});

async function getWeatherData(city) {
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
	const response = await fetch(apiUrl);
	if (!response.ok) {
		throw new Error('could not fetch the data');
	}
	return await response.json();
}

function displayWeather(data) {
	console.log(data);
	const {
		name: city,
		main: { temp, humidity },
		weather: [{ description }],
	} = data;

	card.textContent = '';
	card.style.display = 'flex';
	const cityDisplay = document.createElement('h1');
	const tempDisplay = document.createElement('p');
	const humDisplay = document.createElement('p');
	const decDisplay = document.createElement('p');

	cityDisplay.textContent = city;
	cityDisplay.classList.add('cityDisplay');
	card.append(cityDisplay);
	tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C `;
	tempDisplay.classList.add('tempDisplay');
	card.append(tempDisplay);
	humDisplay.textContent = `Humidity:${humidity}%`;
	humDisplay.classList.add('humidityDisplay');
	card.append(humDisplay);
	decDisplay.textContent = description;
	decDisplay.classList.add('descDisplay');
	card.append(decDisplay);
}

function displayError(message) {
	const errorDisplay = document.createElement('p');
	errorDisplay.textContent = message;
	errorDisplay.classList.add('errorDisplay');

	card.textContent = '';
	card.style.display = 'flex';
	card.append(errorDisplay);
}
