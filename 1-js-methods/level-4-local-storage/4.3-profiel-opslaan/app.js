// Opdracht 4.3: Profiel Opslaan
console.log('🚀 Opdracht 4.3: Profiel Opslaan');

function slaProfielOp() {
    // TODO: Maak profiel object
    const profiel = {
        naam: /* jouw code hier */,
        email: /* jouw code hier */,
        kleur: /* jouw code hier */,
        opgeslagenOp: new Date().toISOString()
    };
    
    // TODO: Valideer verplichte velden
    if (/* jouw code hier */) {
        alert('Naam en email zijn verplicht!');
        return;
    }
    
    // TODO: Sla profiel op in localStorage
    /* jouw code hier */;
    
    toonProfiel();
}

function laadProfiel() {
    // TODO: Haal profiel op uit localStorage
    const opgeslagenProfiel = /* jouw code hier */;
    
    if (opgeslagenProfiel) {
        // TODO: Parse JSON en vul formulier
        const profiel = /* jouw code hier */;
        
        document.getElementById('naam').value = /* jouw code hier */;
        document.getElementById('email').value = /* jouw code hier */;
        document.getElementById('kleur').value = /* jouw code hier */;
        
        return profiel;
    }
    return null;
}

function toonProfiel() {
    const profiel = laadProfiel();
    const container = document.getElementById('profiel-weergave');
    
    if (profiel) {
        // TODO: Toon profiel gegevens
        container.innerHTML = `
            <h3>Opgeslagen Profiel:</h3>
            <p><strong>Naam:</strong> ${/* jouw code hier */}</p>
            <p><strong>Email:</strong> ${/* jouw code hier */}</p>
            <p><strong>Kleur:</strong> ${/* jouw code hier */}</p>
        `;
    } else {
        container.innerHTML = '<p>Nog geen profiel opgeslagen.</p>';
    }
}

// TODO: Initialisatie
/* jouw code hier */;