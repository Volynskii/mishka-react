import types from "./types";


export const addItemToBasket = (item, payload) => {
    console.log(item)
    return {
        type: types.ADD_ITEM_TO_BASKET,
        payload: item
    };
};

