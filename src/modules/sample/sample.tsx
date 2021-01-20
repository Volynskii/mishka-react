import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Reviews from "../reviews/reviews/reviews";
import {FormReviews} from "../../components/form-reviews/form-reviews";
import SuccessPopup from "../../components/success-popup/success-popup";
import {rootReducer} from "../../store/reducer";
import { Provider } from 'react-redux'

export const Sample = () => {
    {/*<Provider store={rootReducer}> </Provider>*/}
    const commentsData = useSelector((state: rootReducer) => state.comments.comments);

    type commentsProps = {
        comment: string;
    author: string;
    email: string;
};
    const [comments, setComments] = React.useState(commentsData);
    useEffect(() => {
        setComments(commentsData)
    }, [commentsData]);
    const [index, setIndex] = React.useState(0);

    const nextComment: () => void = () => {
        if(index === comments.length - 1) {
            return;
        }
        setIndex(index + 1);

    };

    const prevComment: () => void = () => {
        if(index === 0) {
            return;
        }
        setIndex(index - 1);
    };

    const [display,setDisplay] = React.useState<string>("none");
    const onOpenPopup: () => void = () => {
        setDisplay("flex");
    };

    const onClosePopup: () => void = () => {
        setDisplay("none");
    };

    const [successPopupDisplay, setSuccessPopupDisplay] = React.useState<string>("none");

    const onOpenSuccessPopup: () => void = () => {
        setSuccessPopupDisplay("flex");
    };
    const onCloseSuccessPopup: () => void = () => {
        setSuccessPopupDisplay("none");
    };
    return {index, comments, nextComment}

};


