const container = document.querySelector(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      return `<article class="card">
  <img src="${person.avatar_url}" alt="" />
  <h4>${person.login}</h4>
  <a href="${person.html_url}" class="btn">view profile</a>
</article>`;
    })
    .join("");
  container.innerHTML = newFollowers;
};

export default display;
