// Opdracht 6.2: Dynamische Sortering
console.log('🚀 Opdracht 6.2: Dynamische Sortering');

const personen = [
    {naam: 'Jan de Vries', leeftijd: 25, stad: 'Amsterdam', salaris: 45000, startdatum: '2020-03-15'},
    {naam: 'Marie Jansen', leeftijd: 32, stad: 'Rotterdam', salaris: 52000, startdatum: '2018-07-22'},
    {naam: 'Piet Bakker', leeftijd: 28, stad: 'Utrecht', salaris: 48000, startdatum: '2019-11-03'},
    {naam: 'Lisa de Jong', leeftijd: 35, stad: 'Den Haag', salaris: 58000, startdatum: '2017-01-10'},
    {naam: 'Tom Smit', leeftijd: 23, stad: 'Eindhoven', salaris: 42000, startdatum: '2021-09-01'}
];

let sorteerRichting = {}; // Houdt bij welke richting elke kolom heeft
let huidigeSortering = { kolom: null, richting: null };

function sorteerTabel(kolomNaam) {
    console.log('Sorteren op kolom:', kolomNaam);
    
    // TODO: Bepaal de sorteerrichting
    let richting = 'asc'; // standaard oplopend
    
    if (huidigeSortering.kolom === kolomNaam) {
        // TODO: Wissel richting om als dezelfde kolom
        richting = /* jouw code hier */;
    }
    
    // TODO: Sorteer de data
    const gesorteerdePersonen = [...personen].sort((a, b) => {
        return vergelijkWaarden(a[kolomNaam], b[kolomNaam], richting);
    });
    
    // Update huidige sortering
    huidigeSortering = { kolom: kolomNaam, richting: richting };
    
    // TODO: Update visuele indicatoren
    updateSortIndicators(kolomNaam, richting);
    
    // TODO: Toon gesorteerde data
    toonTabelData(gesorteerdePersonen);
    
    // TODO: Sla sortering op in localStorage
    /* jouw code hier */;
}

function vergelijkWaarden(a, b, richting) {
    // TODO: Vergelijk verschillende datatypen
    
    // Check of het getallen zijn
    if (typeof a === 'number' && typeof b === 'number') {
        return richting === 'asc' ? /* jouw code hier */ : /* jouw code hier */;
    }
    
    // Check of het datums zijn (string formaat YYYY-MM-DD)
    if (typeof a === 'string' && a.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const dateA = new Date(a);
        const dateB = new Date(b);
        return richting === 'asc' ? /* jouw code hier */ : /* jouw code hier */;
    }
    
    // Anders behandel als tekst
    const textA = a.toString().toLowerCase();
    const textB = b.toString().toLowerCase();
    
    if (richting === 'asc') {
        return /* jouw code hier - gebruik localeCompare */;
    } else {
        return /* jouw code hier */;
    }
}

function updateSortIndicators(kolom, richting) {
    // TODO: Reset alle indicatoren
    document.querySelectorAll('.sort-indicator').forEach(indicator => {
        indicator.textContent = '';
    });
    
    // TODO: Zet indicator voor actieve kolom
    const indicator = document.getElementById(`sort-${kolom}`);
    if (indicator) {
        indicator.textContent = richting === 'asc' ? /* jouw code hier - pijl omhoog */ : /* jouw code hier - pijl omlaag */;
    }
    
    // TODO: Update sort info
    const sortInfo = document.getElementById('sort-info');
    sortInfo.textContent = `Gesorteerd op ${kolom} (${richting === 'asc' ? 'oplopend' : 'aflopend'})`;
}

function toonTabelData(personenlijst) {
    const tableBody = document.getElementById('table-body');
    
    // TODO: Genereer tabel rijen
    const rijenHTML = personenlijst.map(persoon => `
        <tr>
            <td>${/* jouw code hier */}</td>
            <td>${/* jouw code hier */}</td>
            <td>${/* jouw code hier */}</td>
            <td>€${/* jouw code hier */}</td>
            <td>${/* jouw code hier */}</td>
        </tr>
    `).join('');
    
    tableBody.innerHTML = rijenHTML;
}

function resetSortering() {
    // TODO: Reset sortering
    huidigeSortering = { kolom: null, richting: null };
    
    // TODO: Toon originele data
    toonTabelData(personen);
    
    // TODO: Reset indicatoren
    updateSortIndicators('', '');
    
    // TODO: Wis opgeslagen sortering
    /* jouw code hier */;
}

function voegRandomDataToe() {
    const voorbeeldNamen = ['Alex Groot', 'Sara Klein', 'Mike Wit', 'Nina Zwart'];
    const voorbeeldSteden = ['Groningen', 'Tilburg', 'Breda', 'Nijmegen'];
    
    // TODO: Maak random persoon
    const nieuwPersoon = {
        naam: /* jouw code hier - random naam */,
        leeftijd: /* jouw code hier - random tussen 20-60 */,
        stad: /* jouw code hier - random stad */,
        salaris: /* jouw code hier - random tussen 30000-70000 */,
        startdatum: /* jouw code hier - random datum */
    };
    
    // TODO: Voeg toe aan array
    personen.push(nieuwPersoon);
    
    // TODO: Update tabel
    if (huidigeSortering.kolom) {
        sorteerTabel(huidigeSortering.kolom);
    } else {
        toonTabelData(personen);
    }
}

function wisAlleData() {
    if (confirm('Weet je zeker dat je alle data wilt wissen?')) {
        // TODO: Reset naar originele data
        /* jouw code hier */;
        
        resetSortering();
    }
}

function laadCSV(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        // TODO: Parse CSV data
        const csvData = e.target.result;
        /* jouw code hier - parse CSV en voeg toe aan personen array */;
        
        toonTabelData(personen);
    };
    
    reader.readAsText(file);
}

// TODO: Initialisatie
function init() {
    // TODO: Laad opgeslagen sortering
    /* jouw code hier */;
    
    // TODO: Toon data
    toonTabelData(personen);
}

/* jouw code hier - roep init() aan */;