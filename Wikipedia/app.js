const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formDOM = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const results = document.querySelector(".results");

formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = formInput.value;
  if (!value) {
    results.innerHTML = `<div class = "error">Please enter valid search term</div>`;
    return;
  }
  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  const response = await fetch(`url${searchValue}`);
  const data = await response.json();
  return data;
};
