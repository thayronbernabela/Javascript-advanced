const person = {
  name: "John Doe",
  age: 30,
  birthdate: "1995-06-15",
  gender: "Male",
  alive: true,
  hobbies: ["Reading", "Gaming", "Cycling", "Cooking"],

  changeName: function(newName) {
    this.name = newName;
  },

  toggleAlive: function() {
    this.alive = !this.alive;
  },

  addHobby: function(newHobby) {
    this.hobbies.push(newHobby);
  }
};

function displayPerson() {
  const output = document.querySelector('.output');
  output.innerHTML = `
    <p>Name: ${person.name}</p>
    <p>Age: ${person.age}</p>
    <p>Birthdate: ${person.birthdate}</p>
    <p>Gender: ${person.gender}</p>
    <p>Alive: ${person.alive}</p>
    <p>Hobbies: ${person.hobbies.join(", ")}</p>
  `;
}

displayPerson();
person.changeName("Jane Smith");
person.toggleAlive();
person.addHobby("Swimming");

displayPerson();

// Stap 1

// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

// Het object moet ook de volgende methods bevatten:

//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!