import customerReviews from "../../mocks/comments-mock";
import types from "../basket-items/types";
import {modifyComment} from "../../helpers/modifyComment";

const initialState = {
    index: 0,
    comments : customerReviews,

};

export const commentsReducer = (state = initialState,{type,payload}) => {
    console.log(type, payload)
    console.log(state.comments)
    switch (type) {
        case types.NEXT:
            if(state.index === state.comments.length - 1) {
                return {
                    ...state
                };
            }
            return {
                ...state,
                index: state.index + 1
            };
        case types.PREV:
            if(state.index === 0) {
                return {
                    ...state
                }
            }
            return {
                ...state,
                index: state.index - 1
            };
        case types.CREATE_REVIEW:
            return {
                ...state,
                comments: modifyComment(state.comments,payload)
            };
        default:
            return state;
    }

};

