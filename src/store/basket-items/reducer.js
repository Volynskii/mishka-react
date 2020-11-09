import  types from "./types";
import {hasDublicate} from "../../helpers/findDuplicate";
import catalogItems from "../../mocks/catalog-items-mock";

const initialState = {
    catalogItems: catalogItems,
    basketItems: []
};

export const basketItemsReducer = (state = initialState, {type,payload}) => {
console.log('TYPE',type,state)
    switch (type) {
        case types.ADD_ITEM_TO_BASKET:
           return  hasDublicate(state.basketItems,payload);

        case types.REMOVE_ITEM_FROM_BASKET:

            return  state.basketItems.filter(item => item.id !== payload.id);
        default:
            return state;
    }
};
