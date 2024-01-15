import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sideWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  sideWrapper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sideWrapper.classList.remove("show");
});

sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article>
    <h4>${page}</h4>
    <div class = "sidebar-sublinks">
    ${links
      .map((link) => {
        return `<a href = "${link.url}">
        <i class="${link.icon}"></i>${link.label}</a>`;
      })
      .join("")}</div></article>`;
  })
  .join("");
