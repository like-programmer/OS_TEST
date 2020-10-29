import products from "./data/products.json";
import {PRODUCTS_KEY} from "./const.js";

export const extend = (a, b) => {
    return Object.assign({}, a, b);
};

export const putProductsIntoLocalStorage = () => {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const getProductsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(PRODUCTS_KEY));
};

