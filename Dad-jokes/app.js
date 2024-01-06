const url = "https://icanhazdadjoke.com/";
const btn = document.querySelector(".btn");
const resultJoke = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchJoke();
});

const fetchJoke = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learn",
      },
    });

    if (!response.ok) {
      throw new Error("there was an error");
    }
    const data = await response.json();
    resultJoke.textContent = data.joke;
  } catch (error) {
    resultJoke.textContent = "There was an error...";
  }
};

fetchJoke();
