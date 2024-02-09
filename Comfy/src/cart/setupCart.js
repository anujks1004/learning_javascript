// import
import { getStorageItem, setStorageItem, getElement } from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id == id);
  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    console.log(product);
    cart = [...cart, product];
    console.log(cart);
    addToCartDOM(product);
  } else {
  }
  openCart();
};

const init = () => {};

init();
