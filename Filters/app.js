let filteredProducts = [...products];
const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      return `<article class="product" data-id="${product.id}">
          <img
            src="${product.image}"
            alt=""
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${product.title}</h5>
            <span class="product-price">${product.price}</span>
          </footer>
        </article>`;
    })
    .join("");
};

displayProducts();

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

const companyDom = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companyDom.innerHTML = buttons
    .map((button) => {
      return `<button class="company-btn" data-id="${button}">${button}</button>`;
    })
    .join("");
};

displayButtons();

companyDom.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id == "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return el.dataset.id == product.company;
      });
    }
    searchInput.value = "";
    displayProducts();
  }
});
