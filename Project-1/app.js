const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const container = document.querySelector("main");
const btn = document.querySelector(".btn");
const colorName = document.querySelector(".color");
btn.addEventListener("click", function () {
  let index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[index];
  colorName.textContent = colors[index];
});
