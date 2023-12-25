const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((item) => {
    return `<article class="post">
      <h2>${item.title}</h2>
      <div class="post-info">
        <span>${item.date}</span>
        <span>${item.length} min read</span>
      </div>
      <p>
        ${item.snippet}
      </p>
    </article>`;
  })
  .join("");

articlesContainer.innerHTML = articlesData;
