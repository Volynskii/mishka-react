import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Reviews from "./reviews/reviews";
import {FormReviews} from "../../components/form-reviews/form-reviews";
import SuccessPopup from "../../components/success-popup/success-popup";
import {rootReducer} from "../../store/reducer";

export const ReviewsContainer = () => {

    const commentsData = useSelector((state: rootReducer) => state.comments.comments);


    const [comments, setComments] = useState(commentsData);
    useEffect(() => {
        setComments(commentsData)
    }, [commentsData]);
    const [index, setIndex] = useState(0);

    const nextComment = () => {
        if(index === comments.length - 1) {
            return;
        }
        setIndex(index + 1);

    };

    const prevComment = () => {
        if(index === 0) {
            return;
        }
        setIndex(index - 1);
    };

    const [display,setDisplay] = useState("none");
    const onOpenPopup = () => {
        setDisplay("flex");
    };

    const onClosePopup = (evt: any) => {
       // const form = document.querySelector('.popup');
       //  form.getElementById('myform').reset();
        setDisplay("none");
    };

    const [successPopupDisplay, setSuccessPopupDisplay] = useState("none");

    const onOpenSuccessPopup = () => {
        setSuccessPopupDisplay("flex");
    };
    const onCloseSuccessPopup = () => {
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
