/* Imports */

/* Get DOM Elements */
const cityName = document.getElementById('city-name');
const climatePhoto = document.getElementById('climate-photo');
const archPhoto = document.getElementById('arch-photo');
const attractionsList = document.getElementById('attractions-list');
const attractionInput = document.getElementById('attractions-input');
const attractionButton = document.getElementById('add-attraction-button');

const cityNameInput = document.getElementById('name-input');
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');

/* State */
let city = {
    name: 'Olympia, WA',
    climate: 'forest',
    architecture: 'small-town',
    attractions: [],
};

/* Events */

cityNameInput.addEventListener('input', () => {
    city.name = cityNameInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

attractionButton.addEventListener('click', () => {
    const attraction = attractionInput.value;
    if (attraction !== '') {
        city.attractions.push(attraction);
        displayAttraction();
    }
    attractionInput.value = '';
});

/* Display Functions */
function displayCity() {
    cityName.textContent = city.name;
    climatePhoto.src = './assets/climate/climate-' + city.climate + '.jpg';
    climatePhoto.alt = city.climate;
    archPhoto.src = './assets/architecture/arch-' + city.architecture + '.jpg';
}

function displayAttraction() {
    attractionsList.innerHTML = '';
    for (let attraction of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionsList.append(li);
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayCity();
displayAttraction();
