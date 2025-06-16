// Opdracht 6.3: Geavanceerde Zoekfunctie
console.log('🚀 Opdracht 6.3: Geavanceerde Zoekfunctie');

const producten = [
    {
        id: 1, 
        naam: 'iPhone 14 Pro', 
        beschrijving: 'Nieuwste smartphone van Apple met geavanceerde camera', 
        categorie: 'Electronics', 
        merk: 'Apple',
        tags: ['smartphone', 'apple', 'camera', 'ios']
    },
    {
        id: 2, 
        naam: 'Samsung Galaxy S23', 
        beschrijving: 'Krachtige Android smartphone met OLED display', 
        categorie: 'Electronics', 
        merk: 'Samsung',
        tags: ['smartphone', 'android', 'samsung', 'oled']
    },
    {
        id: 3, 
        naam: 'MacBook Pro M2', 
        beschrijving: 'Professionele laptop voor creatieve professionals', 
        categorie: 'Computers', 
        merk: 'Apple',
        tags: ['laptop', 'apple', 'creative', 'm2']
    },
    {
        id: 4, 
        naam: 'Gaming Toetsenbord RGB', 
        beschrijving: 'Mechanisch toetsenbord met RGB verlichting voor gamers', 
        categorie: 'Gaming', 
        merk: 'Corsair',
        tags: ['gaming', 'toetsenbord', 'rgb', 'mechanisch']
    }
];

let zoekgeschiedenis = [];
let zoekstatistieken = {};

function geavanceerdZoeken() {
    const zoekterm = document.getElementById('hoofd-zoek').value.trim();
    
    if (!zoekterm) return;
    
    // TODO: Voeg toe aan zoekgeschiedenis
    voegToeAanGeschiedenis(zoekterm);
    
    // TODO: Haal zoekopties op
    const opties = {
        zoekNaam: /* jouw code hier */,
        zoekBeschrijving: /* jouw code hier */,
        zoekTags: /* jouw code hier */,
        exacteMatch: /* jouw code hier */,
        caseSensitive: /* jouw code hier */
    };
    
    // TODO: Zoek producten
    const resultaten = zoekProducten(zoekterm, opties);
    
    // TODO: Sorteer op relevantie
    const gesorteerdeResultaten = sorteerOpRelevantie(resultaten, zoekterm);
    
    // TODO: Toon resultaten
    toonZoekResultaten(gesorteerdeResultaten, zoekterm);
    
    // TODO: Update statistieken
    updateZoekStatistieken(zoekterm);
}

function zoekProducten(zoekterm, opties) {
    console.log('Zoeken naar:', zoekterm, 'met opties:', opties);
    
    return producten.map(product => {
        let relevantieScore = 0;
        let matchendeVelden = [];
        
        // TODO: Zoek in naam
        if (opties.zoekNaam) {
            const match = checkMatch(product.naam, zoekterm, opties);
            if (match.gevonden) {
                relevantieScore += /* jouw code hier - score voor naam match */;
                matchendeVelden.push('naam');
            }
        }
        
        // TODO: Zoek in beschrijving
        if (opties.zoekBeschrijving) {
            const match = checkMatch(product.beschrijving, zoekterm, opties);
            if (match.gevonden) {
                relevantieScore += /* jouw code hier - score voor beschrijving */;
                matchendeVelden.push('beschrijving');
            }
        }
        
        // TODO: Zoek in tags
        if (opties.zoekTags) {
            const tagMatches = product.tags.filter(tag => 
                checkMatch(tag, zoekterm, opties).gevonden
            );
            if (tagMatches.length > 0) {
                relevantieScore += /* jouw code hier - score voor tags */;
                matchendeVelden.push('tags');
            }
        }
        
        return {
            ...product,
            relevantieScore,
            matchendeVelden
        };
    }).filter(product => product.relevantieScore > 0);
}

function checkMatch(tekst, zoekterm, opties) {
    // TODO: Pas case sensitivity toe
    const zoektermVerwerkt = opties.caseSensitive ? zoekterm : /* jouw code hier */;
    const tekstVerwerkt = opties.caseSensitive ? tekst : /* jouw code hier */;
    
    // TODO: Check exacte match of gedeeltelijke match
    if (opties.exacteMatch) {
        return { gevonden: /* jouw code hier */ };
    } else {
        return { gevonden: /* jouw code hier */ };
    }
}

function sorteerOpRelevantie(resultaten, zoekterm) {
    // TODO: Sorteer op relevantie score (hoogste eerst)
    return resultaten.sort((a, b) => /* jouw code hier */);
}

