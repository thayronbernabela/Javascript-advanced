## API's (Application Programming Interface)

### Wat zijn API's?

**API** staat voor **A**pplication **P**rogramming **I**nterface. Een API is een manier om informatie uit te wisselen tussen verschillende applicaties, zonder dat je zelf alle code hoeft te schrijven of te begrijpen.

**Simpel gezegd:** Een API is als een **sleutel** die je toegang geeft tot data van iemand anders. Jij hoeft de database niet te maken, maar krijgt er wel toegang toe.

### Waarom zijn API's handig?

**Zonder API's zou je moeten:**
- Zelf een database maken met alle filmgegevens
- Zelf alle weerdata verzamelen  
- Zelf alle nieuwsartikelen schrijven

**Met API's kun je:**
- Data van bestaande databases gebruiken
- Altijd de nieuwste informatie krijgen
- Je focussen op het bouwen van je eigen applicatie

### Praktische voorbeelden van API's

| API Type | Wat het doet | Voorbeeld |
|----------|--------------|-----------|
| **Movie API** | Filmgegevens ophalen | Titels, acteurs, posters |
| **Weather API** | Weersinformatie | Temperatuur, regen, wind |
| **News API** | Nieuws artikelen | Headlines, artikelen |
| **Pokemon API** | Pokemon data | Namen, afbeeldingen, stats |

### Hoe gebruik je API's?

API's gebruiken werkt **precies hetzelfde** als het ophalen van data uit een JSON bestand met `fetch()`.

#### Stap 1: Van JSON bestand naar API

**JSON bestand ophalen (zoals je al kent):**
```jsx
fetch('./cars.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

**API ophalen (nieuwe manier):**
```jsx
fetch('https://dragonball-api.com/api/characters')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

**Het enige verschil:** In plaats van een bestandspad (`./cars.json`) gebruik je een API-URL (`https://...`).

#### Stap 2: De data begrijpen

Wanneer je data uit een API ophaalt, krijg je vaak een object terug dat er zo uitziet:

```jsx
{
  "items": [
    { "name": "Goku", "power": 9000 },
    { "name": "Vegeta", "power": 8500 },
    { "name": "Piccolo", "power": 7000 }
  ],
  "total": 3
}
```

**Belangrijke punten:**
- De **hele response** is een object
- Binnen dat object zit vaak een **array** (hier heet het "items")
- Die array bevat **meerdere objecten** (de karakters)

#### Stap 3: Door de data loopen

Om alle karakters te tonen, moet je door de array `items` loopen:

```jsx
fetch('https://dragonball-api.com/api/characters')
  .then(response => response.json())
  .then(data => {
    // Van 'data' willen we de 'items' array:
    for (let character of data.items) {
      console.log(character.name); // Toont alle namen
    }
  });
```

**Wat gebeurt er stap voor stap:**
1. `fetch()` haalt data op van de API
2. `.then(response => response.json())` zet de data om naar JavaScript
3. `.then(data => {...})` geeft je toegang tot de data
4. `data.items` is de array met alle karakters
5. `for...of` loop gaat door elk karakter heen
6. `character.name` toont de naam van elk karakter

### Volledig werkend voorbeeld

```jsx
// HTML in je body:
// <div id="characters"></div>

fetch('https://dragonball-api.com/api/characters')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('characters');
    
    for (let character of data.items) {
      // Maak een div voor elke karakter
      const characterDiv = document.createElement('div');
      characterDiv.innerHTML = `
        <h3>${character.name}</h3>
        <p>Power Level: ${character.power || 'Onbekend'}</p>
        <img src="${character.image}" alt="${character.name}" width="100">
      `;
      
      // Voeg styling toe
      characterDiv.style.border = '1px solid #ccc';
      characterDiv.style.padding = '10px';
      characterDiv.style.margin = '10px';
      characterDiv.style.borderRadius = '5px';
      
      container.appendChild(characterDiv);
    }
  })
  .catch(error => {
    console.log('Er ging iets mis:', error);
  });
```

### Error Handling: Wat als er iets misgaat?

API's kunnen soms niet beschikbaar zijn. Gebruik altijd `.catch()` voor foutafhandeling:

```jsx
fetch('https://dragonball-api.com/api/characters')
  .then(response => {
    if (!response.ok) {
      throw new Error('API is niet beschikbaar');
    }
    return response.json();
  })
  .then(data => {
    // Hier je normale code
  })
  .catch(error => {
    console.log('Fout:', error);
    // Toon een foutmelding aan de gebruiker
    document.getElementById('characters').innerHTML = 
      '<p>Sorry, data kan niet geladen worden.</p>';
  });
```

### Tips voor het werken met API's

1. **Test eerst in de browser:** Ga naar de API URL in je browser om te zien hoe de data eruit ziet
2. **Gebruik console.log():** Log altijd eerst de hele `data` om te begrijpen wat je krijgt
3. **Lees de documentatie:** Elke API heeft documentatie die uitlegt welke data je krijgt
4. **Gebruik .catch():** Voeg altijd error handling toe
5. **Start simpel:** Begin met het tonen van één stukje data voordat je alles probeert te stylen

### Veel voorkomende problemen

**1. "Cannot read property of undefined"**
```jsx
// Probleem: data.items bestaat niet
console.log(data.items); // undefined

// Oplossing: Controleer eerst of het bestaat
if (data.items) {
  console.log(data.items);
} else {
  console.log('Items array niet gevonden');
}
```

**3. "API Key Required"**
- Sommige API's hebben een sleutel nodig
- Registreer op hun website voor een gratis key
- Voeg de key toe aan je URL volgens hun instructies