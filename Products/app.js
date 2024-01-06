const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">there was an error</p>    `;
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((item) => {
      return `<a href="product.html?id=${item.id}" class="single-product">
            <img src="${
              item.fields.image[0].url
            }" alt="" class="single-product-img img" />
            <footer>
              <h5 class="name">${item.fields.name}</h5>
              <span class="price">$${item.fields.price / 100}</span>
            </footer>
          </a>`;
    })
    .join("");
  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
