import customerReviews from "../../mocks/comments-mock";
import types from "../basket-items/types";
import {modifyComment} from "../../helpers/modifyComment";

const initialState : {
    comments: {
        comment: string,
        author: string,
        email: string,
    }[];
} = {

    comments : customerReviews,

};

export const commentsReducer = (state = initialState,{type,payload}: {type:string, payload: object}) => {
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

