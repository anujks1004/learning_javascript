const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formDOM = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const resultDOM = document.querySelector(".results");

formDOM.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = formInput.value;
  if (!value) {
    resultDOM.innerHTML = `<div class = "error">Please enter valid search term</div>`;
    return;
  }
  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  resultDOM.innerHTML = `<div class = "loading"></div>`;
  try {
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;
    if (results.length < 1) {
      resultDOM.innerHTML = `<div class = "error">Please enter valid search term</div>`;
      return;
    }
    renderResults(results);
  } catch (error) {
    resultDOM.innerHTML = `<div class = "error">There was an error</div>`;
  }
};

const renderResults = (list) => {};
