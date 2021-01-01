import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import './header.scss';
import BasketPopupBasketPopup from "./components/basket-popup";
import cn from "classnames";

type headerContainerProps = {
display: string;
isActiveBasket: boolean;
    basketTextContent: string;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    basketItems: { id: number;
        src: string;
        itemPrice: number;
        itemName: string;
        itemParamOneName: string;
        itemParamOneValue: number;
        itemParamOneUnit : string;
        itemParamTwoValue: number;
        itemParamTwoName: string;
        itemParamTwoUnit: string;
        itemQuantity: number;} [];
    closePopup: () => void;
    togglePopup: () => void;
}

export const Header: React.FC<headerContainerProps> = ({
                           display,
                           isActiveBasket,
                           basketTextContent,
                           handleMouseEnter,
                           handleMouseLeave,
                           basketItems,
                           closePopup,
                           togglePopup

                       }) => {

    const [menuDisplay, setMenuDisplay] = useState<string>('flex');

    const handleToggleMenu: () => void = () => {
        if (menuDisplay === "none") {
            setMenuDisplay('flex');
        } else
            setMenuDisplay('none');
    };
    return <div className="main-header">
        <div className="main-header__wrapper">
            <div className="nav-container">

                <ul className="nav-container container-two" style={{display: menuDisplay}} >
                    <NavLink  to="/catalog" className="nav-container__item nav-catalog">
                        Каталог товаров</NavLink>

                    <NavLink to="/form" className="nav-container__item nav-form">Вязание на заказ</NavLink>
                </ul>

                <NavLink  to="/" exact className="nav-container__item nav-main">
                    <button onClick={handleToggleMenu} className="nav-main--button"/></NavLink>

            </div>


            <div className="helper-container">
                <div className="helper-container__search">Поиск по сайту</div>

                <div onClick={togglePopup}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                     className={cn(`helper-container__basket`,
                         {
                             [`helper-container__basket-active`]:
                             isActiveBasket
                         })}>Корзина:  &nbsp;
                    {basketTextContent}</div>
                <BasketPopupBasketPopup
                    display={display}
                    basketItems={basketItems}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    closePopup={closePopup}
                />
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
    </div>;
};
