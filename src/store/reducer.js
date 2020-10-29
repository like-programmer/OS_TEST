import {UserRole} from "../const.js";
import {extend} from "../utils.js";
import {ActionType} from "./action.js";

const initialState = {
    products: [],
    accessLevel: UserRole.ADMIN,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_PRODUCTS:
            return extend(state, {
                products: action.payload,
            });

        // case ActionType.ADD_PRODUCT:
        //     console.log(action.payload);
        // return extend(state, {
        //     products: action.payload,
        // });

        case ActionType.DELETE_PRODUCT:
            const splicedProductsCopy = state.products.slice();
            const deletingProductIndex = splicedProductsCopy.findIndex((product) => product.id === action.payload);

            if (deletingProductIndex !== -1) {
                splicedProductsCopy.splice(deletingProductIndex, 1);
            }
            return extend(state, {
                products: splicedProductsCopy,
            });

        case ActionType.DELETE_ALL:
            localStorage.removeItem("catalog");

            return extend(initialState, {
                products: [],
            });
    }
    return state;
};


export {reducer};
