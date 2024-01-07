const url = "https://randomuser.me/api/";

const img = document.querySelector(".user-img");
const title = document.querySelector(".user-title");
const value = document.querySelector(".user-value");
const btn = document.querySelector(".btn");

const btns = [...document.querySelectorAll(".icon")];

const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const { phone, email } = person;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  const { password } = person.login;
  const { first, last } = person.name;
  const { large: image } = person.picture;
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number}${name}`,
    name: `${first}${last}`,
  };
};

const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns.forEach((btn) => btn.classList.remove("active"));
  btns[0].classList.add("active");

  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      value.textContent = person[label];
      title.textContent = `My ${label} is`;
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
};

const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
