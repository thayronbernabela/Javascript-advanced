## Local Storage

### Wat is Local Storage?

Local Storage is een manier om data op te slaan in de browser van de gebruiker. De data blijft bewaard, zelfs als de gebruiker de browser sluit en later terugkomt.

**Belangrijke eigenschappen:**

- Data blijft bewaard tot de gebruiker het expliciet verwijdert
- Elke website heeft zijn eigen Local Storage (website A kan niet bij data van website B)
- Er is een limiet (meestal 5-10MB per website)
- Werkt alleen met strings

### `localStorage.setItem()` en `localStorage.getItem()`

```jsx
// Data opslaan
localStorage.setItem('gebruikersnaam', 'jan123');

// Data ophalen
const gebruiker = localStorage.getItem('gebruikersnaam');
console.log(gebruiker); // 'jan123'

// Als data niet bestaat, krijg je null:
const nietBestaand = localStorage.getItem('bestaat-niet');
console.log(nietBestaand); // null
```

**Hoe werkt dit?**

- `setItem(key, value)`: Slaat data op met een bepaalde "sleutel" (key)
- `getItem(key)`: Haalt data op met die sleutel
- Als je `setItem()` gebruikt met een bestaande sleutel, wordt de oude waarde overschreven

**Praktisch voorbeeld:**

```jsx
// Gebruiker stelt een thema in:
localStorage.setItem('thema', 'donker');

// Later, als de pagina opnieuw laadt:
const opgeslagenThema = localStorage.getItem('thema');
if (opgeslagenThema === 'donker') {
    document.body.classList.add('dark-mode');
}
```

### `JSON.stringify()` en `JSON.parse()`

Local Storage kan alleen strings opslaan. Voor complexere data (zoals objecten en arrays) gebruik je JSON.

```jsx
// Object opslaan - FOUT (werkt niet goed):
const gebruiker = {naam: 'Jan', leeftijd: 25};
localStorage.setItem('gebruikerData', gebruiker); // wordt "[object Object]"

// Object opslaan - GOED:
localStorage.setItem('gebruikerData', JSON.stringify(gebruiker));

// Object ophalen:
const opgehaaldGebruiker = JSON.parse(localStorage.getItem('gebruikerData'));
console.log(opgehaaldGebruiker); // {naam: 'Jan', leeftijd: 25}
```

**Wat doen JSON.stringify() en JSON.parse()?**

**JSON.stringify()** = JavaScript object → string

```jsx
const object = {naam: 'Jan', leeftijd: 25};
const string = JSON.stringify(object);
console.log(string); // '{"naam":"Jan","leeftijd":25}'
console.log(typeof string); // 'string'
```

**JSON.parse()** = string → JavaScript object

```jsx
const string = '{"naam":"Jan","leeftijd":25}';
const object = JSON.parse(string);
console.log(object); // {naam: 'Jan', leeftijd: 25}
console.log(typeof object); // 'object'
```

**Praktisch voorbeeld met array:**

```jsx
// Favorieten lijst opslaan:
const favorieten = ['appel', 'banaan', 'druif'];
localStorage.setItem('mijnFavorieten', JSON.stringify(favorieten));

// Favorieten lijst ophalen:
const opgehaaldeFavorieten = JSON.parse(localStorage.getItem('mijnFavorieten'));
console.log(opgehaaldeFavorieten); // ['appel', 'banaan', 'druif']

// Nu kun je er weer mee werken als normale array:
opgehaaldeFavorieten.push('peer');
console.log(opgehaaldeFavorieten); // ['appel', 'banaan', 'druif', 'peer']
```

### Error Handling met try/catch

Soms kan er iets misgaan bij het ophalen van data. Dan gebruik je try/catch.

```jsx
try {
    const data = JSON.parse(localStorage.getItem('complexData'));
    console.log(data);
} catch (error) {
    console.log('Fout bij het ophalen van data:', error);
    // Fallback: gebruik standaard waarden
    const data = [];
}
```

**Wanneer gaan dingen mis?**

1. **Corrupte data in localStorage:**

```jsx
// Iemand heeft handmatig slechte data in localStorage gezet:
localStorage.setItem('slechteData', 'dit is geen JSON{[}');

// Dit zal een error geven:
try {
    const data = JSON.parse(localStorage.getItem('slechteData'));
} catch (error) {
    console.log('JSON is kapot!', error);
    // Gebruik standaard waarden:
    const data = {naam: 'Onbekend', leeftijd: 0};
}
```

2. **localStorage is vol:**

```jsx
try {
    localStorage.setItem('grote-data', 'heel veel data...');
} catch (error) {
    console.log('Geen ruimte meer!', error);
    // Ruim oude data op of waarschuw gebruiker
}
```

3. **Veilige manier om data op te halen:**

```jsx
function veiligOphalen(key, standaardWaarde) {
    try {
        const data = localStorage.getItem(key);
        if (data === null) {
            return standaardWaarde; // Nog nooit opgeslagen
        }
        return JSON.parse(data);
    } catch (error) {
        console.log('Fout bij ophalen:', error);
        return standaardWaarde; // Geef standaard waarde terug
    }
}

// Gebruik:
const mijnInstellingen = veiligOphalen('instellingen', {thema: 'licht', taal: 'nl'});
```