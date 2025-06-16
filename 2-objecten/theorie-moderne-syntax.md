## Moderne JavaScript Syntax

### Waarom moderne JavaScript leren?

In leerjaar 1 ben je begonnen met het leren van JavaScript en in leerjaar 2 ga je daar dieper op in. Dit houdt ook in dat je bepaalde onderdelen van JavaScript **anders** gaat schrijven. 

Sommige onderdelen zijn namelijk op de **oude manier** beschreven, maar jij gaat het nu aanleren zoals het in **bedrijven wordt toegepast**.

**Wat je leert is niet fout** - het is gewoon **oudere syntax**. De moderne manier is:
- Korter en duidelijker
- Standaard in de industrie  
- Makkelijker te lezen en schrijven

## Arrow Functions

### Van normale functions naar arrow functions

Het declareren van een function gaat tegenwoordig net even anders. **Arrow functions** zorgen ervoor dat je op een **verkorte manier** een functie kunt maken, zonder het keyword `function`.

**Oude manier (normale function):**
```jsx
function calculate(a, b) {
  console.log(a * b);
}
```

**Nieuwe manier (arrow function):**
```jsx
const calculate = (a, b) => {
  console.log(a * b);
};
```

### Hoe werken arrow functions?

**Eigenlijk is een functie nu een variabel** (zie `const`), maar doordat deze variabel **parameters heeft** `()` is het een functie.

**Structuur van een arrow function:**
```jsx
const functionName = (parameters) => {
  // code hier
};
```

### Verschillende vormen van arrow functions

#### 1. Functie met meerdere parameters

```jsx
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); // 8
```

#### 2. Functie met één parameter (haakjes mogen weg)

```jsx
// Met haakjes:
const double = (x) => {
  return x * 2;
};

// Zonder haakjes (beide zijn correct):
const double = x => {
  return x * 2;
};
```

#### 3. Functie zonder parameters

```jsx
const sayHello = () => {
  console.log('Hello!');
};

sayHello(); // "Hello!"
```

#### 4. Korte arrow functions (één regel)

Als je functie maar één regel heeft, kun je de accolades en `return` weglaten:

```jsx
// Lange versie:
const multiply = (a, b) => {
  return a * b;
};

// Korte versie:
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20
```

### Vergelijking oude vs nieuwe syntax

| **Oude manier** | **Nieuwe manier (arrow)** |
|-----------------|---------------------------|
| `function add(a, b) { return a + b; }` | `const add = (a, b) => a + b;` |
| `function double(x) { return x * 2; }` | `const double = x => x * 2;` |
| `function greet() { console.log('Hi'); }` | `const greet = () => console.log('Hi');` |

**Vanaf nu schrijf je functies als arrow functions!**

## For/of Loop

### Waarom for/of loop?

Een `for...of` loop wordt vooral gebruikt om **door een array te lopen**, maar met het verschil dat elk item in een array **tijdelijk in een variabel** wordt opgeslagen.

### Hoe werkt for/of?

```jsx
const cars = ['BMW', 'Volvo', 'Mini'];

for (let car of cars) {
  console.log(car);
  // Elk item in de array wordt elke "ronde" 
  // in variabel 'car' opgeslagen
}
```

**Wat gebeurt er per ronde:**
- **Ronde 1:** `car = 'BMW'`
- **Ronde 2:** `car = 'Volvo'`  
- **Ronde 3:** `car = 'Mini'`

### Vergelijking met normale for loop

**Oude manier (for loop met index):**
```jsx
const cars = ['BMW', 'Volvo', 'Mini'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
```

**Nieuwe manier (for...of loop):**
```jsx
const cars = ['BMW', 'Volvo', 'Mini'];

for (let car of cars) {
  console.log(car);
}
```

**Voordelen van for...of:**
- Korter en duidelijker
- Geen index nodig
- Minder kans op fouten
- Beter leesbaar

### For/of met objecten

```jsx
const students = [
  { name: 'Jan', age: 20 },
  { name: 'Piet', age: 22 },
  { name: 'Klaas', age: 19 }
];

for (let student of students) {
  console.log(`${student.name} is ${student.age} jaar oud`);
}
```

## Template Literals (Backticks)

### Van string concatenatie naar template literals

Je bent gewend om een variabel met een string te tonen door het `+` teken.

**Oude manier (string concatenatie):**
```jsx
let firstName = 'Klaas';

let text = 'Mijn naam is: ' + firstName;
console.log(text); // "Mijn naam is: Klaas"
```

**Nieuwe manier (template literals):**
```jsx
let firstName = 'Klaas';

let text = `Mijn naam is: ${firstName}`;
console.log(text); // "Mijn naam is: Klaas"
```

### Wat zijn backticks?

