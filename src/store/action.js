export const ActionType = {
    LOAD_PRODUCTS: `LOAD_PRODUCTS`,
    ADD_PRODUCT: `ADD_PRODUCT`,
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
};
