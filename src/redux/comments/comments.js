import customerReviews from "../../mocks/comments-mock";

const initialState = {
    index: 0,

};

export const commentsReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'NEXT':
            if(state.index === customerReviews.length - 1) {
                return {
                    ...state
                };
            }
            return {
                ...state,
                index: state.index + 1
            };
        case'PREV':
            if(state.index === 0) {
                return {
                    ...state
                }
            }
            return {
                ...state,
                index: state.index - 1
            };
        default:
            return state;
    }

};