**Backticks** zijn schuine aanhalingstekens die je **links van de 1** kunt vinden op je toetsenbord: **`**

- **Aanhalingstekens** (`'` of `"`) = gebruikt om strings te maken
- **Backticks** (`` ` ``) = gebruikt om zowel variabelen als strings in 1 lijn te maken

### Voordelen van template literals

#### 1. Veel duidelijker dan + tekens

**Oude manier (verwarrend):**
```jsx
let name = 'Jan';
let age = 25;
let city = 'Amsterdam';

let text = 'Hallo, ik ben ' + name + ', ik ben ' + age + ' jaar oud en woon in ' + city + '.';
```

**Nieuwe manier (duidelijk):**
```jsx
let name = 'Jan';
let age = 25;
let city = 'Amsterdam';

let text = `Hallo, ik ben ${name}, ik ben ${age} jaar oud en woon in ${city}.`;
```

#### 2. Meerdere regels mogelijk

**Oude manier:**
```jsx
let html = '<div>' +
           '<h1>' + title + '</h1>' +
           '<p>' + content + '</p>' +
           '</div>';
```

**Nieuwe manier:**
```jsx
let html = `
  <div>
    <h1>${title}</h1>
    <p>${content}</p>
  </div>
`;
```

#### 3. Berekeningen in de string

```jsx
let price = 19.99;
let quantity = 3;

let total = `Totaal: €${price * quantity}`;
console.log(total); // "Totaal: €59.97"
```

#### 4. Functies aanroepen in de string

```jsx
let name = 'jan';

let greeting = `Hallo ${name.toUpperCase()}!`;
console.log(greeting); // "Hallo JAN!"
```

## querySelector

### Van oude selectors naar querySelector

Om een element te selecteren heb je geleerd om verschillende methodes te gebruiken. Dit ga je vervangen door **één methode**: `querySelector`.

### Oude manier

```jsx
// Verschillende methodes voor verschillende selectors:
document.getElementById('myId');           // Voor ID
document.getElementsByTagName('div');     // Voor tag naam  
document.getElementsByClassName('myClass'); // Voor class naam
```

### Nieuwe manier (querySelector)

```jsx
// Één methode voor alle selectors:
document.querySelector('#myId');      // Voor ID (met #)
document.querySelector('div');        // Voor tag naam (zonder symbool)
document.querySelector('.myClass');   // Voor class (met .)
```

### Hoe onthoud je welk symbool?

| **Selector type** | **Symbool** | **Voorbeeld** |
|-------------------|-------------|---------------|
| **ID** | `#` | `querySelector('#myId')` |
| **Class** | `.` | `querySelector('.myClass')` |
| **Tag** | *geen* | `querySelector('div')` |

**Geheugensteuntje:** Dit zijn **dezelfde symbolen als in CSS!**

```css
/* CSS */
#myId { }        /* ID met # */
.myClass { }     /* Class met . */ 
div { }          /* Tag zonder symbool */
```

### Vergelijking oude vs nieuwe selector

| **Oude manier** | **Nieuwe manier** |
|-----------------|-------------------|
| `document.getElementById('menu')` | `document.querySelector('#menu')` |
| `document.getElementsByClassName('button')` | `document.querySelector('.button')` |
| `document.getElementsByTagName('h1')` | `document.querySelector('h1')` |

### querySelector vs querySelectorAll

**querySelector** = geeft het **eerste** element terug
```jsx
let firstButton = document.querySelector('.button'); // Alleen de eerste
```

**querySelectorAll** = geeft **alle** elementen terug (als NodeList)
```jsx
let allButtons = document.querySelectorAll('.button'); // Alle buttons

// Door alle buttons loopen:
for (let button of allButtons) {
  button.addEventListener('click', () => {
    console.log('Button clicked!');
  });
}
```

## Combinatie van alle moderne syntax

Hier is een voorbeeld dat alle moderne JavaScript syntax combineert:

```jsx
// Data
const products = [
  { name: 'Laptop', price: 899 },
  { name: 'Phone', price: 599 },
  { name: 'Tablet', price: 399 }
];

// Arrow function met modern syntax
const displayProducts = () => {
  const container = document.querySelector('#products');
  let html = '';
  
  // For/of loop
  for (let product of products) {
    // Template literals
    html += `
      <div class="product">
        <h3>${product.name}</h3>
        <p>Prijs: €${product.price}</p>
      </div>
    `;
  }
  
  container.innerHTML = html;
};

// Event listener met arrow function
document.querySelector('#loadButton').addEventListener('click', () => {
  displayProducts();
});
```

## Tips voor moderne JavaScript

1. **Gebruik altijd arrow functions** voor nieuwe code
2. **Gebruik template literals** in plaats van string concatenatie
3. **Gebruik for...of** voor arrays in plaats van traditionele for loops
4. **Gebruik querySelector** voor alle DOM selecties
5. **Oefen met kleine voorbeelden** voordat je grote projecten maakt
6. **Let op de backticks** - ze staan links van de 1 op je toetsenbord

**Moderne JavaScript is niet moeilijker - het is juist makkelijker en duidelijker!**