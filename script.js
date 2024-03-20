const countryInput = document.querySelector('#countryInput');
const search = document.querySelector('#search');
const search_result = document.querySelector('#search_result');
const flag = document.querySelector('#flag');
const name = document.querySelector('#name');
const capital = document.querySelector('#capital');
const continent = document.querySelector('#continent');
const population = document.querySelector('#population');
const currency = document.querySelector('#currency');
const currencyShort = document.querySelector('#currencyShort');
const language = document.querySelector('#language');
// Add an async function as the click event handler for the search button
search.addEventListener('click', async () => {
  // Get the value entered in the country input field
  const countryName = countryInput.value;

  // Construct the API URL using the entered country name
  const apiUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  // Log the constructed URL to the console
  console.log(apiUrl);

  try {
    // Fetch country data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Display the search result section
    search_result.style.display = 'block';

    // Extract the country data from the response
    const countryData = data[0];

    // Update the flag image source with the SVG URL
    flag.src = countryData.flags.svg;

    // Update the name, capital, continent, population, currency, currencyShort, and language elements with corresponding data
    name.innerHTML = countryData.name.common;
    capital.innerHTML = countryData.capital;
    continent.innerHTML = countryData.continents;
    population.innerHTML = countryData.population;
    currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name;
    currencyShort.innerHTML = Object.keys(countryData.currencies)[0];
    language.innerHTML = Object.values(countryData.languages).toString().split(',').join(',');

    // Clear the input textbox
    countryInput.value = '';
  } catch (error) {
    console.log('Error:', error);
  }
});

