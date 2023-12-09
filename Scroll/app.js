// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************

const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;
  if (containerHeight == 0) linksContainer.style.height = `${linkHeight}px`;
  else linksContainer.style.height = 0;
});

// ********** fixed navbar ************

const navBar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) navBar.classList.add("fixed-nav");
  else navBar.classList.remove("fixed-nav");
  if (scrollHeight > 500) topLink.classList.add("show-link");
  else topLink.classList.remove("show-link");
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const id = event.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navH = navBar.getBoundingClientRect().height;
    const containerH = linksContainer.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop - navH;

    if (!fixedNav) position = position - navH;

    if (navH > 82) position = position + containerH;

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
