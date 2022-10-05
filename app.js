// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const form = document.querySelector("form");
const input = document.querySelectorAll("input");
const display = document.getElementById("display");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = input[0].value;
  console.log(searchInput);
  receiveApy();
});

function receiveApy() {
  fetch(
    "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}"
  )
    .then((res) => res.json())
    .then((res) => {
      const display = res.query.search;
      console.log(display);
    });
}

receiveApy();

/* display.textContent = data.text_head;*/
