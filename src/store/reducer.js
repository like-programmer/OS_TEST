import {UserRole} from "../const.js";
import {extend, putProductsIntoLocalStorage, removeProductsFromLocalStorage} from "../utils.js";
import {ActionType} from "./action.js";

const initialState = {
    products: [],
    accessLevel: UserRole.USER,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_PRODUCTS:
            return extend(state, {
                products: action.payload,
            });

        case ActionType.DELETE_PRODUCT:
            const splicedProductsCopy = state.products.slice();
            const deletingProductIndex = splicedProductsCopy.findIndex((product) => product.id === action.payload);

            if (deletingProductIndex !== -1) {
                splicedProductsCopy.splice(deletingProductIndex, 1);
                removeProductsFromLocalStorage();
                putProductsIntoLocalStorage(splicedProductsCopy);
            }

            return extend(state, {
                products: splicedProductsCopy,
            });

        case ActionType.DELETE_ALL:
            removeProductsFromLocalStorage();

            return extend(initialState, {
                products: [],
            });

        case ActionType.ADD_PRODUCT:
            const newProducts = [].concat(state.products, action.payload);
            removeProductsFromLocalStorage();
            putProductsIntoLocalStorage(newProducts);

        return extend(state, {
            products: newProducts,
        });
    }
    return state;
};


export {reducer};
