import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    title.textContent = "Sorry no result";
    section.innerHTML = null;
    hideLoading();
    return;
  }
  section.innerHTML = drinks
    .map((drink) => {
      return `<a href="drink.html">
           <article class="cocktail" data-id="${drink.idDrink}">
             <img src="${drink.strDrinkThumb}" alt="" />
             <h3>${drink.strDrink}</h3>
           </article>
         </a>`;
    })
    .join("");
  hideLoading();
  title.textContent = "";
  return section;
  return;
};

export default displayDrinks;
