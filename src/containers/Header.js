import React from "react";
import {NavLink} from "react-router-dom";
import './Header.css';


export const Header = () => (
        <div className="main-header">
            <div className="main-header__wrapper">
                <div className="nav-container">
                    <NavLink to="/catalog"  className="nav-container__item catalog">
                        Каталог товаров</NavLink>

                    <ul className="nav-container container-two">
                    <NavLink to="/form" className="nav-container__item form">Вязание на заказ</NavLink>
                    <NavLink to="/" exact className="nav-container__item main">3</NavLink>
                    </ul>

                </div>

                <div className="helper-container">
                    <div className="helper-container__search"></div>
                    <div className="helper-container__basket">Корзина:&nbsp;пока пуста</div>
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
