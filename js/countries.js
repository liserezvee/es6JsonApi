const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }
  const countriesContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    const countrtDiv = document.createElement("div");
    countrtDiv.classList.add("country");
    //console.log(country);
    countrtDiv.innerHTML = `
     <h3>Name: ${country.name.common}</h3>
     <p>capital: ${country.capital ? country.capital[0] : "no capotal"}</p>
     <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `;
    countriesContainer.appendChild(countrtDiv);
  });
};
const loadCountryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
  console.log(country);
  const countryDetails = document.getElementById("country-detail");
  countryDetails.innerHTML = `
    <h2>details: ${country.name.common}</h2>
    <img src='${country.flags.png}'>
 `;
};

loadCountry();
