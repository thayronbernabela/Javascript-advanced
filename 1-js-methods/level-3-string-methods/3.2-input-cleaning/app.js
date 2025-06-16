// Opdracht 3.2: Input Cleaning
console.log('🚀 Opdracht 3.2: Input Cleaning');

function schoonInput(input) {
    // TODO: Verwijder spaties en zet om naar kleine letters
    return /* jouw code hier */;
}

// Test de functie
const testInputs = ['  HALLO  ', '  Test 123  ', '\t  Spaties  \n'];
testInputs.forEach(input => {
    console.log(`"${input}" wordt: "${schoonInput(input)}"`);
});

console.log('Verwacht: "hallo", "test 123", "spaties"');