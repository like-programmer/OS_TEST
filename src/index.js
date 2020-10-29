import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {reducer} from "./store/reducer";
import {ActionCreator} from "./store/action.js";
import {putProductsIntoLocalStorage, getProductsFromLocalStorage} from "./utils.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

(() => {
    putProductsIntoLocalStorage();
    const products = getProductsFromLocalStorage();
    store.dispatch(ActionCreator.loadProducts(products));
})();

ReactDOM.render(
    <Provider store={store}>
        <App/>,
    </Provider>,
document.querySelector(`#root`)
);
