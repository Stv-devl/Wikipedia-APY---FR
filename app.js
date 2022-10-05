// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".error-message");
const display = document.getElementById("display");
const loader = document.querySelector(".loader");

// Submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "") {
    errorMessage.textContent = "Erreur, veuillez taper une recherche";
    return;
  } else {
    const valueInput = input.value;
    loader.classList.add("active");
    errorMessage.textContent = "";
    display.textContent = "";

    receiveApy(valueInput);
  }
});

// function for read the API with fetch
function receiveApy(searchInput) {
  fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.query.search;

      displayResult(data);
    });
}

// function for display the API result in page
function displayResult(data) {
  data.forEach((ns) => {
    const url = `https://en.wikipedia.org/?curid=${ns.pageid}`;
    const card = document.createElement("div");
    card.className = "result-item";
    card.innerHTML = `
    <h3><a href=${url}>${ns.title}</a></h3>
    <a href=${url} class="result-link">${url}</a>
    <span class="result-snippet">${ns.snippet}</span>
    `;
    loader.classList.remove("active");
    display.appendChild(card);
  });
}
