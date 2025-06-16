## JavaScript Objects

### Waarom zijn objects zo belangrijk?

> *"In JavaScript, objects are king. If you understand objects, you understand JavaScript."*

In JavaScript is bijna alles een object. Als je dus goed begrijpt wat een object is en hoe je het maakt en gebruikt, dan begrijp je JavaScript.

### Wat is een object?

**In het echte leven is een auto een object.**

Een auto heeft een aantal **eigenschappen (properties)** zoals:
- Kleur
- Gewicht  
- Model
- Merk

Maar het heeft ook een aantal **functionaliteiten (methods)** zoals:
- Starten
- Rijden
- Remmen
- Stoppen

**Belangrijke punten:**
- Elke auto heeft **dezelfde eigenschappen**, alleen de **waarde** daarvan is anders
- Elke auto heeft **dezelfde functionaliteiten**, maar **wanneer** je wat gebruikt verschilt per persoon

**Voorbeeld:**
```
Auto 1: Fiat 500, rood, 850kg     → start(), drive(), brake(), stop()
Auto 2: BMW X7, zwart, 1350kg     → start(), drive(), brake(), stop()
Auto 3: Volvo S60, grijs, 1200kg  → start(), drive(), brake(), stop()
```

**Een auto is dus een object met:**
- **Properties** (eigenschappen) - informatie over het object
- **Methods** (functionaliteiten) - wat het object kan doen

## Hoe maak je een object?

Een object declareer je met accolades `{}`:

```jsx
const car = {};
```

Laten we het auto voorbeeld uitwerken in code:

```jsx
const car = {
  // Properties (eigenschappen)
  name: 'Fiat',
  model: '500',
  weight: '850kg',
  color: 'white',
  
  // Methods (functionaliteiten)
  start: function () {
    return 'I start the car';
  },
  drive: function () {
    return "I'm driving";
  },
  brake: function () {
    return 'I brake';
  },
  stop: function () {
    return 'I stop';
  },
};
```

### Waarom objects gebruiken?

**Zonder objects (onoverzichtelijk):**
```jsx
let car_name = "Fiat";
let model = "500";
let weight = "850kg";
let color = "white";

function drive() {
  return "I'm driving";
}
```

**Met objects (overzichtelijk):**
```jsx
const car = {
  name: "Fiat",
  model: "500",
  weight: "850kg",
  color: "white",
  drive: function() {
    return "I'm driving";
  }
};
```

**Voordelen van objects:**
- Alles wat bij elkaar hoort staat bij elkaar
- Code is overzichtelijker en logischer georganiseerd
- Je kunt hetzelfde object hergebruiken voor verschillende auto's
- Minder kans op fouten

## Tonen van een object in je console

### Properties ophalen

Om alleen de property 'name' in je console te tonen:

```jsx
console.log(car.name); // "Fiat"
```

**Verschillende manieren om properties op te halen:**
```jsx
console.log(car.name);    // "Fiat"
console.log(car.model);   // "500"
console.log(car.weight);  // "850kg"
console.log(car.color);   // "white"
```

### Methods uitvoeren

Voor een method gebruik je **altijd** de haakjes `()`:

```jsx
console.log(car.drive()); // "I'm driving"
console.log(car.start()); // "I start the car"
```

**Let op het verschil:**
```jsx
console.log(car.drive);   // [Function: drive] (de functie zelf)
console.log(car.drive()); // "I'm driving" (het resultaat van de functie)
```

## Tonen van een object op je scherm

### Stap 1: HTML voorbereiden

```html
<div class="output"></div>
```

### Stap 2: Element ophalen

```jsx
let output = document.querySelector('.output');
```

### Stap 3: Data tonen met innerHTML

```jsx
output.innerHTML = `
  <h1>Naam van de auto is: ${car.name}</h1>
  <p>Model: ${car.model}</p>
  <p>Kleur: ${car.color}</p>
  <p>${car.drive()}</p>
`;
// Let op: dit zijn backticks (`) geen aanhalingstekens!
```

**Waarom innerHTML?**
- `innerText` voegt alleen tekst toe
- `innerHTML` voegt HTML toe (zoals `<h1>`, `<p>` tags)
- Template literals (backticks) maken het makkelijk om HTML en variabelen te combineren

## Arrays in een object

Een object kan ook arrays bevatten:

```jsx
const car = {
  // Properties
  name: 'Fiat',
  model: '500',
  weight: '850kg',
  color: 'white',
  
  // Array property
  repairs: ['koppeling', 'banden', 'distributieriem'],
  
  // Methods
  start: function () {
    return 'I start the car';
  },
  drive: function () {
    return "I'm driving";
  }
};
```

### Array elementen ophalen

```jsx
console.log(car.repairs[0]); // "koppeling"
console.log(car.repairs[1]); // "banden" 
console.log(car.repairs[2]); // "distributieriem"

