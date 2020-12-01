import React from "react";
import './form-wishes.scss';


export const FormWishes = () => {
    return (
        <section className="form__wishes">
            <div className="form__wishes__wrapper">
                <ul className="form__wishes__list">

                    <li className="form__wishes__list__item">
                        <label className="label-textarea form__span" htmlFor="textarea">ДОП </label>
                        <textarea className="form__wishes__list__item__textarea" id="textarea" placeholder="Опишите все ваши пожелания к заказу" />
                    </li>

                </ul>
                <li className="form__button-container">
                    <input type="submit" className="form__button-container__button" value="ОТПРАВИТЬ ЗАКАЗ"/>
                    <strong className="form__button-container__span">*Поля обязательны для заполнения</strong>
                </li>
            </div>
        </section>
    )
};
