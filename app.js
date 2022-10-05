// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const form = document.querySelector("form");
const input = document.querySelector("input");
const display = document.getElementById("display");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valueInput = input.value;
  console.log(valueInput);
  receiveApy(valueInput);
});

function receiveApy(searchInput) {
  fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`
  )
    .then((res) => res.json())
    .then((res) => {
      const data = res.query.search;
      console.log(data);
      displayResult(data);
    });
}

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
    display.appendChild(card);
  });
}
