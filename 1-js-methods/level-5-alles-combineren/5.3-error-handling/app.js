// Opdracht 5.3: Error Handling
console.log('🚀 Opdracht 5.3: Error Handling');

function veiligOpslaan(key, data) {
    try {
        // TODO: Probeer data op te slaan
        /* jouw code hier */;
        
        return { success: true, error: null };
    } catch (error) {
        console.error('Fout bij opslaan:', error);
        
        // TODO: Check verschillende error types
        if (error.name === 'QuotaExceededError') {
            return { success: false, error: /* jouw code hier */ };
        }
        return { success: false, error: /* jouw code hier */ };
    }
}

function veiligOphalen(key, standaardWaarde = null) {
    try {
        // TODO: Probeer data op te halen
        const item = /* jouw code hier */;
        
        if (item === null) {
            return { success: true, data: /* jouw code hier */ };
        }
        
        const data = /* jouw code hier - parse JSON */;
        return { success: true, data: data };
        
    } catch (error) {
        console.error('Fout bij ophalen:', error);
        
        // TODO: Verwijder corrupte data
        /* jouw code hier */;
        
        return { success: false, data: standaardWaarde, error: error.message };
    }
}

function toonErrorMelding(bericht) {
    // TODO: Toon error aan gebruiker
    const container = document.getElementById('error-container');
    container.innerHTML = `
        <div class="error">
            ${/* jouw code hier */}
            <button onclick="verwijderError(this)">×</button>
        </div>
    `;
}

// TODO: Test functies
function testErrorHandling() {
    const resultaat = veiligOpslaan('test', {data: 'test'});
    if (!resultaat.success) {
        toonErrorMelding(resultaat.error);
    }
}