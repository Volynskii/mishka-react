import React, {FormEvent, useEffect, useState} from "react";
import './form-reviews.scss';
import {useDispatch} from "react-redux";
import {createReview} from "../../store/comments/actions";
import useForm from "../../helpers/useForm";
import validate from "./validate-info"

type reviewsContainerProps = {
    isOpened: string;
    closePopup: () => void;
    openSuccessPopup: () => void;
}
export const FormReviews: React.FC<reviewsContainerProps> = ({isOpened, closePopup,openSuccessPopup}) => {

    const { handleChange, values, handleSubmit, errors }: {
        handleChange: () => void;
        values: {
            userName: string;
            email: string;
            comment: string;
        }
        handleSubmit: () => void;
        errors: any


    } = useForm(validate);

    const dispatch = useDispatch();

    const onSubmit =  (evt: any) => {
        handleSubmit();
        const errorsAmount = Object.keys(errors).length;
        // @ts-ignore
        const eachInputHasValues = Object.keys(values).every((k): Array<string> => values[k]);
        if (!errorsAmount && eachInputHasValues) {
            let review = values;
            dispatch(createReview(review));
            evt.currentTarget.reset();
            closePopup();
            openSuccessPopup();
        }
    };


    useEffect(() => {
        const onEscKeyDown = (evt: KeyboardEvent) => {
            if (evt.key === `Escape`) {
                closePopup();
            }
        };
        document.addEventListener(`keydown`, onEscKeyDown);
        return () => document.removeEventListener(`keydown`, onEscKeyDown);
    }, [closePopup]);

    const onConfirmClick:(evt: any) => void = (evt: any) => {
        evt.stopPropagation();
        if (evt.target === evt.currentTarget) {
            closePopup();
        }
    };
    return (
        <>
            <div style={{display: isOpened}} onClick={onConfirmClick}  className="popup">
                <form className="form-popup"
                      onSubmit={onSubmit} >
                    <section className="form-reviews__personal-data">
                        <div className="form-reviews__personal-data__wrapper">
                            <ul className="form-reviews__personal-data__list">

                                <li className="form-reviews__personal-data__list__item">
                                    <label className="label-name" htmlFor="name">Имя: </label>
                                    <input
                                        name="userName"
                                        onChange={handleChange}
                                        type="text" id="name" placeholder="Введите ваше имя*" />
                                </li>
                                {errors.userName && <p className="error-message">{errors.userName}</p>}
                                <li className="form-reviews__personal-data__list__item">
                                    <label className="label-family-name" htmlFor="family-name">email: </label>
                                    <input
                                        name="email"
                                        onChange={handleChange}
                                        type="text" id="family-name" placeholder="Укажите фамилию*"/>
                                </li>
                                {errors.email && <p className="error-message">{errors.email}</p>}
                                <textarea
                                    name="comment"
                                    onChange={handleChange}
                                    className="form-reviews__textarea" id="patronymic" placeholder="Пожалуйста, оставьте отзыв!"/>
                                {errors.comment && <p className="error-message">{errors.comment}</p>}
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
