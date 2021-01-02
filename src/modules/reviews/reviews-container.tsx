import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Reviews from "./reviews/reviews";
import {FormReviews} from "../../components/form-reviews/form-reviews";
import SuccessPopup from "../../components/success-popup/success-popup";
import {rootReducer} from "../../store/reducer";

export const ReviewsContainer = () => {

    const commentsData = useSelector((state: rootReducer) => state.comments.comments);

type commentsProps = {
    comment: string;
    author: string;
    email: string;
};
    const [comments, setComments] = useState(commentsData);
    useEffect(() => {
        setComments(commentsData)
    }, [commentsData]);
    const [index, setIndex] = useState(0);

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

    const [display,setDisplay] = useState<string>("none");
    const onOpenPopup: () => void = () => {
        setDisplay("flex");
    };

    const onClosePopup: () => void = () => {
        setDisplay("none");
    };

    const [successPopupDisplay, setSuccessPopupDisplay] = useState<string>("none");

    const onOpenSuccessPopup: () => void = () => {
        setSuccessPopupDisplay("flex");
    };
    const onCloseSuccessPopup: () => void = () => {
        setSuccessPopupDisplay("none");
    };
    return (
        <>
            <Reviews
                comments={comments}
                index={index}
                nextComment={nextComment}
                prevComment={prevComment}
                openPopup={onOpenPopup}
            />
            <FormReviews
                isOpened={display}
                closePopup={onClosePopup}
                openSuccessPopup={onOpenSuccessPopup}
            />
            <SuccessPopup
                className={'success-container'}
                textContent={'Ваш отзыв отправлен!'}
                successPopupDisplay={successPopupDisplay}
                closeSuccessPopup={onCloseSuccessPopup}
                title={null}
            />
        </>
    );

};