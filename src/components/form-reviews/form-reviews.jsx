import React, {useEffect} from "react";
import './form-reviews.scss';
import {useDispatch} from "react-redux";
import {createReview} from "../../store/comments/actions";
import useForm from "../../helpers/useForm";
import validate from "./validate-info"


export const FormReviews = ({isOpened, closePopup,openSuccessPopup,showFirstComment}) => {

    const { handleChange, values, handleSubmit, errors} = useForm(validate);

    const dispatch = useDispatch();

    const onSubmit =  (evt) => {

        // check if errors exist
         handleSubmit(evt);
        // check if values exist and inputs are fielded
        const errorsAmount = Object.keys(errors).length;
        const eachInputHasValues = Object.keys(values).every((k) => values[k]);

        if (errorsAmount === 0 && eachInputHasValues) {
            let review = values;
            dispatch(createReview(review));
            evt.currentTarget.reset();
            closePopup();
            openSuccessPopup();
            showFirstComment();
        }
    };


    useEffect(() => {
        const onEscKeyDown = (evt) => {
            if (evt.key === `Escape`) {
                closePopup();
            }
        };
        document.addEventListener(`keydown`, onEscKeyDown);
        return () => document.removeEventListener(`keydown`, onEscKeyDown);
    }, [closePopup]);

    const onConfirmClick = (evt) => {
        evt.stopPropagation();
        if (evt.target === evt.currentTarget) {
            closePopup();
        }
    };
    return (
        <>
            <div style={{display: isOpened}} onClick={onConfirmClick} className="popup">
                <form className="form-popup"
                      onSubmit={(evt) => onSubmit(evt)}>
                    <section className="form-reviews__personal-data">
                        <div className="form-reviews__personal-data__wrapper">
                            <ul className="form-reviews__personal-data__list">

                                <li className="form-reviews__personal-data__list__item">
                                    <label className="label-review-name" htmlFor="review-name">Имя: </label>
                                    <input
                                        name="userName"
                                        onChange={handleChange}
                                        type="text" id="review-name" placeholder="Введите ваше имя*"/>
                                </li>
                                {errors.userName && <p className="error-message">{errors.userName}</p>}
                                <li className="form-reviews__personal-data__list__item">
                                    <label className="label-review-email" htmlFor="review-email">Email: </label>
                                    <input
                                        name="email"
                                        onChange={handleChange}
                                        type="text" id="review-email" placeholder="Укажите фамилию*"/>
                                </li>
                                {errors.email && <p className="error-message">{errors.email}</p>}
                                <textarea
                                    name="comment"
                                    onChange={handleChange}
                                    className="form-reviews__textarea" id="patronymic"
                                    placeholder="Пожалуйста, оставьте отзыв!"/>
                                {errors.comment && <p className="error-message">{errors.comment}</p>}
                                <div className="form-reviews__button-container">
                                    <input type="submit" className="form-reviews__button-container__button"
                                           value="Оставить отзыв"/>
                                    <strong className="form-reviews__button-container__span">*Поля обязательны<br/> для
                                        заполнения</strong>
                                </div>

                            </ul>
                        </div>
                    </section>
                </form>

            </div>
        </>
    );
};
