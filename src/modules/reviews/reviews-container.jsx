import React, {useState} from "react";
import { useSelector } from "react-redux";
import Reviews from "./reviews/reviews";
import {FormReviews} from "../../components/form-reviews/form-reviews";

export const ReviewsContainer = () => {

    const commentsData = useSelector((state) => state.comments.comments);
    const indexData = useSelector((state) => state.comments.index);

    const [comments, setComments] = useState(commentsData);
    const [index, setIndex] = useState(indexData);

    const [display,setDisplay] = useState("none");

    const nextComment = () => {

        if(index === comments.length - 1) {
             return  setComments(comments)
        }
        setIndex(index + 1);

        };

    const prevComment = () => {
        if(index === 0) {
               return setComments(comments);
        }
        setIndex(index - 1);
    };
const openPopup = () => {
        setDisplay("flex");
    };

    const closePopup = () => {
        setDisplay("none");
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
    />
            </>
    );

};
