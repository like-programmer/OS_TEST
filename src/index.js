import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {putProductsIntoLocalStorage, getProductsFromLocalStorage} from "./utils.js";

putProductsIntoLocalStorage();
const products = getProductsFromLocalStorage();

ReactDOM.render(
    <App
        products={products}
    />,
    document.querySelector(`#root`)
);
