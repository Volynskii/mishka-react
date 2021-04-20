import {useSelector} from "react-redux";
import {rootReducer} from "../../store/reducer";
import React, {useEffect} from "react";

export const useReviews = () => {

    const commentsData = useSelector((state: rootReducer) => state.comments.comments);

     const [comments, setComments] = React.useState(commentsData);

    useEffect(() => {
        setComments(commentsData)
    }, [commentsData]);

    const [index, setIndex] = React.useState(0);

    const nextComment: () => void = () => {

        if (index === comments.length - 1) {
            setIndex(0)
        } else setIndex(index + 1);

    };

    const prevComment: () => void = () => {
        if (index === 0) {
            setIndex(comments.length - 1)
        } else setIndex(index - 1);
    };

    const showFirstComment: () => void = () => {
      setIndex(0);
    };

    const [display, setDisplay] = React.useState<string>("none");

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

    return {
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
    };
};
