import people from "./data.js";

const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
container.innerHTML = people
  .map((person, slideIdx) => {
    let personClass = "next";
    if (slideIdx == 0) personClass = "active";
    else if (slideIdx == people.length - 1) personClass = "last";
    return `<article class="slide ${personClass}">
          <img
            src="${person.img}"
            alt=""
            class="img"
          />
          <h4>${person.name}</h4>
          <p class="title">${person.job}</p>
          <p class="text">
            ${person.text}
          </p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>`;
  })
  .join("");

const startSlider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) next = container.firstElementChild;
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type == "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) next = container.lastElementChild;
    next.classList.add("last");
    return;
  }

  active.classList.add("last");
  next.classList.add("active");
  last.classList.add("next");
};

nextBtn.addEventListener("click", () => {
  startSlider();
});

prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
