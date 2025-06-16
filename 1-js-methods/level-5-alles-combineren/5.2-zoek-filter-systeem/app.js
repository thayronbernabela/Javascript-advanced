// Opdracht 5.2: Zoek Filter Systeem
console.log('🚀 Opdracht 5.2: Zoek Filter Systeem');

const producten = [
    {id: 1, naam: 'Laptop Dell', categorie: 'Electronics', prijs: 899},
    {id: 2, naam: 'iPhone 14', categorie: 'Electronics', prijs: 1299},
    {id: 3, naam: 'Bureustoel', categorie: 'Meubels', prijs: 199}
];

let huidigeFilters = {
    zoekterm: '',
    categorie: '',
    minPrijs: 0,
    maxPrijs: 2000,
    sortering: 'naam'
};

function zoekProducten(zoekterm) {
    // TODO: Filter producten op zoekterm (naam en categorie)
    return /* jouw code hier */;
}

function filterOpCategorie(productenLijst, categorie) {
    // TODO: Filter op categorie
    if (!categorie) return productenLijst;
    return /* jouw code hier */;
}

function sorteerProducten(productenLijst, sorteerMethode) {
    // TODO: Sorteer op naam, prijs-laag, prijs-hoog
    const gesorteerd = [...productenLijst];
    
    switch (sorteerMethode) {
        case 'naam':
            return /* jouw code hier */;
        case 'prijs-laag':
            return /* jouw code hier */;
        case 'prijs-hoog':
            return /* jouw code hier */;
        default:
            return gesorteerd;
    }
}

function getTotaalGefilterdeLijst() {
    let resultaat = producten;
    
    // TODO: Pas alle filters toe
    if (huidigeFilters.zoekterm) {
        resultaat = /* jouw code hier */;
    }
    
    resultaat = /* jouw code hier - categorie filter */;
    resultaat = /* jouw code hier - prijs filter */;
    resultaat = /* jouw code hier - sortering */;
    
    return resultaat;
}

function updateFilters(nieuweFilters) {
    // TODO: Update filters en localStorage
    huidigeFilters = {...huidigeFilters, ...nieuweFilters};
    /* jouw code hier - sla op in localStorage */;
    updateProductenWeergave();
}

function updateProductenWeergave() {
    const productenLijst = getTotaalGefilterdeLijst();
    const container = document.getElementById('producten-container');
    
    // TODO: Genereer HTML voor producten
    const productenHTML = /* jouw code hier */;
    container.innerHTML = productenHTML;
}

// TODO: Event handlers voor formulier
function handleZoekInput(event) {
    updateFilters({zoekterm: /* jouw code hier */});
}

// TODO: Initialisatie
/* jouw code hier */;