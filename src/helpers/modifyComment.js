export const modifyComment = (state, payload) => {

    return (
        [
            {
                comment: payload.comment,
                author: payload.userName,
                email: payload.email
            },
            ...state

        ]
    );

};
