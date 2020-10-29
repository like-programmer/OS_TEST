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

        case ActionType.ADD_PRODUCT:
            console.log(action.payload);
            // return extend(state, {
            //     products: action.payload,
            // });
    }

    return state;
};


export {reducer};
