// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const form = document.querySelector("form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = input[0].value;
  console.log(searchInput);
});

fetch(
  "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
