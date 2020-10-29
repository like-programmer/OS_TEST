export const ActionType = {
    LOAD_PRODUCTS: `LOAD_PRODUCTS`,
};

export const ActionCreator = {
    loadProducts: (products) => ({
        type: ActionType.LOAD_PRODUCTS,
        payload: products,
    }),
};
