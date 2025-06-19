// Opdracht 4.3: Profiel Opslaan
console.log('🚀 Opdracht 4.3: Profiel Opslaan');

function slaProfielOp() {
    // TODO: Haal alle waarden uit formulier
    const naam = /* jouw code hier */;
    const email = /* jouw code hier */;
    const leeftijd = /* jouw code hier */;
    const kleur = /* jouw code hier */;
    
    // TODO: Valideer verplichte velden
    if (/* jouw code hier - check naam en email */) {
        alert('Naam en email zijn verplicht!');
        return;
    }
    
    // TODO: Sla elk veld apart op in localStorage
    localStorage.setItem('profiel-naam', /* jouw code hier */);
    localStorage.setItem('profiel-email', /* jouw code hier */);
    localStorage.setItem('profiel-leeftijd', /* jouw code hier */);
    localStorage.setItem('profiel-kleur', /* jouw code hier */);
    
    // TODO: Sla ook opslag datum op
    localStorage.setItem('profiel-opgeslagen', /* jouw code hier - gebruik new Date() */);
    
    alert('Profiel opgeslagen!');
    toonProfiel();
}

function laadProfiel() {
    // TODO: Haal alle waarden op uit localStorage
    const naam = /* jouw code hier */;
    const email = /* jouw code hier */;
    const leeftijd = /* jouw code hier */;
    const kleur = /* jouw code hier */;
    
    // TODO: Vul formulier als data bestaat
    if (naam) {
        document.getElementById('naam').value = /* jouw code hier */;
    }
    
    if (email) {
        document.getElementById('email').value = /* jouw code hier */;
    }
    
    if (leeftijd) {
        document.getElementById('leeftijd').value = /* jouw code hier */;
    }
    
    if (kleur) {
        document.getElementById('kleur').value = /* jouw code hier */;
    }
}

function toonProfiel() {
    const container = document.getElementById('profiel-weergave');
    
    // TODO: Haal alle opgeslagen waarden op
    const naam = /* jouw code hier */;
    const email = /* jouw code hier */;
    const leeftijd = /* jouw code hier */;
    const kleur = /* jouw code hier */;
    const opgeslagenOp = /* jouw code hier */;
    
    // TODO: Check of er profiel data is
    if (/* jouw code hier - check of naam bestaat */) {
        // TODO: Toon profiel gegevens
        container.innerHTML = `
            <h3>Opgeslagen Profiel:</h3>
            <p><strong>Naam:</strong> ${/* jouw code hier */}</p>
            <p><strong>Email:</strong> ${/* jouw code hier */}</p>
            <p><strong>Leeftijd:</strong> ${leeftijd || 'Niet ingevuld'}</p>
            <p><strong>Favoriete kleur:</strong> ${kleur || 'Niet gekozen'}</p>
            <p><strong>Opgeslagen op:</strong> ${opgeslagenOp || 'Onbekend'}</p>
        `;
    } else {
        container.innerHTML = '<p>Nog geen profiel opgeslagen.</p>';
    }
}

function wisProfiel() {
    if (confirm('Weet je zeker dat je je profiel wilt wissen?')) {
        // TODO: Verwijder alle profiel items uit localStorage
        localStorage.removeItem(/* jouw code hier - 'profiel-naam' */);
        localStorage.removeItem(/* jouw code hier - 'profiel-email' */);
        localStorage.removeItem(/* jouw code hier - 'profiel-leeftijd' */);
        localStorage.removeItem(/* jouw code hier - 'profiel-kleur' */);
        localStorage.removeItem(/* jouw code hier - 'profiel-opgeslagen' */);
        
        // TODO: Maak formulier leeg
        document.getElementById('naam').value = '';
        document.getElementById('email').value = '';
        document.getElementById('leeftijd').value = '';
        document.getElementById('kleur').value = '';
        
        toonProfiel();
        alert('Profiel gewist!');
    }
}

// TODO: Initialisatie
function init() {
    /* jouw code hier - laad profiel en toon het */;
}

/* jouw code hier - roep init() aan bij DOMContentLoaded */;