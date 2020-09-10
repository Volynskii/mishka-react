import React from "react";
import './form-type.scss';
export const FormType = () => {
    return (

            <section className="form__type">
                <div className="form__type__wrapper">
                    <div className="form__span">ТИП</div>
                    <ul className="form__type__list">
                        <li className="form__type__list__item">
                            <input type="radio" id="typeChoice1"
                                   name="contact" value="email"/>
                            <label htmlFor="typeChoice1">Аксессуар для
                                интерьера</label>
                        </li>
                        <li className="form__type__list__item">
                            <input type="radio" id="typeChoice2"
                                   name="contact" value="phone"/>
                            <label htmlFor="typeChoice2">Детская игрушка</label>
                        </li>
                    </ul>
                </div>
            </section>
    )
};
