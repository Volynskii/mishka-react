import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Reviews from "./reviews/reviews";
import {FormReviews} from "../../components/form-reviews/form-reviews";
import SuccessPopup from "../../components/success-popup/success-popup";

export const ReviewsContainer = () => {

    const commentsData = useSelector((state) => state.comments.comments);
    const indexData = useSelector((state) => state.comments.index);


    const [comments, setComments] = useState(commentsData);
    useEffect(() => {
setComments(commentsData)
    }, [commentsData]);
         const [index, setIndex] = useState(indexData);

    const nextComment = () => {
console.log('index', index)
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
const openPopup = () => {
        setDisplay("flex");
    };

    const closePopup = () => {
        setDisplay("none");
    };

    const [successPopupDisplay, setSuccessPopupDisplay] = useState("none")

    const openSuccessPopup = () => {
        setSuccessPopupDisplay("flex");
    };
    const closeSuccessPopup = () => {
        setSuccessPopupDisplay("none");
    };
    return (
        <>
        <Reviews
        comments={comments}
        index={index}
        nextComment={nextComment}
        prevComment={prevComment}
        openPopup={openPopup}
    />
    <FormReviews
    isOpened={display}
    closePopup={closePopup}
    openSuccessPopup={openSuccessPopup}
    />
    <SuccessPopup
        className={'success-container'}
        textContent={'Ваш отзыв отправлен!'}
        successPopupDisplay={successPopupDisplay}
        closeSuccessPopup={closeSuccessPopup}
    />
            </>
    );

};
