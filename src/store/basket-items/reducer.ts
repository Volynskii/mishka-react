import  types from "./types";
import {hasDublicate} from "../../helpers/findDuplicate";
import catalogItems from "../../mocks/catalog-items-mock";

const initialState: {
    catalogItems: any[];
    basketItems: any[]
} = {
    catalogItems: catalogItems,
    basketItems: []
};

export const basketItemsReducer = (state = initialState,{type,payload}: {type:string, payload: object}) => {

    switch (type) {
        case types.ADD_ITEM_TO_BASKET:
            return {
                ...state,
                basketItems: hasDublicate(state.basketItems,payload)
            };

        case types.REMOVE_ITEM_FROM_BASKET:
            return {
                ...state,
                basketItems: state.basketItems.filter(item => item.id !== payload)
            };

        default:
            return state;
    }
};
