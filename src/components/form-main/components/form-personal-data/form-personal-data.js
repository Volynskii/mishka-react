import React from "react";
import './form-personal-data.scss';


export const FormPersonalData = () => {
    return (
        <section className="form__personal-data">
            <div className="form__personal-data__wrapper">
                <span className="form__span">ФИО</span>
                <ul className="form__personal-data__list">

                    <li className="form__personal-data__list__item">
                        <label className="label-name" htmlFor="name">Имя: </label>
                        <input type="text" id="name" placeholder="Введите ваше имя*" />
                    </li>

                    <li className="form__personal-data__list__item">
                        <label className="label-family-name" htmlFor="family-name">Фамилия: </label>
                        <input type="text" id="family-name" placeholder="Укажите фамилию*"/>
                    </li>

                    <li className="form__personal-data__list__item">
                        <label className="label-patronymic" htmlFor="patronymic">Отчество: </label>
                        <input type="text" id="patronymic" placeholder="Отчество, если желаете"/>
                    </li>
                </ul>
            </div>
        </section>
    )
};
