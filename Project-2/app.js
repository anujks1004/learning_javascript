let value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");
let count = 0;
btn.forEach(function (item) {
  item.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) value.style.color = "red";
    else if (count > 0) value.style.color = "green";
    else value.style.color = "#222";
    value.textContent = count;
  });
});
