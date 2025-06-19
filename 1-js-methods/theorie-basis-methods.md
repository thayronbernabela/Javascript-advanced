# JavaScript Array Methods, String Manipulatie en Local Storage

## 1. Array Methods

### Wat zijn Array Methods?

Array methods zijn ingebouwde functies die je kunt gebruiken om arrays te bewerken. Ze maken het veel gemakkelijker om data te filteren, sorteren, transformeren en doorzoeken zonder dat je zelf loops hoeft te schrijven.

### De belangrijkste Array Methods

 alleen de elementen die voldoen aan een bepaalde voorwaarde.

```javascript
const getallen = [1, 2, 3, 4, 5, 6];
const evenGetallen = getallen.filter(getal => getal % 2 === 0);
console.log(evenGetallen); // [2, 4, 6]
```

**Wat betekent `%` (modulo)?**
Het `%` teken is de "modulo" operator. Het geeft de **rest** terug van een deling.

```javascript
5 % 2 = 1    // 5 gedeeld door 2 = 2 rest 1
6 % 2 = 0    // 6 gedeeld door 2 = 3 rest 0  
7 % 2 = 1    // 7 gedeeld door 2 = 3 rest 1
8 % 2 = 0    // 8 gedeeld door 2 = 4 rest 0
```

**Waarom is dit handig?**
- Even getallen gedeeld door 2 hebben altijd rest 0
- Oneven getallen gedeeld door 2 hebben altijd rest 1
- Dus: `getal % 2 === 0` betekent "is dit getal even?"

**Hoe werkt filter()?**
- JavaScript gaat door elk element in de array (1, 2, 3, 4, 5, 6)
- Voor elk element voert het de functie uit: `getal => getal % 2 === 0`
- Als de functie `true` teruggeeft, wordt het element toegevoegd aan de nieuwe array
- Als de functie `false` teruggeeft, wordt het element overgeslagen

**Stap voor stap:**
- Element 1: 1 % 2 === 0? → false → niet toegevoegd
- Element 2: 2 % 2 === 0? → true → toegevoegd aan resultaat
- Element 3: 3 % 2 === 0? → false → niet toegevoegd
- Element 4: 4 % 2 === 0? → true → toegevoegd aan resultaat
- enz.

#### `map()`
De `map()` method maakt een nieuwe array door elk element te transformeren.

```javascript
const getallen = [1, 2, 3, 4];
const verdubbeld = getallen.map(getal => getal * 2);
console.log(verdubbeld); // [2, 4, 6, 8]
```

**Uitleg waarom er twee keer 'getal' staat:**
- Het eerste `getal` (voor de =>) is de **parameter naam** die jij zelf kiest. Dit kan elke naam zijn.
- Het tweede `getal` (na de =>) is het **gebruik** van die parameter in de functie.

**Hoe werkt map()?**
- JavaScript gaat door elk element in de originele array
- Voor elk element voert het de transformatie functie uit
- Het resultaat van die functie wordt in de nieuwe array gezet
- De nieuwe array heeft altijd dezelfde lengte als de originele

**Stap voor stap:**
- Element 1: 1 * 2 = 2 → nieuwe array wordt [2]
- Element 2: 2 * 2 = 4 → nieuwe array wordt [2, 4]
- Element 3: 3 * 2 = 6 → nieuwe array wordt [2, 4, 6]
- Element 4: 4 * 2 = 8 → nieuwe array wordt [2, 4, 6, 8]

Je kunt het ook zo schrijven voor meer duidelijkheid:
```javascript
const getallen = [1, 2, 3, 4];
const verdubbeld = getallen.map(function(hetHuidigeGetal) {
    return hetHuidigeGetal * 2;
});
// Of met een andere parameternaam:
const verdubbeld2 = getallen.map(x => x * 2); // 'x' is gewoon een andere naam
```

**Map() met strings - hoofdletters maken:**
```javascript
const namen = ['jan', 'piet', 'klaas'];
const hoofdletterNamen = namen.map(naam => naam.charAt(0).toUpperCase() + naam.slice(1));
console.log(hoofdletterNamen); // ['Jan', 'Piet', 'Klaas']
```

**Uitleg string methods voor hoofdletters:**
- `naam.charAt(0)` - Pakt het eerste character (index 0)
- `.toUpperCase()` - Maakt het character hoofdletter  
- `naam.slice(1)` - Pakt alles vanaf index 1 (de rest van de naam)
- `+` - Plakt de hoofdletter en rest samen

**Stap voor stap met 'jan':**
- `naam.charAt(0)` = 'j'
- `'j'.toUpperCase()` = 'J'  
- `naam.slice(1)` = 'an'
- `'J' + 'an'` = 'Jan'

#### `sort()`
De `sort()` method sorteert de elementen van een array.

```javascript
const namen = ['Zoe', 'Anna', 'Bob'];
namen.sort(); // Alfabetisch sorteren
console.log(namen); // ['Anna', 'Bob', 'Zoe']

// Voor getallen heb je een vergelijkingsfunctie nodig:
const scores = [100, 25, 80, 60];
scores.sort((a, b) => a - b); // Van laag naar hoog
console.log(scores); // [25, 60, 80, 100]
```

**Uitleg van `a` en `b` bij sort():**

JavaScript's `sort()` functie vergelijkt altijd **twee elementen tegelijk** om te bepalen welke eerst moet komen.

### De basis regel:
```javascript
array.sort((a, b) => a - b); // Van klein naar groot
array.sort((a, b) => b - a); // Van groot naar klein
```

### Hoe onthoud je dit?

