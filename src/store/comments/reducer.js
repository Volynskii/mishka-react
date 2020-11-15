import customerReviews from "../../mocks/comments-mock";
import types from "../basket-items/types";
import {modifyComment} from "../../helpers/modifyComment";

const initialState = {
    index: 0,
    comments : customerReviews,

};

export const commentsReducer = (state = initialState,{type,payload}) => {

    switch (type) {
        case types.CREATE_REVIEW:
            return {
                ...state,
                comments: modifyComment(state.comments,payload)
            };
        default:
            return state;
    }

};

