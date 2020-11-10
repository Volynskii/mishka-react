import types from "./types";


export const addItemToBasket = (item) => {
    return {
        type: types.ADD_ITEM_TO_BASKET,
        payload: item
    };
};

export const removeItemFromBasket = (item) => {
    return {
        type: types.REMOVE_ITEM_FROM_BASKET,
        payload: item
    };
};

