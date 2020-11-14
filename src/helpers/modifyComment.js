export const modifyComment = (state, payload) => {

    return (
        [
            ...state,
            {
                comment: payload.comment,
                author: payload.name,
                email: payload.email
            }
        ]
    );

};
