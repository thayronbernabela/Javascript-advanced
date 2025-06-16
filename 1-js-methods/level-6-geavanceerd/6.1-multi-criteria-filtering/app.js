// Opdracht 6.1: Multi-criteria Filtering
console.log('🚀 Opdracht 6.1: Multi-criteria Filtering');

const autos = [
    {id: 1, merk: 'Toyota', model: 'Corolla', jaar: 2020, prijs: 18000, brandstof: 'Benzine'},
    {id: 2, merk: 'Tesla', model: 'Model 3', jaar: 2021, prijs: 45000, brandstof: 'Elektrisch'},
    {id: 3, merk: 'Toyota', model: 'Prius', jaar: 2019, prijs: 22000, brandstof: 'Hybrid'},
    {id: 4, merk: 'BMW', model: '320i', jaar: 2017, prijs: 25000, brandstof: 'Benzine'},
    {id: 5, merk: 'Audi', model: 'A4', jaar: 2022, prijs: 35000, brandstof: 'Diesel'},
    {id: 6, merk: 'Tesla', model: 'Model Y', jaar: 2023, prijs: 55000, brandstof: 'Elektrisch'}
];

let huidigeFilters = {
    merk: '',
    minJaar: null,
    maxJaar: null,
    maxPrijs: null,
    brandstof: ''
};

function filterAutos(filters) {
    console.log('Filteren met criteria:', filters);
    
    let resultaat = autos;
    
    // TODO: Filter op merk
    if (filters.merk) {
        resultaat = /* jouw code hier */;
    }
    
    // TODO: Filter op minimum jaar
    if (filters.minJaar) {
        resultaat = /* jouw code hier */;
    }
    
    // TODO: Filter op maximum jaar
    if (filters.maxJaar) {
        resultaat = /* jouw code hier */;
    }
    
    // TODO: Filter op maximum prijs
    if (filters.maxPrijs) {
        resultaat = /* jouw code hier */;
    }
    
    // TODO: Filter op brandstof type
    if (filters.brandstof) {
        resultaat = /* jouw code hier */;
    }
    
    return resultaat;
}

function updateFilters() {
    // TODO: Haal filter waarden uit de form
    const nieuweFilters = {
        merk: /* jouw code hier */,
        minJaar: /* jouw code hier */,
        maxJaar: /* jouw code hier */,
        maxPrijs: /* jouw code hier */,
        brandstof: /* jouw code hier */
    };
    
    huidigeFilters = nieuweFilters;
    
    // TODO: Filter de auto's
    const gefilterdeAutos = /* jouw code hier */;
    
    // TODO: Update de UI
    toonAutos(gefilterdeAutos);
    toonActieveFilters();
    
    // TODO: Sla filters op in localStorage
    /* jouw code hier */;
}

function toonAutos(autolijst) {
    const container = document.getElementById('auto-container');
    
    if (autolijst.length === 0) {
        container.innerHTML = '<p class="geen-resultaten">Geen auto\'s gevonden met deze criteria.</p>';
        return;
    }
    
    // TODO: Genereer HTML voor auto's
    const autosHTML = autolijst.map(auto => `
        <div class="auto-kaart">
            <h3>${/* jouw code hier */}</h3>
            <p><strong>Model:</strong> ${/* jouw code hier */}</p>
            <p><strong>Jaar:</strong> ${/* jouw code hier */}</p>
            <p><strong>Prijs:</strong> €${/* jouw code hier */}</p>
            <p><strong>Brandstof:</strong> ${/* jouw code hier */}</p>
        </div>
    `).join('');
    
    container.innerHTML = autosHTML;
    
    // Update resultaat teller
    document.getElementById('aantal-resultaten').textContent = /* jouw code hier */;
}

function toonActieveFilters() {
    const container = document.getElementById('actieve-filters');
    const actieveFilters = [];
    
    // TODO: Maak lijst van actieve filters
    if (huidigeFilters.merk) {
        actieveFilters.push(/* jouw code hier */);
    }
    
    if (huidigeFilters.minJaar) {
        actieveFilters.push(/* jouw code hier */);
    }
    
    // TODO: Voeg andere filters toe...
    
    if (actieveFilters.length === 0) {
        container.innerHTML = '<p>Geen actieve filters</p>';
    } else {
        container.innerHTML = `<p><strong>Actieve filters:</strong> ${actieveFilters.join(', ')}</p>`;
    }
}

function resetAllFilters() {
    // TODO: Reset alle filter inputs
    document.getElementById('merk-filter').value = '';
    /* jouw code hier - reset andere inputs */;
    
    // TODO: Reset filter object
    huidigeFilters = /* jouw code hier */;
    
    // TODO: Toon alle auto's
    /* jouw code hier */;
}

function exporteerResultaten() {
    const gefilterdeAutos = filterAutos(huidigeFilters);
    
    // TODO: Maak CSV string van resultaten
    const csvContent = /* jouw code hier */;
    
    // TODO: Download als bestand
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gefilterde-autos.csv';
    a.click();
}

// TODO: Initialisatie
function init() {
    /* jouw code hier */;
}

/* jouw code hier - roep init() aan */;