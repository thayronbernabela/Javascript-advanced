## String Methods

### `toLowerCase()` en `toUpperCase()`

Deze methods zetten tekst om naar respectievelijk kleine letters en hoofdletters.

```jsx
const tekst = 'Hallo Wereld';
console.log(tekst.toLowerCase()); // 'hallo wereld'
console.log(tekst.toUpperCase()); // 'HALLO WERELD'
```

**Hoe werken deze methods?**

* Ze maken een **nieuwe** string aan (de originele string blijft onveranderd)
* Alle letters worden omgezet, speciale tekens en cijfers blijven hetzelfde
* Ze zijn heel handig voor vergelijkingen waarbij hoofdletters niet uitmaken:

```jsx
const input = 'APPEL';
const zoekterm = 'appel';

// Zonder toLowerCase zou dit false zijn:
console.log(input === zoekterm); // false

// Met toLowerCase werkt het wel:
console.log(input.toLowerCase() === zoekterm.toLowerCase()); // true
```

### `trim()`

De `trim()` method verwijdert spaties (en andere witruimte) aan het begin en einde van een string.

```jsx
const input = '  hallo  ';
console.log(input.trim()); // 'hallo'
console.log(input.length); // 9 (origineel)
console.log(input.trim().length); // 5 (na trim)
```

**Wat verwijdert trim() precies?**

* Spaties aan het begin en einde
* Tabs (\t)
* Nieuwe regels (\n)
* Andere onzichtbare tekens

**Waarom is trim() handig?**

```jsx
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

```jsx
const naam = 'Jan';
const leeftijd = 25;
const bericht = `Hallo, ik ben ${naam} en ik ben ${leeftijd} jaar oud.`;
console.log(bericht); // 'Hallo, ik ben Jan en ik ben 25 jaar oud.'
```

**Waarom template literals gebruiken?**

**Oude manier (moeilijk te lezen):**

```jsx
const naam = 'Jan';
const leeftijd = 25;
const bericht = 'Hallo, ik ben ' + naam + ' en ik ben ' + leeftijd + ' jaar oud.';
```

**Nieuwe manier met template literals (veel duidelijker):**

```jsx
const naam = 'Jan';
const leeftijd = 25;
const bericht = `Hallo, ik ben ${naam} en ik ben ${leeftijd} jaar oud.`;
```

**Geavanceerde mogelijkheden:**

```jsx
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