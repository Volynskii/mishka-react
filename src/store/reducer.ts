//core
import { combineReducers } from "redux";

//Reducers
import {commentsReducer as comments} from "./comments/reducer";
import {basketItemsReducer as basketItems} from "./basket-items/reducer";
import {headerMargin as headerHeight} from "./header-margin/reducer";

export const rootReducer = combineReducers({
    comments,
    basketItems,
    headerHeight
});

export  type rootReducer = ReturnType<typeof rootReducer>
