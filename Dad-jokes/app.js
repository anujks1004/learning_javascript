const url = "https://icanhazdadjoke.com/";
const btn = document.querySelector(".btn");
const resultJoke = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchJoke();
});

const fetchJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learn",
    },
  });
  const data = await response.json();
  resultJoke.textContent = data.joke;
};

fetchJoke();
