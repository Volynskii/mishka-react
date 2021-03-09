import {useSelector} from "react-redux";
import {rootReducer} from "../../store/reducer";
import React, {useEffect} from "react";

export const useReviews = () => {

    const commentsData = useSelector((state: rootReducer) => state.comments.comments);

    const customerReviews = [
        {
            comment: 'Я молодая мама,' +
                ' но всё равно фотографии' +
                ' не набирали и близко такого ' +
                'количества лайков, как у ' +
                'популярных инстамамочек.' +
                ' В отчаянии, я накупила ' +
                'аксессуаров и игрушек в ' +
                'Мишке, и мои фотографии ' +
                'сразу стали более стильными,' +
                ' а также набирают больше лайков!',
            author: 'Анастасия Красильникова',
            email: '@misssssiskras'
        },

        {
            comment: 'Я молодой парень и мои мои' +
                ' фотографии обычно не набирали' +
                ' большого количества лайков, ' +
                'но как только я купил игрушки ' +
                'разных форматов цветов и форматов' +
                ' количество лайков пошло в гору!' +
                ' Я очень доволен! ',
            author: 'Михаил Соколов!',
            email: 'sokolov@gmail.com'
        },
        {
            comment: 'Я очень доволен данными' +
                ' товарами,товары имеют' +
                ' чрезвычайно высокое качество,' +
                ' ' +
                'заказал себе, друзьям, бабушке,дедушке, папе и маме!',

            author: 'Илья Перевалов!',
            email: 'perevalov@gmail.com'
        }

    ];

     const [comments, setComments] = React.useState(customerReviews.concat(commentsData));

    useEffect(() => {
        setComments(comments)
    }, [comments]);

    const [index, setIndex] = React.useState(0);

    const nextComment: () => void = () => {

        if (index === comments.length - 1) {
            return;
        }
        setIndex(index + 1);

    };

    const prevComment: () => void = () => {
        if (index === 0) {
            return;
        }
        setIndex(index - 1);
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
        onOpenPopup,
        onClosePopup,
        display,
        successPopupDisplay,
        onOpenSuccessPopup,
        onCloseSuccessPopup
    };
};