**Voor van klein naar groot: `a - b`**
- Denk aan het alfabet: A komt voor B
- Dus `a - b` = van klein naar groot

**Voor van groot naar klein: `b - a`**  
- B komt na A in het alfabet
- Dus `b - a` = van groot naar klein

### Praktisch voorbeeld met cursus ratings:

```javascript
const cursussen = [
    { titel: "JavaScript Basics", rating: 4.2 },
    { titel: "HTML voor beginners", rating: 4.8 },
    { titel: "CSS Masterclass", rating: 3.9 },
    { titel: "React Fundamentals", rating: 4.6 }
];

// Van laag naar hoog rating:
cursussen.sort((a, b) => a.rating - b.rating);

// Van hoog naar laag rating (beste eerst):
cursussen.sort((a, b) => b.rating - a.rating);
```

**Vergelijking stap voor stap:**
- `a` = JavaScript Basics (rating: 4.2)
- `b` = HTML voor beginners (rating: 4.8)
- Berekening: `a.rating - b.rating` = `4.2 - 4.8` = `-0.6`
- Negatief getal = `a` komt voor `b`
- Dus: JavaScript Basics (4.2) komt voor HTML (4.8) ✓

### Sorteren op tekst met getallen (duration):

Als de duration tekst is zoals "12 uur", moet je eerst het getal eruit halen:

```javascript
const cursussen = [
    { titel: "JavaScript Basics", duration: "8 uur" },
    { titel: "HTML voor beginners", duration: "12 uur" },
    { titel: "CSS Masterclass", duration: "3 uur" },
    { titel: "React Fundamentals", duration: "15 uur" }
];

// Van kort naar lang:
cursussen.sort((a, b) => {
    const urenA = parseInt(a.duration); // "8 uur" wordt 8
    const urenB = parseInt(b.duration); // "12 uur" wordt 12
    return urenA - urenB;
});
```

**Wat doet `parseInt()`?**
```javascript
parseInt("8 uur");    // wordt 8
parseInt("12 uur");   // wordt 12
parseInt("3 uur");    // wordt 3
```

#### `find()`
De `find()` method geeft het eerste element terug dat voldoet aan de voorwaarde.

```javascript
const personen = [
    {naam: 'Jan', leeftijd: 25},
    {naam: 'Piet', leeftijd: 30}
];
const gevonden = personen.find(persoon => persoon.leeftijd > 25);
console.log(gevonden); // {naam: 'Piet', leeftijd: 30}
```

**Hoe werkt find()?**
- JavaScript gaat door elk element in de array
- Voor elk element test het de voorwaarde
- Bij het **eerste** element waar de voorwaarde `true` is, stopt het en geeft dat element terug
- Als geen enkel element voldoet, geeft het `undefined` terug

**Stap voor stap:**
- Element 1: {naam: 'Jan', leeftijd: 25} → 25 > 25? → false → doorgaan
- Element 2: {naam: 'Piet', leeftijd: 30} → 30 > 25? → true → dit element teruggeven en stoppen

**Find() met getallen vergelijking:**
```javascript
const getallen = [12, 45, 67, 23, 89, 34];
const eersteGroteGetal = getallen.find(getal => getal > 50);
console.log(eersteGroteGetal); // 67

// Ook mogelijk: kleiner dan, gelijk aan, etc.
const eersteKleineGetal = getallen.find(getal => getal < 20);
console.log(eersteKleineGetal); // 12
```

**Vergelijkingsoperatoren:**
- `>` groter dan
- `<` kleiner dan  
- `>=` groter dan of gelijk aan
- `<=` kleiner dan of gelijk aan
- `===` gelijk aan

#### `findIndex()`
De `findIndex()` method geeft de index (positie) terug van het eerste element dat voldoet aan de voorwaarde.

```javascript
const kleuren = ['rood', 'groen', 'blauw'];
const index = kleuren.findIndex(kleur => kleur === 'groen');
console.log(index); // 1
```

**Hoe werkt findIndex()?**
- Werkt hetzelfde als `find()`, maar geeft de **index** terug in plaats van het element zelf
- Als geen element voldoet, geeft het -1 terug

**Stap voor stap:**
- Index 0: 'rood' === 'groen'? → false → doorgaan
- Index 1: 'groen' === 'groen'? → true → index 1 teruggeven en stoppen

**FindIndex() met getallen vergelijking:**
```javascript
const getallen = [12, 45, 67, 23, 89, 34];
const indexGroteGetal = getallen.findIndex(getal => getal > 50);
console.log(indexGroteGetal); // 2 (want 67 staat op index 2)

// Als niets gevonden wordt:
const indexZeerGroot = getallen.findIndex(getal => getal > 1000);
console.log(indexZeerGroot); // -1 (niet gevonden)
```

#### `includes()`
De `includes()` method controleert of een array een bepaald element bevat.

```javascript
const fruits = ['appel', 'banaan', 'sinaasappel'];
console.log(fruits.includes('banaan')); // true
console.log(fruits.includes('druif')); // false
```

**Hoe werkt includes()?**
- JavaScript gaat door alle elementen in de array
- Het vergelijkt elk element met de waarde die je zoekt (met `===`)
- Als het een match vindt, geeft het `true` terug
- Als het door alle elementen is gegaan zonder match, geeft het `false` terug

**Let op:** `includes()` is hoofdlettergevoelig!
```javascript
const namen = ['Jan', 'Piet'];
console.log(namen.includes('jan')); // false (kleine 'j')
console.log(namen.includes('Jan')); // true (hoofdletter 'J')
```
