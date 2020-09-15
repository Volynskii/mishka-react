import React from "react";
import {NavLink} from "react-router-dom";
import './Header.scss';


export const Header = () => (
        <div className="main-header">
            <div className="main-header__wrapper">
                <div className="nav-container">

                    <ul className="nav-container container-two">
                        <NavLink to="/catalog"  className="nav-container__item nav-catalog">
                            Каталог товаров</NavLink>


                        <NavLink to="/form" className="nav-container__item nav-form">Вязание на заказ</NavLink>
                    </ul>
                    <NavLink name="navigation" to="/" exact className="nav-container__item nav-main"/>


                </div>

                <div className="helper-container">
                    <div className="helper-container__search"/>
                    <div className="helper-container__basket">Корзина:&nbsp;пока пуста</div>
                    <br/>
                    <div className="free-delivery-tablet">Бесплатная доставка по России</div>
                </div>

            </div>

            <div className="container-filter">
            <ul className="container-filter__filter">
            <li className="container-filter__filter__item new-arrivals">Новые поступления</li>
            <li className="container-filter__filter__item sale">Распродажа</li>
            </ul>

            <div className="free-delivery">Бесплатная доставка по России</div>
            </div>

        </div>
);
