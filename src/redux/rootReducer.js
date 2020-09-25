//core
import { combineReducers } from "redux";

//Reducers
import {commentsReducer} from "./comments/comments";
import {basketItemsReducer} from "./basket-items/basketItems";

export const rootReducer = combineReducers({
    comments: commentsReducer,
    basketItems: basketItemsReducer,
});

// const initialState = {
//     index: 0,
//     buttonLeftIsDisabled: false,
//     buttonRightIsDisabled: false
// };
//
// export default function rootReducer (state = initialState,action) {
//     switch (action.type) {
//         case 'NEXT':
//             if(state.index === customerReviews.length - 1) {
//                 return {
//                     ...state,
//                     buttonLeftIsDisabled: false
//                 }
//             }
// return {
//     ...state,
//     index: state.index + 1
// };
//         case'PREV':
//             if(state.index === 0) {
//                 return {
//                     ...state,
//                     buttonRightIsDisabled: true
//                 }
//             }
//             return {
//                 ...state,
//                 index: state.index - 1
//             }
//     }
//     return state;
// }
