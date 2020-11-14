import React, {useEffect, useState} from "react";
import './form-reviews.scss';
import {useDispatch} from "react-redux";
import {createReview} from "../../store/comments/actions";
import {delay} from "../../helpers/delay";

export const FormReviews = ({isOpened, closePopup,openSuccessPopup}) => {
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const onSubmit =  (evt) => {
        evt.preventDefault();
        evt.currentTarget.reset();
            const review = { name, email, comment };
            dispatch(createReview(review));
            closePopup();
            openSuccessPopup();
    };

    useEffect(() => {
        const onEscKeyDown = (evt) => {
            if (evt.key === `Escape`) {
                   closePopup();
            }
        };
        document.addEventListener(`keydown`, onEscKeyDown);
        return () => document.removeEventListener(`keydown`, onEscKeyDown);
    }, []);

    const onConfirmClick = (evt) => {
        evt.stopPropagation();
        if (evt.target === evt.currentTarget) {
            closePopup();
        }
    };
    return (
        <>
            <div style={{display: isOpened}} onClick={onConfirmClick}  className="popup">
        <form className="form-popup" onSubmit={onSubmit} >
        <section className="form-reviews__personal-data">
            <div className="form-reviews__personal-data__wrapper">
                <ul className="form-reviews__personal-data__list">

                    <li className="form-reviews__personal-data__list__item">
                        <label className="label-name" htmlFor="name">Имя: </label>
                        <input
                            onChange={(evt) =>
                                evt.target.value.includes('@') ? setName(evt.target.value) : 'пусто'
                                // setName(evt.target.value.includes('@'))
                            }
                            type="text" id="name" placeholder="Введите ваше имя*" />
                    </li>

                    <li className="form-reviews__personal-data__list__item">
                        <label className="label-family-name" htmlFor="family-name">email: </label>
                        <input
                            onChange={(evt) => setEmail(evt.target.value)}
                            type="text" id="family-name" placeholder="Укажите фамилию*"/>
                    </li>

                        <textarea
                            onChange={(evt) => setComment(evt.target.value)}
                            className="form-reviews__textarea" id="patronymic" placeholder="Пожалуйста, оставьте отзыв!"/>
                    <div className="form-reviews__button-container">
                        <input type="submit" className="form-reviews__button-container__button" value="Оставить отзыв"/>
                        <strong className="form-reviews__button-container__span">*Поля обязательны для заполнения</strong>
                    </div>

                </ul>
            </div>
        </section>
        </form>

            </div>
            </>
    )
};
