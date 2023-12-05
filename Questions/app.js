//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) item.classList.remove("show-text");
    });
    question.classList.toggle("show-text");
  });
});

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {
//     event.currentTarget.parentElement.parentElement.classList.toggle(
//       "show-text"
//     );
//   });
// });
