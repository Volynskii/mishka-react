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
