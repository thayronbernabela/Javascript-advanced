const loadData = async () => {
  try {
    const response = await fetch("data.json");
    const people = await response.json();

    const list = document.getElementById("list");
    const count = document.getElementById("count");
    const clearButton = document.getElementById("clear");

    count.textContent = people.length;

    people.forEach(person => {
      const personDiv = document.createElement("div");
      personDiv.classList.add("person");

      personDiv.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <div>
          <h4>${person.name}</h4>
          <p>${person.age} years</p>
        </div>
      `;
      list.appendChild(personDiv);
    });

    clearButton.addEventListener("click", () => {
      list.innerHTML = "";
      count.textContent = 0;
    });

  } catch (error) {
    console.error("Fout bij het laden van data:", error);
  }
};

loadData();
