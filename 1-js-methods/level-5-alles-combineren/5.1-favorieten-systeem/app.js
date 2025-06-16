// Opdracht 5.1: Favorieten Systeem
console.log('🚀 Opdracht 5.1: Favorieten Systeem');

const boeken = [
    {id: 1, titel: 'Harry Potter en de Steen der Wijzen', auteur: 'J.K. Rowling', genre: 'Fantasy'},
    {id: 2, titel: 'In de Ban van de Ring', auteur: 'J.R.R. Tolkien', genre: 'Fantasy'},
    {id: 3, titel: '1984', auteur: 'George Orwell', genre: 'Dystopie'}
];

let favorieten = [];
let huidigeFiltter = 'alle';

function laadFavorieten() {
    // TODO: Haal favorieten op uit localStorage
    const opgeslagenFavorieten = /* jouw code hier */;
    
    if (opgeslagenFavorieten) {
        favorieten = /* jouw code hier */;
    }
}

function slaFavorietenOp() {
    // TODO: Sla favorieten op in localStorage
    /* jouw code hier */;
}

function toggleFavoriet(boekId) {
    // TODO: Check of boek al favoriet is
    if (/* jouw code hier - gebruik includes() */) {
        // TODO: Verwijder uit favorieten (gebruik indexOf en splice)
        /* jouw code hier */;
    } else {
        // TODO: Voeg toe aan favorieten
        /* jouw code hier */;
    }
    
    slaFavorietenOp();
    updateUI();
}

function maakBoekHTML(boek) {
    // TODO: Bepaal juist hart icoon
    const hartIcon = /* jouw code hier - ❤️ of 🤍 */;
    
    return `
        <div class="boek-kaart">
            <h3>${/* jouw code hier */}</h3>
            <p>Auteur: ${/* jouw code hier */}</p>
            <p>Genre: ${/* jouw code hier */}</p>
            <button onclick="toggleFavoriet(${boek.id})">${hartIcon}</button>
        </div>
    `;
}

function updateUI() {
    // TODO: Bepaal welke boeken te tonen
    let terugteTonenBoeken;
    if (huidigeFiltter === 'favorieten') {
        terugteTonenBoeken = /* jouw code hier - filter boeken op favorieten */;
    } else {
        terugteTonenBoeken = /* jouw code hier */;
    }
    
    // TODO: Genereer HTML
    const container = document.getElementById('boeken-container');
    const boekenHTML = /* jouw code hier - gebruik map() en join() */;
    container.innerHTML = boekenHTML;
    
    // TODO: Update statistieken
    document.getElementById('totaal-boeken').textContent = /* jouw code hier */;
    document.getElementById('aantal-favorieten').textContent = /* jouw code hier */;
}

function toonTab(tabNaam) {
    huidigeFiltter = tabNaam;
    
    // TODO: Update tab styling
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabNaam}"]`).classList.add('active');
    
    updateUI();
}

// TODO: Initialisatie
function init() {
    /* jouw code hier */;
}

/* jouw code hier - roep init() aan bij DOMContentLoaded */;