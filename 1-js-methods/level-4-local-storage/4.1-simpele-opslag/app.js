// Opdracht 4.1: Simpele Opslag
console.log('🚀 Opdracht 4.1: Simpele Opslag');

function slaOpNaam() {
    console.log('slaOpNaam() aangeroepen');
    
    // TODO: Haal naam uit input veld
    const naam = /* jouw code hier */
    
    // TODO: Check of naam niet leeg is
    if (/* jouw code hier */) {
        alert('Voer eerst een naam in!');
        return;
    }
    
    // TODO: Sla naam op in localStorage
    /* jouw code hier */;
    
    // TODO: Toon welkomstbericht
    toonWelkom();
    
    // Maak input leeg
    document.getElementById('naam-input').value = '';
}

function toonWelkom() {
    // TODO: Haal naam op uit localStorage
    const opgeslagenNaam = /* jouw code hier */
    
    const welkomElement = document.getElementById('welkom-bericht');
    
    // TODO: Toon juiste bericht
    if (/* jouw code hier */) {
        welkomElement.textContent = /* jouw code hier */
    } else {
        welkomElement.textContent = 'Geen naam opgeslagen.';
    }
}

function wisNaam() {
    // TODO: Verwijder naam uit localStorage
    /* jouw code hier */;
    
    toonWelkom();
}

// TODO: Roep toonWelkom() aan bij pagina laden
/* jouw code hier */;