function toonZoekResultaten(resultaten, zoekterm) {
    const container = document.getElementById('resultaten-container');
    const resultaatInfo = document.getElementById('resultaat-info');
    
    if (resultaten.length === 0) {
        container.innerHTML = '<p class="geen-resultaten">Geen resultaten gevonden.</p>';
        resultaatInfo.textContent = 'Geen resultaten';
        return;
    }
    
    // TODO: Update resultaat info
    resultaatInfo.textContent = /* jouw code hier */;
    
    // TODO: Genereer HTML voor resultaten
    const resultatenHTML = resultaten.map(product => `
        <div class="zoek-resultaat" data-score="${product.relevantieScore}">
            <h3>${highlightMatches(product.naam, zoekterm)}</h3>
            <p>${highlightMatches(product.beschrijving, zoekterm)}</p>
            <div class="match-info">
                <span class="relevantie">Relevantie: ${product.relevantieScore}</span>
                <span class="velden">Matches in: ${product.matchendeVelden.join(', ')}</span>
            </div>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    container.innerHTML = resultatenHTML;
}

function highlightMatches(tekst, zoekterm) {
    // TODO: Highlight zoekterm in tekst
    if (!zoekterm) return tekst;
    
    const regex = new RegExp(`(${zoekterm})`, 'gi');
    return tekst.replace(regex, '<mark>$1</mark>');
}

function voegToeAanGeschiedenis(zoekterm) {
    // TODO: Voeg toe aan geschiedenis (max 10 items)
    if (!zoekgeschiedenis.includes(zoekterm)) {
        zoekgeschiedenis.unshift(zoekterm);
        
        if (zoekgeschiedenis.length > 10) {
            zoekgeschiedenis = /* jouw code hier - houd alleen eerste 10 */;
        }
        
        // TODO: Sla op in localStorage
        /* jouw code hier */;
        
        // TODO: Update UI
        toonZoekgeschiedenis();
    }
}

function toonZoekgeschiedenis() {
    const container = document.getElementById('recente-zoekopdrachten');
    
    if (zoekgeschiedenis.length === 0) {
        container.innerHTML = '<p>Nog geen zoekopdrachten.</p>';
        return;
    }
    
    // TODO: Toon recente zoekopdrachten
    const geschiedenisHTML = zoekgeschiedenis.map(term => `
        <span class="zoek-tag" onclick="hergebruikZoekterm('${term}')">
            ${term} <button onclick="verwijderUitGeschiedenis('${term}')">×</button>
        </span>
    `).join('');
    
    container.innerHTML = geschiedenisHTML;
}

function hergebruikZoekterm(zoekterm) {
    // TODO: Zet zoekterm in input en zoek
    document.getElementById('hoofd-zoek').value = zoekterm;
    geavanceerdZoeken();
}

function updateZoekStatistieken(zoekterm) {
    // TODO: Update statistieken
    if (zoekstatistieken[zoekterm]) {
        zoekstatistieken[zoekterm]++;
    } else {
        zoekstatistieken[zoekterm] = 1;
    }
    
    // TODO: Sla statistieken op
    /* jouw code hier */;
    
    // TODO: Update UI
    toonZoekStatistieken();
}

function toonZoekStatistieken() {
    const totaalElement = document.getElementById('totaal-zoekopdrachten');
    const populairstElement = document.getElementById('populairste-zoekterm');
    
    // TODO: Bereken totaal aantal zoekopdrachten
    const totaal = /* jouw code hier */;
    totaalElement.textContent = totaal;
    
    // TODO: Vind populairste zoekterm
    const populairste = /* jouw code hier */;
    populairstElement.textContent = populairste || '-';
}

function handleZoekInput(event) {
    const zoekterm = event.target.value;
    
    // TODO: Toon suggesties (real-time)
    if (zoekterm.length > 1) {
        toonZoekSuggesties(zoekterm);
    } else {
        document.getElementById('zoek-suggesties').innerHTML = '';
    }
}

function toonZoekSuggesties(zoekterm) {
    // TODO: Maak suggesties op basis van productmen en geschiedenis
    const suggesties = [];
    
    // Suggesties uit producten
    producten.forEach(product => {
        if (product.naam.toLowerCase().includes(zoekterm.toLowerCase())) {
            suggesties.push(product.naam);
        }
    });
    
    // Suggesties uit geschiedenis
    zoekgeschiedenis.forEach(historischeTerm => {
        if (historischeTerm.toLowerCase().includes(zoekterm.toLowerCase())) {
            suggesties.push(historischeTerm);
        }
    });
    
    // TODO: Toon unieke suggesties
    const uniekeSuggesties = [...new Set(suggesties)].slice(0, 5);
    
    const suggestiesContainer = document.getElementById('zoek-suggesties');
    if (uniekeSuggesties.length > 0) {
        const suggestiesHTML = uniekeSuggesties.map(suggestie => `
            <div class="suggestie" onclick="selecteerSuggestie('${suggestie}')">
                ${suggestie}
            </div>
        `).join('');
        
        suggestiesContainer.innerHTML = suggestiesHTML;
    } else {
        suggestiesContainer.innerHTML = '';
    }
}

function wisZoekgeschiedenis() {
    if (confirm('Weet je zeker dat je de zoekgeschiedenis wilt wissen?')) {
        // TODO: Wis geschiedenis
        zoekgeschiedenis = [];
        zoekstatistieken = {};
        
        // TODO: Update localStorage en UI
        /* jouw code hier */;
        
        toonZoekgeschiedenis();
        toonZoekStatistieken();
    }
}

// TODO: Event handlers
function wisZoekterm() {
    document.getElementById('hoofd-zoek').value = '';
    document.getElementById('zoek-suggesties').innerHTML = '';
    document.getElementById('resultaten-container').innerHTML = '<p>Voer een zoekterm in om te beginnen.</p>';
}

function sorteerResultaten() {
    const sorteerType = document.getElementById('sorteer-relevantie').value;
    // TODO: Implementeer verschillende sorteer opties
    console.log('Sorteren op:', sorteerType);
}

// TODO: Initialisatie
function init() {
    // TODO: Laad geschiedenis en statistieken uit localStorage
    /* jouw code hier */;
    
    // TODO: Update UI
    toonZoekgeschiedenis();
    toonZoekStatistieken();
    
    // TODO: Voeg Enter key support toe
    document.getElementById('hoofd-zoek').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            geavanceerdZoeken();
        }
    });
}

/* jouw code hier - roep init() aan */;