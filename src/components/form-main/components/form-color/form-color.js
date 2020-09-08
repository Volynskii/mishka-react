import React from "react";
import './form-color.scss';


export const FormColor = () => {
    return (
        <section className="form__color">
            <div className="form__color__wrapper">
                <span className="form__span">ЦВЕТ</span>
                <ul className="form__color__list">
                    <li className="form__color__list__item">
                        <input type="checkbox" id="cOne" name="scales"
                        />
                        <label htmlFor="cOne">Белый</label>
                    </li>
                    <li className="form__color__list__item">
                        <input type="checkbox" id="cTwo" name="scales"
                        />
                        <label htmlFor="cTwo">Серый</label>
                    </li>
                    <li className="form__color__list__item">
                        <input type="checkbox" id="cThree" name="scales"
                        />
                        <label htmlFor="cThree">«Тиффани»</label>
                    </li>
                    <li className="form__color__list__item">
                        <input type="checkbox" id="cFour" name="scales"
                        />
                        <label htmlFor="cFour">Чёрный</label>
                    </li>
                    <li className="form__color__list__item">
                        <input type="checkbox" id="cFive" name="scales"
                        />
                        <label htmlFor="cFive">Розовый</label>
                    </li>
                    <li className="form__color__list__item">
                        <input type="checkbox" id="cSix" name="scales"
                        />
                        <label htmlFor="cSix">Оранжевый</label>
                    </li>
                </ul>
            </div>
        </section>
    )
};
