import React from "react";
import './form-contact-information.scss';


export const FormContactInformation = () => {
    return (
        <section className="form__contact-information">
            <div className="form__contact-information__wrapper">
                <ul className="form__contact-information__list">

                    <li className="form__contact-information__list__item">
                        <label className="label-number" htmlFor="number">ТЕЛ </label>
                        <input type="tel" id="number" placeholder="+7 ХХХ ХХ ХХ*" />
                    </li>

                    <li className="form__contact-information__list__item">
                        <label className="label-email" htmlFor="email">E-MAIL </label>
                        <input type="email" id="email" placeholder="Ваш Email*"/>
                    </li>

                </ul>
            </div>
        </section>
    )
};
