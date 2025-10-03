// API endpoint voor nieuwe Fortnite cosmetics
const API_URL = "https://fortnite-api.com/v2/cosmetics/new";

// Functie om cosmetics op te halen en te tonen
const loadCosmetics = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Pak de lijst met items
    const cosmetics = data.data.items;
    const container = document.getElementById("cosmetics");

    // Maak voor elk item een kaart
    cosmetics.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.images.icon}" alt="${item.name}">
        <div class="info">
          <h3>${item.name}</h3>
          <p>Type: ${item.type.value}</p>
          <p>Rarity: ${item.rarity.value}</p>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Fout bij het ophalen van cosmetics:", error);
    document.getElementById("cosmetics").textContent =
      "Kon geen Fortnite cosmetics laden ❌";
  }
};

// Start de app zodra de DOM geladen is
document.addEventListener("DOMContentLoaded", loadCosmetics);
