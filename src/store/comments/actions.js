import types from "../basket-items/types";

export const createReview = (review) => {
    return {
        type: types.CREATE_REVIEW,
        payload: review
    };
};
