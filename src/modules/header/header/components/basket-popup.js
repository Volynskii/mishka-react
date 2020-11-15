import './basket-popup.scss'
import React from "react";

import BasketItem from './components/basket-item'

export default function BasketPopup({
                                        basketItems,
                                        display,
                                        handleMouseEnter,
                                        handleMouseLeave,
                                        closePopup
}) {

const totalPrice = basketItems.reduce((currentTotal, item) => {
    return item.itemPrice * item.itemQuantity + currentTotal
}, 0);

    return (
        <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{display: display}} className="basket-popup">
            <section className="basket-popup__header">
                <p className="basket-popup__header__text"/>

                <div onClick={closePopup} className="cl-btn-2">
                    <div>
                        <div className="leftright"/>
                        <div className="rightleft"/>
                        <span className="close-btn">закрыть</span>
                    </div>
                </div>

            </section>
            <section className="basket-popup__main">
                {basketItems.map((basketItem, index) =>
                    <BasketItem
                        basketItem={basketItem}
                        key={basketItem.id}
                    />)}
            </section>
            <section className="basket-popup__footer">
                <div className="basket-popup__price-block">
                    <div>Всего:</div>
                    <div>{totalPrice} руб.</div>
                </div>
                <button className="basket-popup__price-block__submit-button">Оформить заказ</button>
            </section>
        </article>

    );
}
