//core
import { combineReducers } from "redux";

//Reducers
import {commentsReducer as comments} from "./comments/reducer";
import {basketItemsReducer as basketItems} from "./basket-items/reducer";

export const rootReducer = combineReducers({
    comments,
    basketItems,
});
