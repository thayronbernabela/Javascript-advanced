const students = [
  {
    id: 1,
    naam: 'Emma van Dijk',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.5,
    actief: true,
  },
  {
    id: 2,
    naam: 'Liam de Boer',
    leeftijd: 19,
    studie: 'Backend Development',
    cijfer: 7.2,
    actief: true,
  },
  {
    id: 3,
    naam: 'Sophie Jansen',
    leeftijd: 21,
    studie: 'Frontend Development',
    cijfer: 9.1,
    actief: false,
  },
  {
    id: 4,
    naam: 'Daan Peters',
    leeftijd: 22,
    studie: 'Fullstack Development',
    cijfer: 6.8,
    actief: true,
  },
  {
    id: 5,
    naam: 'Evi de Wit',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.9,
    actief: true,
  },
];

//
//   // 📝 WAT MOET JE DOEN:
//   // 1. Loop door de hele 'students' array
//   // 2. Maak voor elke student een HTML article element
//   // 3. Voeg de HTML toe aan het element met id 'studenten-lijst'
//   //
//   // 💡 TIP: Gebruik array.map() om HTML te maken en innerHTML om toe te voegen
//   //
//   // 🎯 VOORBEELD HTML per student:
//   // <article class="actief"> (of "inactief")
//   //     <strong>Emma van Dijk</strong> (20 jaar)<br>
//   //     📚 Frontend Development<br>
//   //     📊 Cijfer: 8.5 | Status: ✅ Actief
//   // </article>
// }
  // 📝 WAT MOET JE DOEN:
  // 1. Filter de students array op studenten waar actief === true
  // 2. Toon alleen die gefilterde studenten (gebruik dezelfde HTML als hierboven)
  //
  // 💡 TIP: Gebruik array.filter() en dan dezelfde logica als toonAlleStudenten()
  // 📝 WAT MOET JE DOEN:
  // 1. Filter de students array op studenten met cijfer >= 8.0
  // 2. Toon alleen die gefilterde studenten
  //
  // 💡 TIP: Gebruik array.filter() met een conditie op het cijfer

// 🚀 START DE APPLICATIE - roep deze aan als de pagina laadt

const studentenLijst = document.getElementById('studenten-lijst');

function toonAlleStudenten() {
  studentenLijst.innerHTML = students
    .map(student => {
      return `
        <article class="${student.actief ? 'actief' : 'inactief'}">
          <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
          ${student.studie}<br>
          Cijfer: ${student.cijfer} | Status: ${student.actief ? 'Actief' : 'Inactief'}
        </article>
      `;
    })
    .join('');
}

function toonActieveStudenten() {
  const actieveStudenten = students.filter(student => student.actief);
  studentenLijst.innerHTML = actieveStudenten
    .map(student => {
      return `
        <article class="actief">
          <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
          ${student.studie}<br>
          Cijfer: ${student.cijfer} | Status: Actief
        </article>
      `;
    })
    .join('');
}

function toonTopStudenten() {
  const topStudenten = students.filter(student => student.cijfer >= 8.0);
  studentenLijst.innerHTML = topStudenten
    .map(student => {
      return `
        <article class="${student.actief ? 'actief' : 'inactief'}">
          <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
          ${student.studie}<br>
          Cijfer: ${student.cijfer} | Status: ${student.actief ? 'Actief' : 'Inactief'}
        </article>
      `;
    })
    .join('');
}

toonAlleStudenten();
