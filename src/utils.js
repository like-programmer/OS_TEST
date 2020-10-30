import {PRODUCTS_KEY} from "./const.js";

export const extend = (a, b) => {
    return Object.assign({}, a, b);
};

export const putProductsIntoLocalStorage = (products) => {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const getProductsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(PRODUCTS_KEY));
};

export const removeProductsFromLocalStorage = () => {
    return localStorage.removeItem("catalog");
};

