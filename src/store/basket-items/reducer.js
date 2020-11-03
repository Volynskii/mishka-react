import  types from "./types";
import {hasDublicate} from "../../helpers/findDuplicate";

const initialState = [];

export const basketItemsReducer = (state = initialState, {type,payload}) => {
    switch (type) {

        case types.ADD_ITEM_TO_BASKET:
           return  hasDublicate(state,payload);

        case types.REMOVE_ITEM_FROM_BASKET:

            return  state.filter(item => item.id !== payload.id);
        default:
            return state;
    }
};
