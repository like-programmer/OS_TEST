export const ActionType = {
    LOAD_PRODUCTS: `LOAD_PRODUCTS`,
    ADD_PRODUCT: `ADD_PRODUCT`,
    DELETE_PRODUCT: `DELETE_PRODUCT`,
    DELETE_ALL: `DELETE_ALL`,
};

export const ActionCreator = {
    loadProducts: (products) => ({
        type: ActionType.LOAD_PRODUCTS,
        payload: products,
    }),
    addProduct: (product) => ({
        type: ActionType.ADD_PRODUCT,
        payload: product,
    }),
    deleteProduct: (id) => ({
        type: ActionType.DELETE_PRODUCT,
        payload: id,
    }),
    deleteAll: () => ({
        type: ActionType.DELETE_ALL,
        payload: null,
    }),
};
