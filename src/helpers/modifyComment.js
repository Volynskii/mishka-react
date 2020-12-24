export const modifyComment = (state, payload) => {

    return (
        [
            ...state,
            {
                comment: payload.comment,
                author: payload.userName,
                email: payload.email
            }
        ]
    );

};
