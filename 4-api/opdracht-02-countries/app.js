const apiUrl = "https://restcountries.com/v3.1/all?fields=name,flags";
const container = document.getElementById("countries-container");

async function fetchCountries() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Fout bij het ophalen van de data: ${response.status}`);
    }

    const countries = await response.json();

    displayCountries(countries);

  } catch (error) {
    console.error("Er is een fout opgetreden:", error);
    container.innerHTML = `<p class="loading-text">Er is iets misgegaan bij het laden van de landen.</p>`;
  }
}

function displayCountries(countries) {
  container.innerHTML = "";

  countries.forEach(country => {
   
    const card = document.createElement("div");
    card.classList.add("country-card");

    card.innerHTML = `
      <img class="country-flag" src="${country.flags.svg}" alt="Vlag van ${country.name.common}">
      <div class="country-name">${country.name.common}</div>
    `;

    container.appendChild(card);
  });
}

fetchCountries();
