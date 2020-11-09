import types from "./types";


export const addItemToBasket = (item) => {
    console.log(item)
    return {
        type: types.ADD_ITEM_TO_BASKET,
        payload: item
    };
};

