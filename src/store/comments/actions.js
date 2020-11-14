import types from "../basket-items/types";

export const nextComment = (item,payload) => {
    console.log('nextcomment')
    return {
        type: types.NEXT,
        payload: null
    };
};

export const prevComment = () => {
    console.log('я был здесь!')
    return {
        type: types.PREV,
        payload: null
    };
};


export const createReview = (review) => {
    return {
        type: types.CREATE_REVIEW,
        payload: review
    };
};
