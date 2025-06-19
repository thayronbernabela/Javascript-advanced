## 2. String Methods

### `toLowerCase()` en `toUpperCase()`
Deze methods zetten tekst om naar respectievelijk kleine letters en hoofdletters.

```javascript
const tekst = 'Hallo Wereld';
console.log(tekst.toLowerCase()); // 'hallo wereld'
console.log(tekst.toUpperCase()); // 'HALLO WERELD'
```

**Hoe werken deze methods?**
- Ze maken een **nieuwe** string aan (de originele string blijft onveranderd)
- Alle letters worden omgezet, speciale tekens en cijfers blijven hetzelfde
- Ze zijn heel handig voor vergelijkingen waarbij hoofdletters niet uitmaken:

```javascript
const input = 'APPEL';
const zoekterm = 'appel';

// Zonder toLowerCase zou dit false zijn:
console.log(input === zoekterm); // false

// Met toLowerCase werkt het wel:
console.log(input.toLowerCase() === zoekterm.toLowerCase()); // true
```

### `trim()`
De `trim()` method verwijdert spaties (en andere witruimte) aan het begin en einde van een string.

```javascript
const input = '  hallo  ';
console.log(input.trim()); // 'hallo'
console.log(input.length); // 9 (origineel)
console.log(input.trim().length); // 5 (na trim)
```

**Wat verwijdert trim() precies?**
- Spaties aan het begin en einde
- Tabs (\t)
- Nieuwe regels (\n)
- Andere onzichtbare tekens

**Waarom is trim() handig?**
```javascript
// Gebruiker typt per ongeluk spaties:
const gebruikerInput = '  jan@email.com  ';

// Zonder trim krijg je problemen:
if (gebruikerInput === 'jan@email.com') { // false!
    console.log('Juist email!');
}

// Met trim werkt het wel:
if (gebruikerInput.trim() === 'jan@email.com') { // true!
    console.log('Juist email!');
}
```

### Template Literals (Backticks)
Template literals gebruik je om strings te maken met variabelen erin. Je gebruikt backticks (`) in plaats van aanhalingstekens.

```javascript
const naam = 'Jan';
const leeftijd = 25;
const bericht = `Hallo, ik ben ${naam} en ik ben ${leeftijd} jaar oud.`;
console.log(bericht); // 'Hallo, ik ben Jan en ik ben 25 jaar oud.'
```

**Waarom template literals gebruiken?**

**Oude manier (moeilijk te lezen):**
```javascript
const naam = 'Jan';
const leeftijd = 25;
const bericht = 'Hallo, ik ben ' + naam + ' en ik ben ' + leeftijd + ' jaar oud.';
```

**Nieuwe manier met template literals (veel duidelijker):**
```javascript
const naam = 'Jan';
const leeftijd = 25;
const bericht = `Hallo, ik ben ${naam} en ik ben ${leeftijd} jaar oud.`;
```

**Geavanceerde mogelijkheden:**
```javascript
// Je kunt berekeningen doen binnen ${}:
const prijs = 10;
const aantal = 3;
console.log(`Totaal: €${prijs * aantal}`); // "Totaal: €30"

// Je kunt functies aanroepen:
const naam = 'jan';
console.log(`Hallo ${naam.toUpperCase()}!`); // "Hallo JAN!"

// Meerdere regels:
const html = `
    <div>
        <h1>${naam}</h1>
        <p>Leeftijd: ${leeftijd}</p>
    </div>
`;
```

### `includes()`
De `includes()` method controleert of een string een bepaalde tekst bevat.

```javascript
const tekst = 'Hallo wereld';
console.log(tekst.includes('wereld')); // true
console.log(tekst.includes('aarde')); // false
```

**Hoe werkt includes() voor strings?**
- JavaScript zoekt door de hele string naar de gezochte tekst
- Als de tekst gevonden wordt, geeft het `true` terug
- Als de tekst niet gevonden wordt, geeft het `false` terug
- Het is **hoofdlettergevoelig**

**Praktische voorbeelden:**
```javascript
const email = 'jan@gmail.com';
console.log(email.includes('@')); // true - heeft email format
console.log(email.includes('yahoo')); // false - niet yahoo email

const bericht = 'Welkom bij onze cursus JavaScript!';
console.log(bericht.includes('JavaScript')); // true
console.log(bericht.includes('javascript')); // false - hoofdletter verschil!

// Voor case-insensitive zoeken:
console.log(bericht.toLowerCase().includes('javascript')); // true
```

**Verschil met array includes():**
```javascript
// Array includes (wat je al kende):
const kleuren = ['rood', 'groen', 'blauw'];
console.log(kleuren.includes('rood')); // true

// String includes (nieuw):
const tekst = 'De kleur is rood';
console.log(tekst.includes('rood')); // true
```

### `startsWith()` en `endsWith()`
Deze methods controleren of een string begint of eindigt met bepaalde tekst.

```javascript
const bestandsnaam = 'document.pdf';
console.log(bestandsnaam.startsWith('doc')); // true
console.log(bestandsnaam.endsWith('.pdf')); // true
console.log(bestandsnaam.endsWith('.txt')); // false
```

**Hoe werken startsWith() en endsWith()?**
- `startsWith()` kijkt alleen naar het **begin** van de string
- `endsWith()` kijkt alleen naar het **einde** van de string  
- Beide zijn **hoofdlettergevoelig**
- Ze geven `true` of `false` terug


**Handig voor filtering:**
```javascript
const woorden = ['appel', 'ananas', 'banaan', 'aardbei'];

// Filter woorden die beginnen met 'a':
const aWoorden = woorden.filter(woord => woord.startsWith('a'));
console.log(aWoorden); // ['appel', 'ananas', 'aardbei']

// Filter woorden die eindigen op 'el':
const elWoorden = woorden.filter(woord => woord.endsWith('el'));  
console.log(elWoorden); // ['appel']
```

