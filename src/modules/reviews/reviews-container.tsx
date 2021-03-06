import React from "react";
import Reviews from "./reviews/reviews";
import {FormReviews} from "../../components/form-reviews/form-reviews";
import SuccessPopup from "../../components/success-popup/success-popup";
import {useReviews} from "./useReviews";

export const ReviewsContainer = () => {

    const {
        comments,
        index,
        nextComment,
        prevComment,
        showFirstComment,
        onOpenPopup,
        onClosePopup,
        display,
        successPopupDisplay,
        onOpenSuccessPopup,
        onCloseSuccessPopup
    } = useReviews();

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
                showFirstComment={showFirstComment}
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

export default ReviewsContainer;