// Laatste reparatie:
console.log(car.repairs[car.repairs.length - 1]); // "distributieriem"
```

### Door array in object loopen

```jsx
for (let repair of car.repairs) {
  console.log(repair);
}
// Output:
// koppeling
// banden  
// distributieriem
```

## Wijzigen van properties

### Direct wijzigen

```jsx
car.name = 'Seat';
console.log(car.name); // "Seat"
```

### Nieuwe properties toevoegen

```jsx
car.year = 2020;
console.log(car.year); // 2020
```

### Properties verwijderen

```jsx
delete car.color;
console.log(car.color); // undefined
```

## Wijzigen van properties met methods

Voor het wijzigen van properties binnen een method gebruik je het keyword **`this`**.

**`this`** verwijst naar properties in **dit** object.

### Simpel voorbeeld

```jsx
const car = {
  name: 'Fiat',
  
  rename: function() {
    // 'this.name' verwijst naar de 'name' property van dit object
    this.name = 'Lambo';
    return this.name;
  }
};

console.log(car.rename()); // "Lambo"
console.log(car.name);     // "Lambo" (is permanent veranderd)
```

### Method met parameters

```jsx
const car = {
  name: 'Fiat',
  
  rename: function(newName) {
    this.name = newName;
    return this.name;
  }
};

console.log(car.rename('Ferrari')); // "Ferrari"
console.log(car.name);              // "Ferrari"
```

### Complexer voorbeeld

```jsx
const car = {
  name: 'Fiat',
  speed: 0,
  
  accelerate: function(amount) {
    this.speed += amount;
    return `${this.name} rijdt nu ${this.speed} km/h`;
  },
  
  brake: function(amount) {
    this.speed -= amount;
    if (this.speed < 0) this.speed = 0;
    return `${this.name} rijdt nu ${this.speed} km/h`;
  }
};

console.log(car.accelerate(50)); // "Fiat rijdt nu 50 km/h"
console.log(car.accelerate(30)); // "Fiat rijdt nu 80 km/h"
console.log(car.brake(20));      // "Fiat rijdt nu 60 km/h"
```

## Bestaande JavaScript objects

Door middel van de `.` (punt) heb je toegang tot objecten en kun je properties en methods selecteren.

Dit zijn voorbeelden van bestaande JavaScript objects die je al gebruikt:

### `console.log()`

```jsx
console.log('Hello');
```

- `console` = het **object**
- `log()` = de **method** van het console object

### `document.querySelector()`

```jsx
document.querySelector('.myClass');
```

- `document` = het **object** 
- `querySelector()` = de **method** van het document object

### `Math.random()`

```jsx
Math.random();
```

- `Math` = het **object**
- `random()` = de **method** van het Math object dat een random getal genereert

### Andere voorbeelden

```jsx
// String objects
let text = "Hello";
text.toUpperCase(); // text = object, toUpperCase() = method

// Array objects  
let numbers = [1, 2, 3];
numbers.push(4); // numbers = object, push() = method

// Date objects
let now = new Date();
now.getFullYear(); // now = object, getFullYear() = method
```

## Veelgemaakte fouten bij objects

### 1. Vergeten haakjes bij methods

```jsx
// ❌ Fout:
console.log(car.drive); // Toont de functie, voert hem niet uit

// ✅ Goed:  
console.log(car.drive()); // Voert de functie uit
```

### 2. Verkeerde this gebruik

```jsx
// ❌ Fout:
const car = {
  name: 'Fiat',
  rename: function(newName) {
    name = newName; // Verandert niet de property van het object
  }
};

// ✅ Goed:
const car = {
  name: 'Fiat', 
  rename: function(newName) {
    this.name = newName; // Verandert wel de property van het object
  }
};
```

### 3. Komma's vergeten

```jsx
// ❌ Fout:
const car = {
  name: 'Fiat'     // Komma vergeten
  model: '500'
};

// ✅ Goed:
const car = {
  name: 'Fiat',    // Komma nodig
  model: '500'     // Geen komma na laatste property
};
```

## Tips voor werken met objects

1. **Gebruik logische namen** voor properties en methods
2. **Groepeer gerelateerde data** in één object
3. **Gebruik `this`** om naar properties binnen het object te verwijzen
4. **Test eerst met `console.log()`** om te zien wat je krijgt
5. **Vergeet niet de haakjes** bij methods `()`
6. **Start simpel** met een paar properties voordat je complexe objects maakt

Objects zijn de basis van JavaScript - als je deze begrijpt, begrijp je een groot deel van de taal!