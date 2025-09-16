const marvels = ['Iron Man', 'The Avengers', 'Black Panther', 'Spider-Man: No Way Home'];

const addMarvel = () => {
    marvels.push("Black Widow");
};

addMarvel();

for (let film of marvels) {
    console.log(film)
}
// Je gaat even oefenen met het gebruiken van een arrow function en de for/of loop. 

// Maak een array genaamd 'marvels' en plaats hier 4 Marvel films in.

// Maak een arrow function genaamd 'addMarvel'
// In je functie voeg je een nieuwe Marvel film toe zonder dit zelf in de bovenstaande array toe te voegen
// Roep de functie op (het klopt dat je nog niets ziet)
// Loop met een for/of loop door de array en toon alle items in de array in je console
