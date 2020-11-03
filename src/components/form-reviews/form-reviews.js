import React from "react";
import './form-reviews.scss';


export const FormReviews = ({isOpened}) => {
    const onSubmit = () => {
       alert('submit')
    }
    return (
        <form style={{display: isOpened}}  onSubmit={onSubmit} >
        <section className="form-reviews__personal-data">
            <div className="form-reviews__personal-data__wrapper">
                <ul className="form-reviews__personal-data__list">

                    <li className="form-reviews__personal-data__list__item">
                        <label className="label-name" htmlFor="name">Имя: </label>
                        <input type="text" id="name" placeholder="Введите ваше имя*" />
                    </li>

                    <li className="form-reviews__personal-data__list__item">
                        <label className="label-family-name" htmlFor="family-name">email: </label>
                        <input type="text" id="family-name" placeholder="Укажите фамилию*"/>
                    </li>

                        <textarea className="form-reviews__textarea" id="patronymic" placeholder="Пожалуйста, оставьте отзыв!"/>
                    <div className="form-reviews__button-container">
                        <input type="submit" className="form-reviews__button-container__button" value="Оставить отзыв"/>
                        <strong className="form-reviews__button-container__span">*Поля обязательны для заполнения</strong>
                    </div>

                </ul>
            </div>
        </section>
        </form>
    )
};
