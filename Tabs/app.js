const tabBtn = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (event) {
  const id = event.target.dataset.id;
  if (id) {
    tabBtn.forEach(function (btn) {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");
    contents.forEach(function (article) {
      article.classList.remove("active");
    });
    const showArticle = document.getElementById(id);
    showArticle.classList.add("active");
  }
});
